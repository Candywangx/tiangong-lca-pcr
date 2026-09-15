---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-oils-crude-or-refined-n-e-c
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 其他未另分类的粗制或精制植物油

## 1. 范围与适用性

本 PCR 适用于 CPC 21691 剩余类别中一种已明确植物来源的植物油在工厂门口的生产，产品状态可以是粗制、初榨、冷榨或精制。官方范围包括粗制和精制、但不包括化学改性的巴巴苏油、棕榈仁油、亚麻籽油、玉米油、蓖麻油、芝麻油、桐油、霍霍巴油、植物脂及其他未另分类植物油。数据包必须锁定一种植物来源和一种放行状态，不得报告来源不明的多油品平均值。

一体化提油场址的前景边界从接收含油种子、仁、果实、麸糠或胚芽开始；仅控制精炼的场址从接收粗油开始。边界覆盖实际发生的接收、清理、调质、破碎、压榨或溶剂萃取、澄清、脱胶、化学或物理精炼、脱色、脱臭、储存、包装、直接控制的公用工程、废水处理、废物、共产品和直接排放，直至工厂门口放行。

作为参考产品时排除 CPC 中另有子类的具名油、化学改性或氢化油、精油、调配混合物、下游食品、种植和外部运输。扩展研究可用独立数据集连接这些阶段。食用油应声明适用产品规范；非食用蓖麻油、桐油、霍霍巴油等技术级产品须声明用途等级，不得声称符合食品法典。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-vegetable-oils-crude-or-refined-n-e-c` |
| classification_refs | CPC 3.0：21691，其他未另分类的粗制或精制植物油 |
| covered_products | CPC 21691 剩余范围内一种植物来源明确的粗制、初榨、冷榨或精制植物油，包括官方说明所列实例 |
| excluded_products | 另行分类的大豆油、花生油、葵花籽/红花籽油、油菜籽/芥菜籽油、棕榈油、椰子油、橄榄油和棉籽油；氢化、交酯化、再酯化或反油酸化油；精油；混合物和制品 |
| representative_product | 工厂门口芝麻油；具体数据包必须锁定实际植物油及粗制、初榨、冷榨或精制状态 |
| production_route | 含油原料制备及机械或溶剂提取、粗油整理的一体化路线；或外购粗油经声明的化学/物理精炼路线；按实际情况包括储存、包装和放行 |
| market_state | 工厂门口净合格油；散装或包装；声明温度下为液态、半固态或固态；食品级或技术级；粗制、初榨、冷榨或精制 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种植物来源明确、处于声明的粗制、初榨、冷榨或精制工厂门口状态的其他植物油 |
| How much | 1 kg 净合格油，不含包装质量 |
| How well | 声明植物来源、提取和精炼路线、等级/规范、添加剂状态、水分与杂质基准、物态和包装状态 |
| How long or cycle | 一个放行批次或声明的代表性生产期；本中间产品不设使用寿命 |
| reference_flow_link | `storage_packaging_release` 中的 `release_reference_product` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 其他未另分类的粗制或精制植物油 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 植物俗名和学名；含油原料；粗制、初榨、冷榨或精制状态；机械、溶剂、化学精炼或物理精炼路线；食用或技术等级；适用规范；物态和发运温度；散装或包装物料清单；场址、地域和数据期 |

构建前景数据包时，每项必需限定信息都应写入元数据、过程说明、参考流备注、产品说明或等效字段。现有通用或仅精炼 Tiangong 候选均无法覆盖完整的粗制或精制语义边界，因此参考产品 UUID 保持未解决。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 放行参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 归一化到 1 kg 净合格油，并排除容器和运输包装质量。 |
| `botanical_route_lock` | 原料、粗油、中间品和放行油 | Mass | kg | 每个产品流保留一种植物来源和一种路线/状态；不得合并不同植物油或粗制与精制状态。 |
| `wet_dry_basis` | 种子、仁、麸糠、胚芽、饼粕和残渣 | Mass | kg | 记录接收湿基质量以及所有收率或平衡换算使用的水分或干物质基准。 |
| `energy_carrier_separation` | 电力、蒸汽、热和燃料 | Energy 或载体特定属性 | kWh、MJ、kg 或 m3 | 电力和蒸汽分别计量，每种燃料各自成卡；防止燃料与其产生的蒸汽或电力重复计算。 |
| `water_balance` | 新水、循环水、蒸发水和废水 | Mass 或 Volume | kg 或 m3 | 分开记录外部取水、内部循环和排放；质量—体积换算时声明密度。 |
| `solvent_balance` | 溶剂萃取 | Mass | kg | 同期核对溶剂补充、回收、产品或饼粕残留、废溶剂和直接释放。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一体化提取路线接收的植物来源明确的含油原料，或仅精炼路线接收的植物来源明确的粗油 |
| starting_condition_role | 前景制造入口；除非研究明确扩边，种植和外部入厂运输留在连接的上游数据集中 |
| product_classification_scope | CPC 21691 剩余范围内的一种粗制或精制植物油；分类引用不允许混合植物来源或路线状态 |
| recursive_input_rule | 外购同类油作为单独产品投入，具有自己的上游数据集及植物来源/状态限定信息，不得吸收到前景参考产出中 |
| upstream_dataset_requirement | 每种原料、粗油、电力、蒸汽或热、燃料、水、化学品、助剂、制冷剂和包装材料均连接代表性的上游数据集 |
| disclosure | 声明植物来源、起始原料、过程图、机械/溶剂路线、精炼路线、产品状态、公用工程、水和溶剂循环、共产品、废物、分配、包装、场址、地域、期间和排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_complete` | 前景制造 | 从声明的接收状态到放行纳入所有受控工序；粗油路线在粗油整理后结束，精制路线按实际纳入脱胶、中和、脱色和脱臭。 | `fao-oil-processing-1994`; `fao-cxc-79-2019`; `sun-rice-bran-oil-2022`; `gonzalez-sesame-biorefinery-2025` |
| `boundary_atomic_exchanges` | 清单 | 每种植物原料、电力、蒸汽、燃料、制冷剂、水、溶剂、化学品、包装、废物流和排放物质分别记录。 | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `boundary_route_conditionals` | 条件过程 | 只纳入实际发生的原料、提取、精炼、冬化、储存、包装和处理工序；披露绕过或外包工序并连接其数据集。 | `fao-oil-processing-1994`; `fao-cxc-79-2019` |
| `boundary_direct_releases` | 排放和废物 | 纳入控制设施后的实测或计算直接排放、废水转移、废介质、残渣、不合格油和包装废物，并注明介质与去向。 | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `boundary_upstream_downstream` | 连接的生命周期阶段 | 外购投入连接上游；除非另行加入，否则本工厂门口前景数据集排除配送、下游配方、使用和寿命终结。 | `iso-14044-2006`; `eu-pef-method-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `oil_material_preparation` | 含油原料接收与制备 | `conditional` | 报告场址控制种子、仁、麸糠、胚芽或果实制备时纳入 | 前景原料制备 | kg 已制备植物原料 |
| `oil_extraction_crude_finishing` | 油脂提取与粗油整理 | `conditional` | 场址从植物原料生产粗油时纳入 | 前景提取与分离 | kg 粗制植物油 |
| `oil_refining` | 化学或物理精炼 | `conditional` | 参考产品为精制油或场内控制任何精炼工序时纳入 | 前景精炼 | kg 精制植物油 |
| `storage_packaging_release` | 储存、包装与工厂门口放行 | `required` | 始终纳入；包装卡只适用于包装产品 | 参考产品放行 | 1 kg 净放行油 |
| `onsite_utilities_wastewater` | 场内公用工程与废水处理 | `conditional` | 控制燃料转换、蒸汽发生、制冷或废水处理时纳入 | 支持性前景过程 | 计量公用工程产出或处理流 |

### 过程：含油原料接收与制备（`oil_material_preparation`）

#### 输入

##### 产品流

###### 芝麻籽（`prep_sesame_seed`）

芝麻籽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：芝麻籽
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收芝麻籽质量；仅适用于芝麻路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`gonzalez-sesame-biorefinery-2025`; `fao-oil-processing-1994`

###### 乳木果仁（`prep_shea_kernel`）

乳木果仁作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：乳木果仁
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收干乳木果仁质量；仅适用于乳木果路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`

###### 米糠（`prep_rice_bran`）

米糠作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：米糠
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收稳定化或未稳定化米糠质量；仅适用于米糠油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`sun-rice-bran-oil-2022`; `fao-oil-processing-1994`

###### 玉米胚芽（`prep_corn_germ`）

玉米胚芽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：玉米胚芽
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收玉米胚芽质量；仅适用于玉米油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-oil-processing-1994`

###### 油棕仁（`prep_palm_kernel`）

油棕仁作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：油棕仁
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收棕榈仁质量；仅适用于棕榈仁油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-oil-processing-1994`

###### 亚麻籽（`prep_linseed`）

亚麻籽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：亚麻籽
- 流属性/单位：Mass / kg
- 数量规则：按批次记录净接收亚麻籽质量；仅适用于亚麻籽油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-oil-processing-1994`

###### 电力（`prep_electricity`）

电力作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量制备电力，或采用有记录的因果分摊。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019`; `jasaw-shea-resource-use-2015`

###### 蒸汽（`prep_steam`）

蒸汽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量调质或热处理使用的蒸汽焓。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-oil-processing-1994`; `eu-fdm-bat-2019`

###### 天然气（`prep_natural_gas`）

天然气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：仅计量直接燃烧制备设备消耗的天然气。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-fdm-bat-2019`

###### 工艺水（`prep_process_water`）

工艺水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量清洗或调质的外部补充水，不含循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`; `eu-fdm-bat-2019`

###### 氨制冷剂（`prep_ammonia_refrigerant`）

氨制冷剂作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：氨制冷剂
- 流属性/单位：Mass / kg
- 数量规则：使用冷藏原料库时，按库存平衡分配制冷剂补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

不规定该类型输入。

##### 基本流

不规定该类型输入。

#### 输出

##### 产品流

###### 已制备芝麻籽（`prep_prepared_sesame_seed`）

已制备芝麻籽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：已制备芝麻籽
- 流属性/单位：Mass / kg
- 数量规则：芝麻路线清理、调质、焙炒和破碎后的实测转移质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`gonzalez-sesame-biorefinery-2025`

##### 废物流

###### 含油原料制备异物（`prep_foreign_material_waste`）

含油原料制备异物作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：含油原料制备异物
- 流属性/单位：Mass / kg
- 数量规则：按去向称量去除异物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`fao-oil-processing-1994`

##### 基本流

###### 颗粒物排入空气（`prep_particulate_air`）

颗粒物排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：记录除尘后的实测释放或经验证计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

### 过程：油脂提取与粗油整理（`oil_extraction_crude_finishing`）

#### 输入

##### 产品流

###### 已制备芝麻籽（`extraction_prepared_sesame_seed`）

已制备芝麻籽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：已制备芝麻籽
- 流属性/单位：Mass / kg
- 数量规则：实测进入压榨或萃取的芝麻原料；其他植物路线新增其准确原料卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`gonzalez-sesame-biorefinery-2025`

###### 电力（`extraction_electricity`）

电力作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量驱动、压榨、泵送、过滤和溶剂回收电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 蒸汽（`extraction_steam`）

蒸汽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量蒸煮、脱溶或溶剂回收的蒸汽焓。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-oil-processing-1994`; `sun-rice-bran-oil-2022`

###### 天然气（`extraction_natural_gas`）

天然气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量提取设备直接使用的天然气；只有外购蒸汽过界时省略。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-fdm-bat-2019`

###### 正己烷（`extraction_hexane`）

正己烷作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：正己烷
- 流属性/单位：Mass / kg
- 数量规则：由采购与库存平衡计算补充量；仅适用于声明的溶剂路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`fao-oil-processing-1994`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 工艺水（`extraction_process_water`）

工艺水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量提取、分离或清洗的外部用水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`; `eu-fdm-bat-2019`

##### 废物流

不规定该类型输入。

##### 基本流

不规定该类型输入。

#### 输出

##### 产品流

###### 粗芝麻油（`extraction_crude_sesame_oil`）

粗芝麻油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：粗芝麻油
- 流属性/单位：Mass / kg
- 数量规则：实测澄清粗芝麻油；其他植物路线新增其准确粗油卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`gonzalez-sesame-biorefinery-2025`; `fao-cxc-79-2019`

###### 芝麻压榨饼（`extraction_sesame_cake`）

芝麻压榨饼作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：芝麻压榨饼
- 流属性/单位：Mass / kg
- 数量规则：按水分、残油基准和去向称量饼粕。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 粗芝麻油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：`gonzalez-sesame-biorefinery-2025`; `fao-oil-processing-1994`

##### 废物流

###### 废油过滤介质（`extraction_spent_filter_medium`）

废油过滤介质作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：废油过滤介质
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量含滞留油的废介质。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

###### 植物油提取废水（`extraction_wastewater`）

植物油提取废水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油提取废水
- 流属性/单位：Volume / m3
- 数量规则：计量转入处理或场外去向的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`naangmenyele-shea-input-output-2023`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

##### 基本流

###### 正己烷排入空气（`extraction_hexane_air`）

正己烷排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的正己烷
- 流属性/单位：Mass / kg
- 数量规则：溶剂路线控制后的实测释放或分配到空气的溶剂平衡损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 颗粒物排入空气（`extraction_particulate_air`）

颗粒物排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的颗粒物
- 流属性/单位：Mass / kg
- 数量规则：记录控制设施后的实测释放或经验证计算值。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 粗制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

### 过程：化学或物理精炼（`oil_refining`）

#### 输入

##### 产品流

###### 粗芝麻油（`refining_crude_sesame_oil`）

粗芝麻油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：粗芝麻油
- 流属性/单位：Mass / kg
- 数量规则：实测进入精炼的粗芝麻油；其他植物路线新增其准确粗油卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`fao-cxc-79-2019`; `gonzalez-sesame-biorefinery-2025`

###### 工艺水（`refining_process_water`）

工艺水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量脱胶、洗涤、真空系统和清洁外部用水，不含循环水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_records`
- 来源：`fao-cxc-79-2019`; `eu-fdm-bat-2019`

###### 磷酸（`refining_phosphoric_acid`）

磷酸作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：磷酸
- 流属性/单位：Mass / kg
- 数量规则：按浓度折算配方领用量；仅使用时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 柠檬酸（`refining_citric_acid`）

柠檬酸作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：柠檬酸
- 流属性/单位：Mass / kg
- 数量规则：按浓度折算配方领用量；仅使用时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 氢氧化钠（`refining_sodium_hydroxide`）

氢氧化钠作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：由溶液浓度和领用记录计算活性 NaOH 质量；仅化学中和路线。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 脱色土（`refining_bleaching_earth`）

脱色土作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：脱色土
- 流属性/单位：Mass / kg
- 数量规则：称量加入批次的干燥黏土质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 活性炭（`refining_activated_carbon`）

活性炭作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：活性炭
- 流属性/单位：Mass / kg
- 数量规则：称量加入的干活性炭；仅用于污染物去除时纳入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`fao-oil-processing-1994`

###### 蒸汽（`refining_steam`）

蒸汽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量加热、汽提和脱臭的蒸汽焓。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`; `sun-rice-bran-oil-2022`

###### 电力（`refining_electricity`）

电力作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量精炼、真空、泵送、过滤和冷却电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 天然气（`refining_natural_gas`）

天然气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量精炼设备直接用气；只有外购蒸汽过界时省略。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 氮气（`refining_nitrogen`）

氮气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：氮气
- 流属性/单位：Mass / kg
- 数量规则：使用惰化或汽提时记录计量或供应商数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_chemical_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

不规定该类型输入。

##### 基本流

不规定该类型输入。

#### 输出

##### 产品流

###### 精制芝麻油（`refining_refined_sesame_oil`）

精制芝麻油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：精制芝麻油
- 流属性/单位：Mass / kg
- 数量规则：实测转入储存的合格精制芝麻油；其他植物路线新增准确精制油卡。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`fao-cxc-79-2019`; `gonzalez-sesame-biorefinery-2025`

###### 湿油脚（`refining_wet_gums`）

湿油脚作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油湿油脚
- 流属性/单位：Mass / kg
- 数量规则：称量湿油脚并声明水分和去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 皂脚（`refining_soapstock`）

皂脚作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油皂脚
- 流属性/单位：Mass / kg
- 数量规则：按水分和去向称量皂脚；仅化学中和路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

##### 废物流

###### 废脱色土（`refining_spent_bleaching_earth`）

废脱色土作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：废脱色土
- 流属性/单位：Mass / kg
- 数量规则：按去向称量含滞留油的废土。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`fao-cxc-79-2019`; `eu-fdm-bat-2019`

###### 脱臭馏出物（`refining_deodorizer_distillate`）

脱臭馏出物作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油脱臭馏出物
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量馏出物；仅物理精炼或脱臭路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproduct_records`
- 来源：`fao-cxc-79-2019`; `fao-oil-processing-1994`

###### 植物油精炼废水（`refining_wastewater`）

植物油精炼废水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油精炼废水
- 流属性/单位：Volume / m3
- 数量规则：计量转入场内处理或场外去向的体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 精制植物油
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`fao-oil-processing-1994`; `sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

##### 基本流

不规定该类型输出。

### 过程：储存、包装与工厂门口放行（`storage_packaging_release`）

#### 输入

##### 产品流

###### 粗芝麻油（`release_crude_sesame_oil`）

粗芝麻油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：粗芝麻油
- 流属性/单位：Mass / kg
- 数量规则：实测进入最终储存的粗油；仅粗芝麻油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`fao-oil-processing-1994`

###### 精制芝麻油（`release_refined_sesame_oil`）

精制芝麻油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：精制芝麻油
- 流属性/单位：Mass / kg
- 数量规则：实测进入最终储存的精制油；仅精制芝麻油路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_outputs`
- 来源：`fao-cxs-19-1981`; `fao-cxc-79-2019`

###### 电力（`release_electricity`）

电力作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量储存、泵送、灌装、冷却和装运电力。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`sun-rice-bran-oil-2022`; `eu-fdm-bat-2019`

###### 天然气（`release_natural_gas`）

天然气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量直接加热储存或灌装用气；不存在时省略。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-fdm-bat-2019`

###### 氨制冷剂（`release_ammonia_refrigerant`）

氨制冷剂作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：氨制冷剂
- 流属性/单位：Mass / kg
- 数量规则：使用冷却储油时，按库存平衡分配制冷剂补充量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

###### 钢桶（`release_steel_drum`）

钢桶作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：钢桶
- 流属性/单位：Mass / kg
- 数量规则：桶数乘经核验的净包装质量，再分配至放行油。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 高密度聚乙烯容器（`release_hdpe_container`）

高密度聚乙烯容器作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：高密度聚乙烯容器
- 流属性/单位：Mass / kg
- 数量规则：容器数乘经核验的净容器质量，再分配至放行油。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

###### 瓦楞纸板箱（`release_corrugated_fibreboard`）

瓦楞纸板箱作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：瓦楞纸板箱
- 流属性/单位：Mass / kg
- 数量规则：箱数乘经核验的净纸箱质量，再分配至放行油。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-method-2021`

##### 废物流

不规定该类型输入。

##### 基本流

不规定该类型输入。

#### 输出

##### 产品流

###### 参考其他植物油（`release_reference_product`）

参考其他植物油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：其他未另分类的粗制或精制植物油
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：放行损失后、包装皮重前恰好 1 kg 净合格油。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 来源：`unsd-cpc-3-2025`; `eu-pef-method-2021`

##### 废物流

###### 不合格植物油（`release_off_spec_oil`）

不合格植物油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：不合格植物油
- 流属性/单位：Mass / kg
- 数量规则：按植物来源和去向称量未返工油。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

###### 废高密度聚乙烯（`release_waste_hdpe`）

废高密度聚乙烯作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：废高密度聚乙烯
- 流属性/单位：Mass / kg
- 数量规则：按去向称量废弃 HDPE 包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

###### 废瓦楞纸板（`release_waste_fibreboard`）

废瓦楞纸板作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：废瓦楞纸板
- 流属性/单位：Mass / kg
- 数量规则：按去向称量废弃瓦楞纸板。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 氨排入空气（`release_ammonia_air`）

氨排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的氨
- 流属性/单位：Mass / kg
- 数量规则：除非记录回收或其他去向，否则将制冷剂库存平衡损失分配至空气。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-fdm-bat-2019`

### 过程：场内公用工程与废水处理（`onsite_utilities_wastewater`）

#### 输入

##### 产品流

###### 天然气（`utility_natural_gas`）

天然气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：天然气
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量锅炉或供热设施的天然气消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量公用工程产出及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-fdm-bat-2019`; `sun-rice-bran-oil-2022`

###### 燃料油（`utility_fuel_oil`）

燃料油作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：燃料油
- 流属性/单位：Mass / kg
- 数量规则：计量或通过储罐平衡核算锅炉燃料油消耗。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每计量公用工程产出及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`eu-fdm-bat-2019`

###### 乳木果仁残渣燃料（`utility_shea_residue_fuel`）

乳木果仁残渣燃料作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：乳木果仁残渣
- 流属性/单位：Mass / kg
- 数量规则：称量场内燃烧的干乳木果残渣；仅适用于乳木果路线。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每计量公用工程产出及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_records`
- 来源：`jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023`

###### 废水处理用电（`utility_treatment_electricity`）

废水处理用电作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：设施供电电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量泵、曝气、脱水及控制系统用电。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019`

###### 氢氧化钠（`utility_sodium_hydroxide`）

氢氧化钠作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：依据领用量与浓度记录计算废水处理中使用的 NaOH 有效质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_chemical_records`
- 来源：`eu-fdm-bat-2019`

###### 三氯化铁（`utility_ferric_chloride`）

三氯化铁作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：三氯化铁
- 流属性/单位：Mass / kg
- 数量规则：依据领用量与浓度记录计算处理中使用的三氯化铁有效质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 m3 处理废水及每 1 kg 放行油品
- 基准类型：过程产出（`process_output`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_treatment_chemical_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

不规定该类型输入。

##### 基本流

不规定该类型输入。

#### 输出

##### 产品流

###### 蒸汽（`utility_steam`）

蒸汽作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：计量输送至前景过程的有用蒸汽焓。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_records`
- 来源：`eu-fdm-bat-2019`

###### 处理后工艺水（`utility_treated_water`）

处理后工艺水作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：处理后工艺水
- 流属性/单位：Volume / m3
- 数量规则：计量转供回用的处理后水；不得同时计作新鲜取水。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

##### 废物流

###### 废水处理污泥（`utility_wastewater_sludge`）

废水处理污泥作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：植物油废水处理污泥
- 流属性/单位：Mass / kg
- 数量规则：称量湿污泥，并申报干物质含量与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_records`
- 来源：`eu-fdm-bat-2019`

##### 基本流

###### 化石二氧化碳排入空气（`utility_fossil_carbon_dioxide_air`）

化石二氧化碳排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的化石二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：依据实测消耗与经审查因子，逐种化石燃料分别计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

###### 生物源二氧化碳排入空气（`utility_biogenic_carbon_dioxide_air`）

生物源二氧化碳排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的生物源二氧化碳
- 流属性/单位：Mass / kg
- 数量规则：对生物质燃料单独计算；不得与化石二氧化碳合并。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-pef-method-2021`

###### 甲烷排入空气（`utility_methane_air`）

甲烷排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的甲烷
- 流属性/单位：Mass / kg
- 数量规则：逐个燃烧或处理源分别实测或计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

###### 一氧化二氮排入空气（`utility_nitrous_oxide_air`）

一氧化二氮排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的一氧化二氮
- 流属性/单位：Mass / kg
- 数量规则：逐个燃烧或处理源分别实测或计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

###### 一氧化氮排入空气（`utility_nitrogen_monoxide_air`）

一氧化氮排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的一氧化氮
- 流属性/单位：Mass / kg
- 数量规则：记录控制后的实测排放，或依据实测燃料及运行数据计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

###### 二氧化硫排入空气（`utility_sulfur_dioxide_air`）

二氧化硫排入空气作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入空气的二氧化硫
- 流属性/单位：Mass / kg
- 数量规则：实测排放，或依据燃料含硫量和控制效率计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：燃料清单（`fuel_inventory`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_emission_records`
- 来源：`eu-fdm-bat-2019`

###### 化学需氧量排入水体（`utility_cod_water`）

化学需氧量排入水体作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入水体的化学需氧量
- 流属性/单位：Mass / kg
- 数量规则：处理后排放体积乘以流量比例 COD 浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

###### 总磷排入水体（`utility_total_phosphorus_water`）

总磷排入水体作为一个原子交换跨越该过程边界；其数量按下述规则取得。

- 选定流：排入水体的总磷
- 流属性/单位：Mass / kg
- 数量规则：处理后排放体积乘以流量比例总磷浓度。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 放行油品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_records`
- 来源：`eu-fdm-bat-2019`

## 7. 分配与联产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 提取、精炼、公用工程及包装 | 优先通过过程细分、分表计量和直接归属避免分配；将植物油特定的制备和整理直接归属至该油品。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_causal_physical` | 不可分离的油品与饼粕、湿胶质、皂脚或馏出物 | 无法细分时，仅在物理关系反映投入与产出因果关系时采用，并记录参数和水分基准。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `allocation_economic_fallback` | 剩余多产出负荷 | 无可辩护的物理关系时，采用共同过程出口的一致价格进行经济分配，并报告价格期、币种及敏感性。 | `eu-pef-method-2021` |
| `allocation_waste_status` | 残渣与不合格产出 | 有文件化市场或有益用途的产出视为联产品；否则按废物记录处理去向，且不得在本单元过程内给予避免负荷抵扣。 | `eu-pef-method-2021`; `jasaw-shea-resource-use-2015` |
| `allocation_internal_loops` | 回收油、溶剂、水、热与返工 | 内部转移仅记录一次，防止同一数量同时计为外部输入、产品抵扣或废物负荷。 | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `oil_material_preparation`; `oil_extraction_crude_finishing`; `oil_refining` | 植物原料与粗油 | 地磅、秤、储罐液位、供应商证明、批次票据 | 植物名称；物料状态；批次；毛重；皮重；净重；水分；实测含油率；来源；时间戳 | 核对验收、批次领用及库存 | kg；% m/m | 每批 | 与产出相同代表期 | 所有纳入场址与产线 | 按准确植物原料及状态汇总，不合并不同油种 | 校准；供应商证明；拒收记录；库存核对 |
| `cp_process_outputs` | 所有生产过程 | 制备原料、粗油、精炼油及参考产品 | 秤、储罐液位、流量计、批次与放行记录 | 身份；路线/状态；质量；水分；质量结果；去向；期初/期末库存；时间戳 | 测量每次转移并核对罐存或包装库存 | kg | 每批；期间核对 | 与投入相同期间 | 每条纳入产线 | 按准确植物身份及状态汇总合格产出 | 校准；批次平衡；实验室放行 |
| `cp_energy_records` | 所有纳入过程 | 电力与蒸汽 | 电表、分表、账单、蒸汽流量与状态记录 | 表读数；载能体；压力；温度；冷凝水回收；设备；批次归属 | 优先直接计量，否则采用文件化因果分配 | kWh；MJ | 连续或每批；月度核对 | 与产出相同期间 | 所有相关计量点及公用系统 | 扣除非生产负荷，防止燃料制能重复计数 | 校准；账单；仪表图；分配工作表 |
| `cp_fuel_records` | 制备、提取、精炼、放行与公用工程 | 每一种燃料 | 流量计、储罐液位、采购、库存及燃料规格 | 燃料身份；数量；单位；密度；热值；硫；生物质水分；设备；期间 | 逐种载能体核对采购、库存与计量 | kg；m3；MJ | 连续或每次交付；月度核对 | 与产出相同期间 | 每台燃烧装置 | 用文件化的载能体特定因子换算，不设通用燃料合计 | 仪表校准；发票；燃料证书；库存平衡 |
| `cp_water_records` | 制备、提取与精炼 | 新鲜水及循环水 | 供水表、分表、清洗日志 | 水源；读数；用途；循环；蒸发估算；去向 | 分别计量外部补水与内部循环 | m3 | 连续或每次事件；月度核对 | 与产出相同期间 | 所有纳入水系统 | 外部取水扣除文件化外送量；循环水不得重复计入 | 校准；水费单；循环图；平衡闭合 |
| `cp_solvent_balance` | `oil_extraction_crude_finishing` | 正己烷 | 采购、库存、回收计量、产品/饼粕检测、废物与排放记录 | 期初库存；采购；期末库存；回收溶剂；产品残留；饼粕残留；废物；排放 | 完成期间溶剂质量平衡 | kg | 每批及期间核对 | 与溶剂路线产出相同期间 | 每条用溶剂产线 | 投入应与回收、库存、残留、废物及排放在披露闭合度内相等 | 盘库；回收计量校准；检测报告；废物联单 |
| `cp_chemical_records` | `oil_refining` | 每一种精炼化学品或助剂 | 采购、领用、配方、退回与库存记录 | 化学品身份；浓度；批次；期初；收货；领用；退回；期末；生产批次 | 逐种化学品分别计算有效物质 | kg 有效物质 | 每批；月度核对 | 与产出相同期间 | 所有精炼线 | 期初加收货减期末和退回，按实际配方归属 | 发票；证书；配方授权；盘库 |
| `cp_refrigerant_records` | 制备与放行 | 氨制冷剂 | 钢瓶、维修与回收日志 | 制冷剂身份；期初；添加；回收；转移；期末；事故 | 年度或生产期质量平衡并归属事件 | kg | 每次维修；年度核对 | 与产出相同期间 | 所有纳入制冷系统 | 补充减回收和库存变化等于按去向记录的损失 | 维修证书；检漏；钢瓶记录 |
| `cp_packaging_records` | `storage_packaging_release` | 每一种包装部件 | 物料清单、计数、样品质量、采购及废料记录 | 材料；部件；件数；样品质量；灌装油量；退回；废料 | 计数并核验部件质量 | kg；件 | 每种包装形式；月度核对 | 与包装产出相同期间 | 所有纳入产线 | 部件质量除以合格净油量；散装产品包装记零 | BOM；校准秤；采购与废料核对 |
| `cp_coproduct_records` | 提取与精炼 | 饼粕、湿胶质、皂脚及馏出物 | 秤、储罐液位、销售及去向记录 | 身份；湿重；干物质；残油；质量；去向；分配用价格 | 测量每项产出并保留产品/废物决策 | kg | 每批或发运 | 与产出相同期间 | 每个联产品出口 | 按身份及去向汇总，保留分配输入 | 校准；销售记录；去向证据；实验室结果 |
| `cp_waste_records` | 所有纳入过程 | 每一种废物流 | 秤、联单、收集与处理记录 | 废物身份；质量；水分；危险状态；去向；处理；日期 | 称量每批外运或核对容器数 | kg | 每次外运 | 与产出相同期间 | 所有废物产生点 | 按准确废物及去向汇总 | 秤校准；联单；承包商回执 |
| `cp_wastewater_records` | 提取、精炼及处理 | 废水与水排放 | 进/排水计、流量比例样、实验室报告 | 体积；采样时间；COD；磷；其他物质浓度；处理；去向 | 计量流量并采用有代表性的混合采样 | m3；mg/L；kg | 连续流量；依许可或论证计划采样 | 与产出相同期间 | 所有纳入排口 | 浓度乘体积；按物质和去向汇总 | 仪表校准；样品监管链；认可实验室报告 |
| `cp_emission_records` | 所有纳入过程 | 每一种直接空气排放 | 烟道测试、连续监测、燃料与运行记录 | 物质；浓度；流量；时长；燃料；控制效率；不确定性 | 优先直接测量；计算须保留公式和实测输入 | kg；mg/Nm3 | 连续或代表性测试期 | 与产出相同期间 | 每个纳入排放源 | 按物质及介质分别计算汇总 | 监测仪校准；烟道报告；因子审查；控制日志 |
| `cp_treatment_chemical_records` | `onsite_utilities_wastewater` | 每一种处理化学品 | 采购、领用、浓度及库存记录 | 化学品；浓度；领用；退回；期初/期末库存；处理体积 | 由溶液记录计算有效物质 | kg 有效物质 | 每批；月度核对 | 与废水相同期间 | 所有处理单元 | 归属至处理体积并归一化至放行油品 | 发票；证书；库存核对；操作日志 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单行 | 归一化量 = 期间量 × 文件化分配份额 ÷ 放行油品净质量 | 实测量；分配份额；放行油品质量 | 每 1 kg 参考产品的数量 | `eu-pef-method-2021` |
| `calc_mass_balance` | 每个生产过程 | 期初库存 + 产品投入 = 期末库存 + 产品产出 + 联产品 + 废物 + 直接质量排放 + 未解释差额 | 所有质量及库存记录 | 平衡闭合与未解释差额 | `eu-pef-method-2021`; `jasaw-shea-resource-use-2015`; `naangmenyele-shea-input-output-2023` |
| `calc_oil_yield` | 提取与精炼 | 合格油品净产出 ÷ 收货态植物原料或粗油投入；报告水分、含油率及路线基准 | 投入与产出质量；水分；路线 | 路线特定收率，不作为类别默认值 | `sun-rice-bran-oil-2022`; `gonzalez-sesame-biorefinery-2025` |
| `calc_solvent_closure` | 溶剂路线 | 期初库存 + 采购 = 期末库存 + 回收溶剂 + 产品/饼粕残留 + 废物 + 排放 + 未解释差额 | 完整溶剂记录 | 溶剂闭合及按去向损失 | `eu-fdm-bat-2019`; `sun-rice-bran-oil-2022` |
| `calc_water_emission` | 处理后排放 | 排放物质质量 = 排放体积 × 流量比例浓度，并作单位换算 | 排放体积；浓度；采样覆盖 | 每参考产品的物质 kg | `eu-fdm-bat-2019` |
| `calc_allocation_share` | 多产出过程 | 应用申报的细分与分配层级；同一共同过程的联产品份额之和为一 | 直接归属；物理参数或一致价格 | 可复现分配份额 | `iso-14044-2006`; `eu-pef-method-2021` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_identity` | 每个产品行 | 从收货到放行保留单一植物身份、物料状态、工艺路线及等级；不得以通用植物油身份替代缺失事实。 | 供应商证明；批次谱系；过程图；放行规格 |
| `dq_measurement` | 质量、能源、水、溶剂、化学品及排放 | 使用经校准或核验的系统，并保留单位、换算因子、分析方法、检出限以及不确定性或局限。 | 校准台账；实验室报告；换算工作表；仪表图 |
| `dq_temporal` | 前景期间 | 有条件时使用有代表性的生产年度；生产期数据须说明理由，并覆盖对结果有实质影响的启动、停机、清洗与路线变更。 | 生产日历；停机日志；代表性说明 |
| `dq_completeness` | 过程与交换覆盖 | 核对物料、溶剂、水及能源记录；披露每项缺失测量、代理、排除及未解决 UUID；无测量不等于零。 | 平衡工作表；缺口登记；来源至行追踪 |
| `dq_route_geography` | 前景及上游数据集 | 匹配植物来源、提取/精炼技术、场址地域、电力与燃料供应、水源及期间，否则记录代理与偏差。 | 数据集元数据；供应商记录；代理理由 |
| `dq_allocation` | 多产出操作 | 保留复现分配所需的细分证据、数量、物理参数、价格、价格期、币种及敏感性。 | 分配工作簿；仪表图；销售记录；敏感性结果 |
| `dq_range_status` | 所有重要清单行 | 将缺少范围值视为明确证据缺口；不得由单一案例或相等上下限构造范围。 | manifest 未解决范围记录；文献审查；审查决定 |

## 9. 验证规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_flow` | 参考产品 | 确认恰为 1 kg 净放行油品、Mass 属性与质量单位组 UUID、单一植物身份、单一粗制/初榨/冷榨/精炼状态及全部必要限定；未解决的产品流 UUID 不得表示为已解决。 | `unsd-cpc-3-2025`; `eu-pef-method-2021` |
| `validate_scope_route` | 过程图与边界 | 确认起始条件及路线与纳入过程一致，并披露所有旁路、外包或不适用操作且按需连接。 | `fao-oil-processing-1994`; `fao-cxc-79-2019` |
| `validate_atomic_inventory` | 所有清单行 | 拒绝合并的电力/蒸汽/燃料、化学品集合、包装集合、废物集合或多物质排放行；每个选定流必须是一个物理交换。 | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `validate_balances` | 物料、溶剂、水与能源 | 由原始记录重新计算闭合，调查未解释差异，并防止内部回收、循环及公用工程转换重复计数。 | `eu-fdm-bat-2019`; `eu-pef-method-2021` |
| `validate_refining_route` | 精炼油 | 核验化学或物理精炼路线，以及脱胶、中和、脱色、脱臭的投入、残渣、废水和运行条件是否与申报路线一致。 | `fao-cxc-79-2019`; `fao-oil-processing-1994` |
| `validate_coproduct_allocation` | 饼粕、湿胶质、皂脚及馏出物 | 确认产品/废物状态，在可行时避免分配，一致应用层级，并要求共同过程全部份额之和为一。 | `iso-14044-2006`; `eu-pef-method-2021` |
| `validate_data_quality` | 前景数据包 | 检查身份、校准、时间覆盖、场址及路线代表性、来源可追溯性、缺失 UUID、范围缺口、代理、截断及更新触发条件。 | `eu-pef-method-2021`; `eu-fdm-bat-2019` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单一植物身份、单一申报工厂门口状态的其他植物油门到门前景单元过程数据集 |
| downstream_use | `secondary_dataset`; `background_dataset` |
| allowed_use | 植物油种、粗制/精炼状态、路线、等级、技术、地域、期间及包装与本数据集匹配，且上游边界已在申报起始条件连接的 LCA 模型 |
| excluded_use | 未说明的平均植物油；替代单列分类的命名油种；功能及限定条件未对齐时比较不同植物油或粗制/精炼状态；化学改性油；未纳入种植或收货粗油生产时作摇篮到大门声明 |
| required_metadata | PCR id 与生命周期状态；植物通名与学名；含油原料；产品状态；路线；等级/规格；场址与地域；期间；过程图；能源、水及溶剂系统；联产品与分配；包装；来源 id；未解决 UUID 与范围证据 |
| required_quality_disclosure | 测量与校准覆盖；物料、溶剂、水及能源闭合；时间、技术及地域代表性；缺失数据与代理；截断；分配敏感性；未解决流身份；缺少来源支持范围；局限性 |
| update_trigger | 植物投入、提取或精炼路线、等级/规格、能源或供水、溶剂系统、联产品去向或价格、分配、包装、处理、场址覆盖或数据期间发生变化；UUID 或范围证据缺口得到解决 |

## 11. 数据来源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | `dataset` | United Nations Statistics Division, *Central Product Classification (CPC) Version 3.0*, code 21691, 2025, https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-23） | 剩余产品范围、所含植物油示例、粗制/精炼覆盖及化学改性油排除 |
| `fao-cxs-19-1981` | `standard` | FAO/WHO, CXS 19-1981, *Standard for Edible Fats and Oils Not Covered by Individual Standards*, amended 2024, https://workspace.fao.org/sites/codex/Standards/CXS%2019-1981/CXS_019e.pdf（检索于 2026-08-23） | 食用油、初榨油及冷榨油定义；等级与放行规格；适用限制 |
| `fao-cxc-79-2019` | `official_guidance` | FAO/WHO, CXC 79-2019, *Code of Practice for the Reduction of 3-MCPDEs and GEs in Refined Oils and Food Products Made with Refined Oils*, 2019, https://workspace.fao.org/sites/codex/Standards/CXC%2079-2019/CXC_079e.pdf（检索于 2026-08-23） | 油料清理、粉碎和加热；粗油处理；化学与物理精炼；脱胶、中和、脱色、脱臭及路线特定监测 |
| `fao-oil-processing-1994` | `official_guidance` | FAO, *Fats and Oils in Human Nutrition*, Chapter 5, Processing and refining edible oils, 1994, https://www.fao.org/4/v4700e/v4700e0a.htm（检索于 2026-08-23） | 小型和大型原料制备、压榨与溶剂提取；饼粕；碱炼与物理精炼；化学品、废水、过滤及脱臭 |
| `eu-fdm-bat-2019` | `official_guidance` | European Commission, Commission Implementing Decision (EU) 2019/2031 establishing BAT conclusions for the food, drink and milk industries, 2019, https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-23） | 水、能源、原辅料、废水、废气及残渣的过程与清单要求；计量监测；正己烷、废水和排放核算 |
| `iso-14044-2006` | `standard` | ISO 14044:2006, *Environmental management — Life cycle assessment — Requirements and guidelines*, confirmed 2022, https://www.iso.org/standard/38498.html（检索于 2026-08-23） | LCA/LCI 目标、范围、清单、解释、报告与审查框架；分配与一致性 |
| `eu-pef-method-2021` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279, Annex I, *Product Environmental Footprint Method*, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-23） | 功能单位与参考流、系统边界、企业特定制造数据、完整性、分配、数据质量、验证与披露 |
| `jasaw-shea-resource-use-2015` | `literature` | Jasaw, G. S., Saito, O., and Takeuchi, K. (2015), *Shea (Vitellaria paradoxa) Butter Production and Resource Use by Urban and Rural Processors in Northern Ghana*, Sustainability 7, 3592–3614, https://doi.org/10.3390/su7043592（全文核验于 2026-08-23） | 乳木果工序与物料流边界、果仁、水、燃料木、电力、残渣及废水；不采用类别范围 |
| `naangmenyele-shea-input-output-2023` | `literature` | Naangmenyele, Z. et al. (2023), *Fundamentals of shea butter production; input-output analyses and profit maximization in Northern Ghana*, Research in Globalization 6, 100113, https://doi.org/10.1016/j.resglo.2023.100113（开放全文核验于 2026-08-23） | 独立乳木果投入产出证据：清洗、破碎、焙炒、研磨、揉捏、煮制、过滤、冷却、包装、水、燃料、残渣及废水；不采用类别范围 |
| `sun-rice-bran-oil-2022` | `literature` | Sun, L.-H., Wang, Y.-Y., and Gong, Y.-Q. (2022), *Life cycle assessment of rice bran oil production: a case study in China*, Environmental Science and Pollution Research 29, 39847–39859, https://doi.org/10.1007/s11356-021-18172-0（作者稿/全文核验于 2026-08-23） | 米糠运输、粗油提取、精炼与储存工序分解；电力、燃料、废水及正己烷；案例值不作范围 |
| `gonzalez-sesame-biorefinery-2025` | `literature` | Gonzalez, J. M. et al. (2025), *Techno-economic and Environmental Assessment of a Biorefinery for the Valorisation of Sesame Crop*, Chemical Engineering Transactions 117, 97–102, https://doi.org/10.3303/CET25117017（出版社全文核验于 2026-08-23） | 芝麻干燥/焙炒、研磨、冷榨、过滤、饼粕与精炼路线分解；模拟值不作范围 |
