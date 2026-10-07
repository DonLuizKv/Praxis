<script lang="ts">
	import { page } from '$app/state';

	const status = $derived(page.status);
	const detail = $derived(
		status === 404
			? (page.error?.message ?? 'La ruta que buscas no existe o ha sido movida.')
			: status === 500
				? 'Ocurrió un problema en nuestros servidores. Ya estamos trabajando para solucionarlo.'
				: (page.error?.message ?? 'Ocurrió un error inesperado.')
	);
	const title = $derived(status === 404 ? 'PÁGINA NO ENCONTRADA' : 'ALGO SALIÓ MAL');
</script>

<svelte:head>
	<title>{status} — Praxis</title>
	<meta name="description" content={detail} />
</svelte:head>

<h1>Esta es la pagina de errores {title}</h1>
