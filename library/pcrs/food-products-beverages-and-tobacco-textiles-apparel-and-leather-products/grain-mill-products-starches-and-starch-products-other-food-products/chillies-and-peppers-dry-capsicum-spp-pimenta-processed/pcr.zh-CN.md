---
schema_version: 1
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chillies-and-peppers-dry-capsicum-spp-pimenta-processed
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 干辣椒和胡椒（Capsicum、Pimenta），加工

## 1. 范围与适用性

本 PCR 适用于声明的 *Capsicum* 种果实或声明的 *Pimenta* 种浆果，经干燥或脱水并加工为整粒、切段、破碎、裂片、压碎、片状、研磨或粉末产品。干燥本身可以是加工步骤；设施也可以接收已干制物料，再实施分选、微生物减量、粒度加工、配料或包装。

一个前景数据包应恰好代表一种已声明的植物学物种和品种或贸易类型、一种原料入厂状态、一条干燥及后处理路线、一种粒度形态和粒度规格以及一种包装状态。不得在甜椒、辛辣椒、*Pimenta* 多香果、新鲜与已干制投入或整粒与粉末产品之间取平均。

范围不包括新鲜未加工椒类、*Piper nigrum* 产品、酱汁、糊状物、油树脂、精油、提取物、已不再具有单一声明椒类产品身份的混合香辛料，以及没有作为链接数据集提供的种植或工厂门后分销阶段。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.grain-mill-products-starches-and-starch-products-other-food-products.chillies-and-peppers-dry-capsicum-spp-pimenta-processed |
| classification_refs | CPC 3.0：23922，exact |
| covered_products | 声明 *Capsicum* 种的加工干制或脱水果实，以及声明 *Pimenta* 种的加工干制或脱水浆果；每个产品采用一种声明的整粒、切段、破碎、裂片、压碎、片状、研磨或粉末形态 |
| excluded_products | 新鲜未加工椒类；*Piper nigrum* 胡椒；辣椒酱或糊；油树脂、油或提取物；混合香辛料；缺少已声明植物学和加工身份的产品 |
| representative_product | 一种具体声明的加工干辣椒、红椒粉原料或 *Pimenta* 多香果产品 |
| production_route | 接收与身份控制，随后为实际适用的预处理、干燥、经验证微生物减量、粒度加工或配料、包装、储存、卫生及现场公用工程作业 |
| market_state | 干制，具有一种声明的粒度形态、含水状态和包装配置，位于报告设施工厂门口 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种具有已声明植物学身份、产品形态和加工路线的加工干制椒类产品 |
| How much | 1 kg 净产品，不含包装质量 |
| How well | 符合声明的含水率基准、粒度形态和规格、果梗/种子/胎座保留状态、处理状态、成分配方及包装规格 |
| How long or cycle | 报告设施工厂门口的一个成品生产批次；声明任何纳入前景的储存持续时间 |
| reference_flow_link | 参考数量是在所有纳入加工完成后、分销前，经核验 CPC 23922 产品流的净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | 辣椒和胡椒，干（辣椒属，皮门塔），加工品 `fa9bf702-43d4-414e-a2da-0dad135e5df7` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 学名；品种或贸易类型；辣椒、红椒粉原料或多香果名称；入厂新鲜或干制状态；入厂和产品含水率结果及基准；干燥技术以及是否在现场；微生物减量方法或无；果梗、种子和胎座保留状态；整粒、切段、破碎、裂片、压碎、片状、研磨或粉末形态；声明的粒度规格；每种添加成分或无；包装配置；储存条件和时间；地理；报告期；工厂门位置 |

构建前景数据包时，所有必需限定信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失限定信息会使该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 扣除实测包装皮重后计量椒类净产品质量；包装另行列入清单。 |
| `botanical_state_separation` | 入厂椒类物料 | Mass | kg | 按学名、品种或贸易类型以及新鲜或干制入厂状态分别记录质量；不得对植物学身份或状态取平均或合并。 |
| `moisture_basis_alignment` | 入厂、中间及最终椒类物料 | Mass fraction | kg/kg | 记录每个含水率结果及其湿基或干基；所有干燥质量平衡项采用一致的声明基准。 |
| `energy_unit_conversion` | 电力与热能 | Energy | kWh 或 MJ | 保留表计单位；需要换算时采用 1 kWh = 3.6 MJ，并保留原始记录。 |
| `water_unit_conversion` | 清洗水和清洁水 | Volume 或 Mass | m3 或 kg | 保留实测单位；任何质量—体积换算均采用相关水状态的实测或来源披露密度。 |
| `packaging_component_mass` | 每个包装组件 | Mass | kg | 从称量领用量或件数乘以实测单件质量分别确定各材料；不得采用合并包装材料总量。 |
| `internal_rework_exclusion` | 内部椒类返工 | Mass | kg | 为过程控制追踪内部循环，但不将其计为新的边界投入或输出；披露任何跨越报告边界的返工。 |
| `emission_substance_mass` | 每项直接空气或水排放 | Mass | kg | 独立报告每种具名物质或监测污染物；保留测量或计算基准及排放环境介质。 |

## 5. 系统边界

前景边界始于唯一声明的椒类原料在报告设施被接收，终于 1 kg 净包装加工干制椒类离开工厂门。边界包括下列适用前景作业和直接交换。被接收植物原料、外购公用工程、化学品和包装的上游生产，以及场外废物处理，采用链接的上游数据集表示，不得无说明地并入本前景清单。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 一种植物学身份明确的 *Capsicum* 果实或 *Pimenta* 浆果原料，以一种声明的新鲜或已干制状态及含水条件在报告设施被接收。 |
| starting_condition_role | 前景门口投入；其身份和状态决定适用的预处理、干燥及后续工序行。 |
| product_classification_scope | CPC 3.0 子类 23922 内的加工干制或脱水 *Capsicum* 或 *Pimenta* 产品；不得跨物种或产品形态取平均。 |
| recursive_input_rule | 若购入投入已经是同一类别的加工干制椒类，则仅记录一次该准确产品投入及其上游数据集，披露剩余下游加工，并在该投入处停止类别递归展开。 |
| upstream_dataset_requirement | 为声明的植物原料及入厂状态、每项外购公用工程、每种实际化学品或成分、每个包装组件和每项场外处理服务链接具有代表性的上游数据集。 |
| disclosure | 声明物种及品种或贸易类型、原料状态、含水率基准、所有纳入和省略工序、干燥与微生物减量技术、粒度形态、成分、包装、储存、地理、期间及分配选择。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_lock` | 前景数据包 | 仅纳入声明产品实际使用的工艺路线，并解释每个条件工序为何纳入或省略。 | `codex-cxc-42-1995`；`eu-pef-2021-2279` |
| `boundary_upstream_links` | 外购投入 | 将上游生产保留在前景设施模型之外，但为每项被接收原料、公用工程、化学品、成分和包装组件链接上游数据集。 | `eu-pef-2021-2279` |
| `boundary_direct_releases` | 设施排放与废物 | 纳入各前景工序产生的每项直接空气排放、废水污染物和废物流。 | `jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031` |
| `boundary_packaging` | 参考产品 | 纳入在工厂门交付参考产品所实际使用的一级、二级和三级包装，同时将包装质量排除在 1 kg 净产品数量之外。 | `codex-cxc-42-1995`；`eu-pef-2021-2279` |
| `boundary_recursive_product` | 同类别投入 | 记录购入加工干制椒类投入的准确身份及链接上游数据集后停止递归展开；不得重复计算上游干燥。 | `eu-pef-2021-2279` |

## 6. 过程清单结构

以下每张流卡均为一个原子交换。具体数据包仅保留实际适用的植物原料、技术、成分、包装、燃料、制冷剂、废物和排放行，并为其提供前景记录或计算。未使用候选项不得平均并入其他行。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_material_receipt_and_sorting` | 原料接收与分选 | required | 每个数据包均记录接收、植物学身份、入厂状态和分选。 | 前景接收、身份控制和物理危害去除 | 唯一声明植物原料的入厂质量 |
| `washing_and_preparation` | 清洗与预处理 | conditional | 仅当报告设施实施湿法清洗、漂烫、修整、去梗、去籽或切分时纳入。 | 前景湿法预处理与物料分离 | 预处理后椒类物料质量 |
| `drying` | 干燥 | conditional | 当报告设施实施初次干燥、补充干燥或蒸汽处理后再干燥时纳入；否则披露上游干燥数据集。 | 前景水分去除 | 离开干燥步骤的干椒质量 |
| `microbial_reduction_treatment` | 微生物减量处理 | conditional | 仅对实际采用且依法许可并经验证的蒸汽、熏蒸或辐照处理纳入。 | 前景病原体减量处理 | 按声明方法处理的椒类质量 |
| `milling_sieving_and_formulation` | 粉碎、筛分与配料 | conditional | 对切段、破碎、压碎、片状、研磨或粉末产品，以及实际加入抗结剂时纳入。 | 前景粒度制备、分离与配料 | 离开该步骤的声明产品形态质量 |
| `packaging_and_storage` | 包装与储存 | required | 每个数据包均记录实际一级、二级和三级包装配置，以及出厂门前实施的任何受控储存。 | 前景包装、成品储存和参考输出 | 工厂门口 1 kg 净包装参考产品 |
| `cleaning_and_wastewater_management` | 清洁与废水管理 | required | 每个数据包均记录实际存在的干式清洁，以及任何湿式清洁或废水作业。 | 前景卫生、残留物收集和排水核算 | 1 kg 净包装参考产品 |
| `onsite_thermal_energy_supply` | 现场热能供应 | conditional | 当燃料在现场燃烧以用于直接干燥、蒸汽、热水或其他工艺热时纳入；外购公用工程则记录在其消费工序。 | 前景燃料燃烧与直接空气排放核算 | 1 kg 净包装参考产品 |

### 过程：原料接收与分选（`raw_material_receipt_and_sorting`）

#### 输入

##### 产品流

###### 新鲜 Capsicum annuum 果实（`fresh_capsicum_annuum_fruit_input`）

“Fresh ripe fruit of Capsicum annuum”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Fresh ripe fruit of Capsicum annuum
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干制 Capsicum annuum 果实（`dried_capsicum_annuum_fruit_input`）

“Dried fruit of Capsicum annuum”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Dried fruit of Capsicum annuum
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 新鲜 Capsicum frutescens 果实（`fresh_capsicum_frutescens_fruit_input`）

“Fresh ripe fruit of Capsicum frutescens”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Fresh ripe fruit of Capsicum frutescens
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干制 Capsicum frutescens 果实（`dried_capsicum_frutescens_fruit_input`）

“Dried fruit of Capsicum frutescens”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Dried fruit of Capsicum frutescens
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 新鲜 Capsicum chinense 果实（`fresh_capsicum_chinense_fruit_input`）

“Fresh ripe fruit of Capsicum chinense”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Fresh ripe fruit of Capsicum chinense
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干制 Capsicum chinense 果实（`dried_capsicum_chinense_fruit_input`）

“Dried fruit of Capsicum chinense”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Dried fruit of Capsicum chinense
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 新鲜 Pimenta dioica 浆果（`fresh_pimenta_dioica_berry_input`）

“Fresh berries of Pimenta dioica”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Fresh berries of Pimenta dioica
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-358-2024`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干制 Pimenta dioica 浆果（`dried_pimenta_dioica_berry_input`）

“Dried berries of Pimenta dioica”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Dried berries of Pimenta dioica
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-358-2024`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 新鲜 Pimenta racemosa 浆果（`fresh_pimenta_racemosa_berry_input`）

“Fresh berries of Pimenta racemosa var. racemosa”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Fresh berries of Pimenta racemosa var. racemosa
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-358-2024`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干制 Pimenta racemosa 浆果（`dried_pimenta_racemosa_berry_input`）

“Dried berries of Pimenta racemosa var. racemosa”是植物学身份明确的候选入厂原料。仅当其种、品种或贸易类型以及入厂含水状态与数据集声明一致时记录。

- 选定流：Dried berries of Pimenta racemosa var. racemosa
- 流属性/单位：Mass / kg
- 数量规则：记录该种和入厂状态的称量接收质量；不得与另一物种、品种组或含水状态合并。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_identity_mass`
- 来源：`codex-cxs-358-2024`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 接收与分选用电（`receipt_sorting_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
#### 输出

##### 废物流

###### 霉变 Capsicum 果实废物（`mouldy_capsicum_fruit_waste`）

仅当“Mouldy Capsicum fruit”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Mouldy Capsicum fruit
- 流属性/单位：Mass / kg
- 数量规则：记录“Mouldy Capsicum fruit”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_sorting_residues`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 霉变 Pimenta 浆果废物（`mouldy_pimenta_berry_waste`）

仅当“Mouldy Pimenta berries”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Mouldy Pimenta berries
- 流属性/单位：Mass / kg
- 数量规则：记录“Mouldy Pimenta berries”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_sorting_residues`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 外来植物残屑（`foreign_plant_debris_waste`）

仅当“Foreign plant debris from pepper sorting”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Foreign plant debris from pepper sorting
- 流属性/单位：Mass / kg
- 数量规则：记录“Foreign plant debris from pepper sorting”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_sorting_residues`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 分选石块废物（`stone_sorting_reject_waste`）

仅当“Stones from pepper sorting”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Stones from pepper sorting
- 流属性/单位：Mass / kg
- 数量规则：记录“Stones from pepper sorting”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_sorting_residues`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 分选铁质金属废物（`ferrous_metal_sorting_reject_waste`）

仅当“Ferrous metal pieces from pepper sorting”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Ferrous metal pieces from pepper sorting
- 流属性/单位：Mass / kg
- 数量规则：记录“Ferrous metal pieces from pepper sorting”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_sorting_residues`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
### 过程：清洗与预处理（`washing_and_preparation`）

#### 输入

##### 产品流

###### 椒类清洗水（`pepper_washing_water_input`）

“Process water for pepper washing”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Process water for pepper washing
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本工序的“Process water for pepper washing”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_water_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 清洗与预处理用电（`preparation_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 漂烫用外购蒸汽（`blanching_steam_input`）

“Steam, purchased”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Steam, purchased”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utility_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 漂烫用外购热水（`blanching_hot_water_input`）

“Hot water, purchased”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Hot water, purchased”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_utility_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 清洗用次氯酸钠（`washing_sodium_hypochlorite_input`）

“Sodium hypochlorite”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Sodium hypochlorite”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_chemical_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 清洗用过氧乙酸（`washing_peracetic_acid_input`）

“Peracetic acid”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Peracetic acid”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_chemical_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
#### 输出

##### 产品流

###### 预处理产生的 Capsicum 果梗共产品（`preparation_capsicum_stalk_coproduct`）

仅当“Capsicum stalks”离开本工序且具有已记录的预定用途或经济价值时才作为共产品记录；同一物料不得同时记录为废物。

- 选定流：Capsicum stalks
- 流属性/单位：Mass / kg
- 数量规则：记录作为共产品出售或转移的“Capsicum stalks”单独称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 预处理产生的 Capsicum 种子共产品（`preparation_capsicum_seed_coproduct`）

仅当“Capsicum seeds”离开本工序且具有已记录的预定用途或经济价值时才作为共产品记录；同一物料不得同时记录为废物。

- 选定流：Capsicum seeds
- 流属性/单位：Mass / kg
- 数量规则：记录作为共产品出售或转移的“Capsicum seeds”单独称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
##### 废物流

###### 预处理产生的 Capsicum 果梗废物（`preparation_capsicum_stalk_waste`）

仅当“Discarded Capsicum stalks”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Discarded Capsicum stalks
- 流属性/单位：Mass / kg
- 数量规则：记录“Discarded Capsicum stalks”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 预处理产生的 Capsicum 种子废物（`preparation_capsicum_seed_waste`）

仅当“Discarded Capsicum seeds”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Discarded Capsicum seeds
- 流属性/单位：Mass / kg
- 数量规则：记录“Discarded Capsicum seeds”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 修整椒体组织废物（`trimmed_pepper_tissue_waste`）

仅当“Damaged pepper fruit tissue”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Damaged pepper fruit tissue
- 流属性/单位：Mass / kg
- 数量规则：记录“Damaged pepper fruit tissue”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_material_balance`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 椒类清洗废水（`pepper_washing_wastewater_output`）

仅当“Wastewater from pepper washing”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Wastewater from pepper washing
- 流属性/单位：Volume / m3
- 数量规则：记录“Wastewater from pepper washing”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_wastewater_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：干燥（`drying`）

#### 输入

##### 产品流

###### 干燥用电（`drying_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 干燥用外购蒸汽（`drying_purchased_steam_input`）

“Steam, purchased”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Steam, purchased”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 干燥用外购热水（`drying_purchased_hot_water_input`）

“Hot water, purchased”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Hot water, purchased”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
#### 输出

##### 废物流

###### 过度干燥椒类废物（`overdried_pepper_waste`）

仅当“Over-dried pepper material”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Over-dried pepper material
- 流属性/单位：Mass / kg
- 数量规则：记录“Over-dried pepper material”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_drying_material_balance`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
##### 基本流

###### 干燥水蒸气排入空气（`drying_water_vapour_to_air`）

“Water vapour to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Water vapour to air
- 流属性/单位：Mass / kg
- 数量规则：根据实测入料和出料质量及含水率并结合废料平衡，计算去除水质量；不得采用假定含水率。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_material_balance`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 干燥椒类粉尘排入空气（`dryer_pepper_dust_to_air`）

“Pepper particulate dust to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Pepper particulate dust to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_drying_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：微生物减量处理（`microbial_reduction_treatment`）

#### 输入

##### 产品流

###### 微生物减量处理用电（`microbial_treatment_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 微生物减量处理用蒸汽（`microbial_treatment_steam_input`）

“Steam, purchased”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Steam, purchased”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 环氧乙烷处理剂（`ethylene_oxide_treatment_input`）

仅当环氧乙烷在适用法域内合法、已针对声明产品验证且实际使用时，才将其作为一项处理化学品记录。

- 选定流：Ethylene oxide
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Ethylene oxide”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 环氧丙烷处理剂（`propylene_oxide_treatment_input`）

仅当环氧丙烷在适用法域内合法、已针对声明产品验证且实际使用时，才将其作为一项处理化学品记录。

- 选定流：Propylene oxide
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Propylene oxide”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 伽马辐照处理服务（`gamma_irradiation_service_input`）

“Gamma irradiation treatment service for dried spices”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Gamma irradiation treatment service for dried spices
- 流属性/单位：Mass treated / kg
- 数量规则：记录归属于本工序的“Gamma irradiation treatment service for dried spices”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 电子束处理服务（`electron_beam_treatment_service_input`）

“Electron-beam treatment service for dried spices”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Electron-beam treatment service for dried spices
- 流属性/单位：Mass treated / kg
- 数量规则：记录归属于本工序的“Electron-beam treatment service for dried spices”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_microbial_treatment_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
#### 输出

##### 基本流

###### 环氧乙烷排入空气（`ethylene_oxide_to_air`）

“Ethylene oxide to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Ethylene oxide to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_microbial_treatment_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 环氧丙烷排入空气（`propylene_oxide_to_air`）

“Propylene oxide to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Propylene oxide to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_microbial_treatment_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：粉碎、筛分与配料（`milling_sieving_and_formulation`）

#### 输入

##### 产品流

###### 粉碎与筛分用电（`milling_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 粉碎控制用压缩空气（`milling_compressed_air_input`）

“Compressed air”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：压缩空气
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本工序的“Compressed air”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 二氧化硅抗结剂（`silicon_dioxide_anticaking_input`）

仅当产品配方明确识别二氧化硅、其用于该产品依法获准且实际加入时记录；本卡不构成使用许可。

- 选定流：Silicon dioxide
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Silicon dioxide”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredient_records`
- 来源：`codex-cxs-353-2022`；`codex-cxs-358-2024`；`eu-pef-2021-2279`
###### 硅酸钙抗结剂（`calcium_silicate_anticaking_input`）

仅当产品配方明确识别硅酸钙、其用于该产品依法获准且实际加入时记录；本卡不构成使用许可。

- 选定流：Calcium silicate
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Calcium silicate”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredient_records`
- 来源：`codex-cxs-353-2022`；`codex-cxs-358-2024`；`eu-pef-2021-2279`
###### 磷酸三钙抗结剂（`tricalcium_phosphate_anticaking_input`）

仅当产品配方明确识别磷酸三钙、其用于该产品依法获准且实际加入时记录；本卡不构成使用许可。

- 选定流：Tricalcium phosphate
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Tricalcium phosphate”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_formulation_ingredient_records`
- 来源：`codex-cxs-353-2022`；`codex-cxs-358-2024`；`eu-pef-2021-2279`
#### 输出

##### 产品流

###### 粉碎工序产生的 Capsicum 果梗共产品（`milling_capsicum_stalk_coproduct`）

仅当“Capsicum stalks”离开本工序且具有已记录的预定用途或经济价值时才作为共产品记录；同一物料不得同时记录为废物。

- 选定流：Capsicum stalks
- 流属性/单位：Mass / kg
- 数量规则：记录作为共产品出售或转移的“Capsicum stalks”单独称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 粉碎工序产生的 Capsicum 种子共产品（`milling_capsicum_seed_coproduct`）

仅当“Capsicum seeds”离开本工序且具有已记录的预定用途或经济价值时才作为共产品记录；同一物料不得同时记录为废物。

- 选定流：Capsicum seeds
- 流属性/单位：Mass / kg
- 数量规则：记录作为共产品出售或转移的“Capsicum seeds”单独称量质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
##### 废物流

###### 粉碎工序产生的 Capsicum 果梗废物（`milling_capsicum_stalk_waste`）

仅当“Discarded Capsicum stalks”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Discarded Capsicum stalks
- 流属性/单位：Mass / kg
- 数量规则：记录“Discarded Capsicum stalks”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 粉碎工序产生的 Capsicum 种子废物（`milling_capsicum_seed_waste`）

仅当“Discarded Capsicum seeds”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Discarded Capsicum seeds
- 流属性/单位：Mass / kg
- 数量规则：记录“Discarded Capsicum seeds”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_material_balance`
- 来源：`codex-cxs-353-2022`；`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 粉碎工序捕集的椒类粉尘废物（`captured_milling_pepper_dust_waste`）

仅当“Captured pepper dust”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Captured pepper dust
- 流属性/单位：Mass / kg
- 数量规则：记录“Captured pepper dust”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_milling_dust_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
##### 基本流

###### 粉碎椒类粉尘排入空气（`milling_pepper_dust_to_air`）

“Pepper particulate dust to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Pepper particulate dust to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_milling_dust_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：包装与储存（`packaging_and_storage`）

#### 输入

##### 产品流

###### 包装与储存用电（`packaging_storage_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 惰性气体包装用氮气（`packaging_nitrogen_input`）

“Nitrogen gas”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Nitrogen gas
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Nitrogen gas”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 低密度聚乙烯包装膜（`ldpe_packaging_film_input`）

“Low-density polyethylene film”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Low-density polyethylene film”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 聚丙烯包装膜（`polypropylene_packaging_film_input`）

“Polypropylene film”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Polypropylene film
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Polypropylene film”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 聚对苯二甲酸乙二醇酯罐（`pet_packaging_jar_input`）

“Polyethylene terephthalate jar”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Polyethylene terephthalate jar
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Polyethylene terephthalate jar”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 玻璃包装罐（`glass_packaging_jar_input`）

“Glass jar”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Glass jar
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Glass jar”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 铝包装箔（`aluminium_packaging_foil_input`）

“Aluminium foil”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Aluminium foil
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Aluminium foil”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 瓦楞纸板箱（`corrugated_board_box_input`）

“Corrugated fibreboard box”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Corrugated fibreboard box”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 纸标签（`paper_label_input`）

“Paper label”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Paper label”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 木托盘（`wood_pallet_input`）

“Wood pallet”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Wood pallet”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 低密度聚乙烯缠绕膜（`ldpe_stretch_film_input`）

“Low-density polyethylene stretch film”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：低密度聚乙烯拉伸膜
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Low-density polyethylene stretch film”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 氨制冷剂（`ammonia_refrigerant_input`）

“Ammonia refrigerant (R717)”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：氨制冷剂（R717）
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Ammonia refrigerant (R717)”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 二氧化碳制冷剂（`carbon_dioxide_refrigerant_input`）

“Carbon dioxide refrigerant (R744)”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：二氧化碳制冷剂（R744）
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Carbon dioxide refrigerant (R744)”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### HFC-134a 制冷剂（`hfc134a_refrigerant_input`）

“1,1,1,2-Tetrafluoroethane refrigerant (R134a)”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：1,1,1,2-Tetrafluoroethane refrigerant (R134a)
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“1,1,1,2-Tetrafluoroethane refrigerant (R134a)”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
#### 输出

##### 产品流

###### 加工干辣椒和胡椒参考产品（`processed_dry_chillies_and_peppers_reference_output`）

这是经核验的 CPC 23922 参考产品流。一个数据集仅代表一种已声明的植物学身份、入厂状态、加工路线、粒度形态和包装状态，不得在 Capsicum、Pimenta 或产品形态之间取平均。

- 选定流：辣椒和胡椒，干（辣椒属，皮门塔），加工品 `fa9bf702-43d4-414e-a2da-0dad135e5df7`
- 流属性/单位：Mass / kg
- 数量规则：工厂门口恰好 1 kg 净产品，不含包装质量。
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：工厂门口 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 采集协议：`cp_reference_product_mass`
- 来源：`un-cpc-3.0-23922`；`codex-cxs-353-2022`；`codex-cxs-358-2024`
##### 废物流

###### 低密度聚乙烯包装废物（`ldpe_packaging_waste`）

仅当“Low-density polyethylene packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Low-density polyethylene packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Low-density polyethylene packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 聚丙烯包装废物（`polypropylene_packaging_waste`）

仅当“Polypropylene packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Polypropylene packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Polypropylene packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 聚对苯二甲酸乙二醇酯包装废物（`pet_packaging_waste`）

仅当“Polyethylene terephthalate packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Polyethylene terephthalate packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Polyethylene terephthalate packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 玻璃包装废物（`glass_packaging_waste`）

仅当“Glass packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Glass packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Glass packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 铝包装废物（`aluminium_packaging_waste`）

仅当“Aluminium packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Aluminium packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Aluminium packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 瓦楞纸板包装废物（`corrugated_board_packaging_waste`）

仅当“Corrugated fibreboard packaging waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Corrugated fibreboard packaging waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 纸标签废物（`paper_label_waste`）

仅当“Paper label waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Paper label waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 木托盘废物（`wood_pallet_waste`）

仅当“Wood pallet waste”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Wood pallet waste
- 流属性/单位：Mass / kg
- 数量规则：记录“Wood pallet waste”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
##### 基本流

###### 氨制冷剂排入空气（`ammonia_refrigerant_to_air`）

“Ammonia to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：利用期初库存、采购、补充、回收、退回和期末库存，按物质特定制冷剂质量平衡计算 R717 损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 二氧化碳制冷剂排入空气（`carbon_dioxide_refrigerant_to_air`）

“Carbon dioxide, fossil, to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：按物质特定制冷剂质量平衡计算 R744 损失；与燃烧二氧化碳分开。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### HFC-134a 制冷剂排入空气（`hfc134a_refrigerant_to_air`）

“1,1,1,2-Tetrafluoroethane to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：利用期初库存、采购、补充、回收、退回和期末库存，按物质特定制冷剂质量平衡计算 R134a 损失。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_storage_refrigerant_inventory`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：清洁与废水管理（`cleaning_and_wastewater_management`）

#### 输入

##### 产品流

###### 设备清洗水（`equipment_cleaning_water_input`）

“Water for equipment cleaning”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Water for equipment cleaning
- 流属性/单位：Volume / m3
- 数量规则：记录归属于本工序的“Water for equipment cleaning”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
###### 清洁与废水管理用电（`cleaning_electricity_input`）

“Electricity, facility supply”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：厂区供电
- 流属性/单位：Energy / kWh
- 数量规则：记录归属于本工序的“Electricity, facility supply”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_utility_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide_input`）

“Sodium hydroxide”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Sodium hydroxide”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite_input`）

“Sodium hypochlorite”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Sodium hypochlorite”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 过氧乙酸消毒剂（`cleaning_peracetic_acid_input`）

“Peracetic acid”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：过氧乙酸
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Peracetic acid”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_material_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
#### 输出

##### 废物流

###### 清洁废水（`cleaning_wastewater_output`）

仅当“Wastewater from equipment cleaning”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Wastewater from equipment cleaning
- 流属性/单位：Volume / m3
- 数量规则：记录“Wastewater from equipment cleaning”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 废水处理污泥（`wastewater_treatment_sludge_output`）

仅当“Sludge from pepper-processing wastewater treatment”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Sludge from pepper-processing wastewater treatment
- 流属性/单位：Mass / kg
- 数量规则：记录“Sludge from pepper-processing wastewater treatment”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 废氢氧化钠清洗液（`spent_sodium_hydroxide_solution_waste`）

仅当“Spent sodium hydroxide cleaning solution”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Spent sodium hydroxide cleaning solution
- 流属性/单位：Mass / kg
- 数量规则：记录“Spent sodium hydroxide cleaning solution”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 废次氯酸钠消毒液（`spent_sodium_hypochlorite_solution_waste`）

仅当“Spent sodium hypochlorite disinfectant solution”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Spent sodium hypochlorite disinfectant solution
- 流属性/单位：Mass / kg
- 数量规则：记录“Spent sodium hypochlorite disinfectant solution”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 废过氧乙酸消毒液（`spent_peracetic_acid_solution_waste`）

仅当“Spent peracetic acid disinfectant solution”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Spent peracetic acid disinfectant solution
- 流属性/单位：Mass / kg
- 数量规则：记录“Spent peracetic acid disinfectant solution”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_waste_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 干式清洁收集的椒类粉尘废物（`dry_cleaning_pepper_dust_waste`）

仅当“Pepper dust collected by dry cleaning”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Pepper dust collected by dry cleaning
- 流属性/单位：Mass / kg
- 数量规则：记录“Pepper dust collected by dry cleaning”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_waste_records`
- 来源：`codex-cxc-42-1995`；`eu-pef-2021-2279`
##### 基本流

###### 化学需氧量排入水体（`chemical_oxygen_demand_to_water`）

“Chemical oxygen demand to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：化学需氧量，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 生化需氧量排入水体（`biochemical_oxygen_demand_to_water`）

“Biochemical oxygen demand (5-day) to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Biochemical oxygen demand (5-day) to water
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 总悬浮固体排入水体（`total_suspended_solids_to_water`）

“Total suspended solids to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：总悬浮固体，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 总氮排入水体（`total_nitrogen_to_water`）

“Total nitrogen to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：总氮，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 总磷排入水体（`total_phosphorus_to_water`）

“Total phosphorus to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：总磷，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 氯化物排入水体（`chloride_to_water`）

“Chloride to water”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：氯化物，排入水体
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_wastewater_pollutant_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
### 过程：现场热能供应（`onsite_thermal_energy_supply`）

#### 输入

##### 产品流

###### 天然气燃料（`natural_gas_fuel_input`）

“Natural gas”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：记录归属于本工序的“Natural gas”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_fuel_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 液化石油气燃料（`liquefied_petroleum_gas_fuel_input`）

“Liquefied petroleum gas”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：液化石油气
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Liquefied petroleum gas”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_fuel_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 柴油燃料（`diesel_fuel_input`）

“Diesel fuel”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：柴油燃料
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Diesel fuel”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_fuel_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 木颗粒燃料（`wood_pellet_fuel_input`）

“Wood pellets”是一项独立工艺投入。仅对声明生产路线中实际消耗该交换的设备或作业记录。

- 选定流：Wood pellets
- 流属性/单位：Mass / kg
- 数量规则：记录归属于本工序的“Wood pellets”计量、发票、称量或库存平衡数量；不得填入默认数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_fuel_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
#### 输出

##### 废物流

###### 木质燃料燃烧灰渣（`wood_combustion_ash_waste`）

仅当“Ash from wood-pellet combustion”作为单独管理的废物流离开本工序并进入处理、回收或处置时记录。

- 选定流：Ash from wood-pellet combustion
- 流属性/单位：Mass / kg
- 数量规则：记录“Ash from wood-pellet combustion”的称量或质量平衡数量；与所有其他残留物流分开。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_onsite_combustion_residue_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
##### 基本流

###### 化石二氧化碳排入空气（`fossil_carbon_dioxide_to_air`）

“Carbon dioxide, fossil, to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 生物源二氧化碳排入空气（`biogenic_carbon_dioxide_to_air`）

“Carbon dioxide, biogenic, to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：生物源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 甲烷排入空气（`methane_to_air`）

“Methane to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：甲烷，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 一氧化二氮排入空气（`nitrous_oxide_to_air`）

“Nitrous oxide to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：氧化亚氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 氮氧化物排入空气（`nitrogen_oxides_to_air`）

“Nitrogen oxides to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：氮氧化物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 二氧化硫排入空气（`sulfur_dioxide_to_air`）

“Sulfur dioxide to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### 一氧化碳排入空气（`carbon_monoxide_to_air`）

“Carbon monoxide to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：一氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### PM10 颗粒物排入空气（`particulate_matter_pm10_to_air`）

“Particulate matter, PM10, to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Particulate matter, PM10, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`
###### PM2.5 颗粒物排入空气（`particulate_matter_pm2_5_to_air`）

“Particulate matter, PM2.5, to air”是一项直接基本流排放。仅当声明设备或排放路径实际排放该物质或监测污染物时记录。

- 选定流：Particulate matter, PM2.5, to air
- 流属性/单位：Mass / kg
- 数量规则：采用实测质量，或根据实测活动数据和已披露的物质特定方法计算质量；不得以合并排放总量代替。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净包装参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_onsite_air_emission_records`
- 来源：`jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031`；`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoidance` | 共用设备和公用工程 | 优先采用工序细分、专用计量，或与运行时间、吞吐量或实测能量需求相关且有文件支持的物理依据，再考虑分配。 | `eu-pef-2021-2279` |
| `allocation_stalk_seed_status` | Capsicum 果梗和种子 | 根据有文件支持的去向和功能，将每个分离物流唯一归类为内部返工、共产品或废物；同一质量不得记录为多个状态。 | `codex-cxs-353-2022`；`eu-pef-2021-2279` |
| `allocation_physical_relation` | 无法避免的多输出过程 | 无法细分时，采用能反映投入和排放如何关联各输出功能的有文件支持物理关系。 | `eu-pef-2021-2279` |
| `allocation_economic_last_resort` | 缺少合理物理关系的多输出过程 | 仅在记录无法细分和无法物理分配的原因后方可经济分配；采用共产品离开工序时的价格，并披露期间与来源。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 送场外的废物 | 将前景收集和操作归于产生工序；用链接处理数据集模拟下游回收、处理或处置，并避免重复计算收益。 | `eu-pef-2021-2279` |
| `allocation_internal_rework` | 设施内部返回的椒类物料 | 将内部返工作为内部循环，不作为第二个产品输出或原料投入；披露损失和任何跨边界转移。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receipt_identity_mass` | `raw_material_receipt_and_sorting` | 植物原料身份与质量 | 批次接收记录 | 学名；品种或贸易类型；供应商批次；入厂新鲜或干制状态；含水率结果与基准；毛重；皮重；接收质量 | 按植物学身份和批次核对供应商文件及校准秤记录 | kg | 每个接收批次 | 完整报告期 | 所有报告设施入厂批次 | 仅汇总用于参考产品的唯一声明物种、品种分组和入厂状态 | 供应商规格；批次追溯；秤校准；水分检测 |
| `cp_receipt_utility_records` | `raw_material_receipt_and_sorting` | 接收与分选用电 | 电表或分配后的公用工程记录 | 电表起数；电表止数；运行小时；分配依据；接收质量 | 读取专用电表，或按有文件支持的物理依据从设施电表分配 | kWh | 每批或每月 | 完整报告期 | 报告设施 | 汇总可归属用电并按净参考输出归一化 | 电表记录；发票；分配工作表 |
| `cp_receipt_sorting_residues` | `raw_material_receipt_and_sorting` | 每项分选废料 | 单独残留物记录 | 残留物身份；容器皮重；毛重；去向；批次 | 每次移出时分别称量各废料流 | kg | 每次移出 | 完整报告期 | 接收与分选区 | 按 row_id 分别汇总，不合并霉变物、植物残屑、石块或金属 | 秤记录；废物转移记录；必要时照片 |
| `cp_preparation_water_records` | `washing_and_preparation` | 椒类清洗水 | 水表记录 | 水表起数；水表止数；批次；循环水量；排放水量 | 计量进入椒类清洗的补充水，并单独记录循环回路 | m3 | 每批或每班 | 完整报告期 | 清洗线 | 汇总进入前景边界的净水量并按净参考输出归一化 | 水表校准；批次日志；水平衡 |
| `cp_preparation_utility_records` | `washing_and_preparation` | 各行对应的电力、蒸汽或热水 | 公用工程记录 | 公用工程身份；表计起数；表计止数；发票数量；分配依据；批次 | 分别计量每种公用工程，或采用有文件支持的物理依据分配 | kWh or MJ | 每批或每月 | 完整报告期 | 清洗与预处理设备 | 电力、蒸汽和热水分别汇总 | 表计记录；发票；分配工作表 |
| `cp_preparation_chemical_records` | `washing_and_preparation` | 一种清洗化学品 | 批次配方与库存记录 | 化学品名称；浓度；期初库存；入库；期末库存；退回质量；批次投加量 | 逐种核算每个具名化学品，并核对其实际合法使用 | kg | 每批及每月结账 | 完整报告期 | 清洗线 | 每种化学品独立计算；排除未使用候选物 | 批次单；安全数据表；采购及库存记录 |
| `cp_preparation_material_balance` | `washing_and_preparation` | 各行对应的预处理物料、果梗、种子或修整组织 | 称量记录 | 入料质量；预处理后质量；行身份；共产品质量；废物质量；去向 | 称量各分离物流，并将每一物流唯一归为产品或废物 | kg | 每批 | 完整报告期 | 预处理线 | 按批次闭合质量平衡并分别汇总各行 | 秤校准；批次平衡；转移或废物记录 |
| `cp_preparation_wastewater_records` | `washing_and_preparation` | 椒类清洗废水 | 流量记录 | 排放体积；循环体积；去向；批次 | 计量废水体积，或从闭合水平衡计算 | m3 | 每批或每日 | 完整报告期 | 清洗线排放点 | 汇总送处理的废水，不与设备清洁废水合并 | 流量计；水平衡；转移记录 |
| `cp_drying_utility_records` | `drying` | 每项干燥公用工程 | 表计或公用工程记录 | 公用工程身份；表计起数；表计止数；运行时间；干燥器；批次；分配依据 | 对声明干燥器分别计量电力、外购蒸汽和外购热水 | kWh or MJ | 每批或每月 | 完整报告期 | 干燥设备 | 各公用工程分别汇总并按干燥输出归一化 | 表计校准；发票；干燥日志；分配工作表 |
| `cp_drying_material_balance` | `drying` | 干燥质量、水分、废料和失水 | 批次干燥记录 | 入料质量；入料含水率及基准；干燥输出质量；输出含水率及基准；废料质量 | 在声明干燥步骤两端测量质量和含水率 | kg and mass fraction | 每批 | 完整报告期 | 干燥设备 | 闭合批次质量平衡，不采用默认含水率计算去除水 | 秤和水分仪校准；批次记录 |
| `cp_drying_air_emission_records` | `drying` | 干燥产生的椒类颗粒粉尘 | 烟道或无组织排放记录 | 采样点；流量；浓度；持续时间；捕集粉尘；批次 | 测量粉尘质量，或用声明排口的实测流量和浓度计算 | kg | 代表性测试及每个报告期 | 完整报告期 | 干燥排气口 | 仅计算干燥椒类颗粒粉尘并记录控制效率 | 采样报告；仪器校准；控制装置日志 |
| `cp_microbial_treatment_records` | `microbial_reduction_treatment` | 每项处理投入或服务 | 处理批次记录 | 处理方法；法律许可；验证依据；投入身份；剂量或服务质量；时间；温度或辐照剂量；批次 | 仅记录实际应用的一种经验证处理，并分别记录每项投入 | kg, MJ, kWh or kg treated | 每个处理批次 | 完整报告期 | 处理设备或外包服务 | 按处理技术和物质分别汇总，不合并备选路线 | 验证报告；批次证书；公用工程表计；供应商发票 |
| `cp_microbial_treatment_emission_records` | `microbial_reduction_treatment` | 每种排入空气的熏蒸剂 | 物质特定排放记录 | 物质；投加量；回收质量；残余质量；实测排气浓度；排气流量；持续时间 | 采用物质特定回收平衡或实测排气数据 | kg | 每个熏蒸批次或代表性测试 | 完整报告期 | 熏蒸设备及排口 | 分别计算环氧乙烷和环氧丙烷 | 监测报告；物料平衡；减排装置日志 |
| `cp_milling_utility_records` | `milling_sieving_and_formulation` | 各行对应的电力或压缩空气 | 表计或公用工程记录 | 公用工程身份；表计起数；表计止数；运行小时；批次；分配依据 | 对声明粉碎和筛分设备分别计量各公用工程 | kWh or m3 | 每批或每月 | 完整报告期 | 粉碎与筛分设备 | 各公用工程分别汇总并按产品输出归一化 | 表计校准；设备日志；分配工作表 |
| `cp_formulation_ingredient_records` | `milling_sieving_and_formulation` | 一种具名抗结剂 | 配方与库存记录 | 化学品身份；法律许可；配方质量；期初库存；入库；期末库存；退回质量 | 逐一依据产品配方和库存核算每种明确具名成分 | kg | 每批及每月结账 | 完整报告期 | 配料设备 | 每种抗结剂单独计算；排除所有未实际使用的抗结剂 | 批准配方；批次单；采购和库存记录 |
| `cp_milling_material_balance` | `milling_sieving_and_formulation` | 各行对应的果梗或种子产品或废物 | 分离称量记录 | 入料质量；产品质量；果梗质量；种子质量；行分类；去向 | 称量分离出的果梗和种子，并将每项唯一归为共产品或废物 | kg | 每批 | 完整报告期 | 粉碎与筛分线 | 闭合批次质量并分别汇总各行 | 秤校准；批次平衡；销售或废物记录 |
| `cp_milling_dust_records` | `milling_sieving_and_formulation` | 捕集的椒类粉尘或排入空气的椒类粉尘 | 粉尘收集与排放记录 | 捕集粉尘质量；排气流量；粉尘浓度；持续时间；滤材更换；批次 | 分别称量捕集粉尘并测量或计算排放的椒类粉尘 | kg | 每次移出及代表性排放测试 | 完整报告期 | 粉碎粉尘控制系统 | 保持捕集废物与直接空气排放两个独立平衡 | 废物秤记录；排放测试；滤材日志 |
| `cp_packaging_utility_records` | `packaging_and_storage` | 包装与储存用电 | 电表或分配后的公用工程记录 | 电表起数；电表止数；运行小时；储存时间；分配依据 | 计量包装和储存用电，或采用有文件支持的物理依据分配 | kWh | 每批或每月 | 完整报告期 | 包装与成品储存 | 汇总可归属用电并按净产品输出归一化 | 电表记录；发票；分配工作表 |
| `cp_packaging_material_records` | `packaging_and_storage` | 一种包装组件或氮气 | 材料清单与领用记录 | 组件材料身份；供应商物料；领用件数；退回件数；实测单件质量；氮气质量；批次 | 从产品特定材料清单分别记录每种包装材料和氮气 | kg | 每个包装批次 | 完整报告期 | 包装线 | 各组件质量独立计算并排除未使用包装候选物 | 产品规格；领用记录；单件质量测试；供应商发票 |
| `cp_storage_refrigerant_inventory` | `packaging_and_storage` | 一种具名制冷剂 | 物质特定制冷剂库存 | 物质；设备；期初库存；采购；补充；回收；退回；期末库存 | 存在该物质时，分别完成 R717、R744 和 R134a 质量平衡 | kg | 每次维修及年度结账 | 完整报告期 | 成品储存设备 | 按制冷剂分别计算损失，并按有记录的设备维修进行分配 | 维修发票；钢瓶称量；回收记录；库存签字 |
| `cp_reference_product_mass` | `packaging_and_storage` | 净包装参考产品 | 成品质量记录 | 产品代码；学名；品种；形态；粒度；含水率结果及基准；包装配置；毛重；包装皮重；净重 | 核验每个成品批次的净产品质量和全部必需限定信息 | kg | 每个成品批次 | 完整报告期 | 报告设施工厂门口 | 仅汇总声明参考产品净质量，并将参考数量设为 1 kg | 秤校准；产品规格；批次放行；包装皮重测试 |
| `cp_packaging_waste_records` | `packaging_and_storage` | 一种包装废物材料 | 材料特定废物记录 | 材料身份；容器皮重；毛重；去向；批次 | 分别称量每种包装废物材料 | kg | 每次移出 | 完整报告期 | 包装线 | 各聚合物、玻璃、铝、纸板、纸或木材行独立汇总 | 秤记录；废物转移单；材料规格 |
| `cp_cleaning_material_records` | `cleaning_and_wastewater_management` | 一种清洁材料 | 清洁与库存记录 | 材料身份；浓度；期初库存；入库；期末库存；退回质量；清洁事件 | 计量清洁水并逐种核算具名清洁化学品 | m3 or kg | 每次清洁及每月结账 | 完整报告期 | 所有纳入的前景区域 | 各材料分别汇总；排除未实际使用的候选物 | 清洁日志；采购和库存记录；水表 |
| `cp_cleaning_utility_records` | `cleaning_and_wastewater_management` | 清洁和废水管理用电 | 电表或分配后的公用工程记录 | 电表起数；电表止数；设备；运行时间；分配依据 | 计量电力，或采用有文件支持的物理依据分配 | kWh | 每次清洁或每月 | 完整报告期 | 清洁与废水设备 | 汇总可归属用电并按净产品输出归一化 | 电表记录；发票；分配工作表 |
| `cp_cleaning_wastewater_records` | `cleaning_and_wastewater_management` | 各行对应的清洁废水或处理污泥 | 流量与残留物记录 | 废水体积；污泥身份；湿质量；干固体；去向；期间 | 计量废水体积并单独称量污泥 | m3 or kg | 每日或每次移出 | 完整报告期 | 报告设施排放点及处理系统 | 保持废水与污泥为独立行，并与处理记录核对 | 流量计；实验室固体结果；转移单 |
| `cp_cleaning_waste_records` | `cleaning_and_wastewater_management` | 一种废清洗液或干式清洁粉尘流 | 材料特定废物记录 | 废物身份；质量；适用时浓度；去向；清洁事件 | 分别称量或核算每种废清洗液和捕集粉尘流 | kg | 每次移出 | 完整报告期 | 清洁作业 | 各具名废物流独立汇总 | 秤记录；化学品平衡；废物转移单 |
| `cp_wastewater_pollutant_records` | `cleaning_and_wastewater_management` | 一种废水污染物 | 排放监测记录 | 污染物身份；样品结果；流量；采样期；排放去向 | 对每种污染物采用代表性浓度和匹配的排放体积 | kg | 许可证或风险导向监测频率 | 完整报告期 | 报告设施最终排放点 | 各污染物负荷独立计算，不合并参数 | 实验室报告；采样交接记录；流量计校准 |
| `cp_onsite_fuel_records` | `onsite_thermal_energy_supply` | 一种具名燃料 | 燃料表计或库存记录 | 燃料身份；期初库存；采购；期末库存；退回数量；表计读数；设备；分配依据 | 分别计量或核算每种现场燃烧燃料 | MJ or kg | 每次交付及每月结账 | 完整报告期 | 所有纳入的燃烧设备 | 按燃料独立计算消耗，并用有文件支持的物理依据分配 | 发票；储罐或表计校准；库存核对 |
| `cp_onsite_combustion_residue_records` | `onsite_thermal_energy_supply` | 木颗粒燃烧灰渣 | 残留物称量记录 | 燃料身份；灰渣容器皮重；毛重；去向；期间 | 单独称量木颗粒燃烧灰渣，不与其他残留物合并 | kg | 每次移出 | 完整报告期 | 木颗粒燃烧设备 | 汇总灰渣并按净参考输出归一化 | 秤记录；废物转移单；燃烧日志 |
| `cp_onsite_air_emission_records` | `onsite_thermal_energy_supply` | 一种燃烧污染物 | 物质特定烟道或因子记录 | 燃料身份；燃料数量；污染物；实测浓度；排气流量；持续时间；使用时的因子来源 | 测量每种污染物，或依据实测燃料用量和披露的燃料及污染物特定方法计算 | kg | 代表性监测及每个报告期 | 完整报告期 | 所有纳入的燃烧点 | 按燃料分别计算每种物质，并保留化石或生物源碳身份 | 烟道报告；燃料分析；表计校准；披露的因子来源 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalized_exchange` | 所有可变清单行 | 归一化数量 = 报告期该行数量 / 报告期声明参考产品净质量 | 适用采集协议的行数量；`cp_reference_product_mass` 净质量 | 该行单位/kg 净参考产品 | `eu-pef-2021-2279` |
| `calc_received_feedstock` | 每项植物原料 | 接收质量 = 期初合格库存 + 合格接收量 − 期末合格库存 − 有记录的退货；按学名、品种分组和入厂状态独立计算 | `cp_receipt_identity_mass` 字段 | kg 原料 | `eu-pef-2021-2279` |
| `calc_drying_water_loss` | 干燥水蒸气 | 去除水 = 入料水质量 − 出料产品水质量 − 废料水质量；各水质量均由相同声明基准下的实测总质量和实测含水率求得 | `cp_drying_material_balance` 字段 | kg 水 | `codex-cxc-42-1995` |
| `calc_packaging_component_mass` | 每个包装组件 | 组件质量 = 领用件数 × 实测单件质量 − 退回未用组件质量；按材料独立计算 | `cp_packaging_material_records` 字段 | kg 包装材料 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 每种制冷剂 | 损失 = 期初库存 + 采购 + 补充 − 期末库存 − 回收量 − 退回量；R717、R744 和 R134a 分别计算 | `cp_storage_refrigerant_inventory` 字段 | kg 制冷剂排放 | `eu-fdm-bat-2019-2031` |
| `calc_wastewater_pollutant_load` | 每种废水污染物 | 污染物负荷 = 匹配的排放体积 × 代表性污染物浓度，并记录单位换算 | `cp_wastewater_pollutant_records` 字段 | kg 污染物 | `eu-fdm-bat-2019-2031` |
| `calc_combustion_emission` | 每种燃烧污染物 | 有实测质量时采用实测值；否则采用实测燃料数量 × 对设备和期间有效且已披露的燃料及污染物特定因子 | `cp_onsite_fuel_records`；`cp_onsite_air_emission_records` 字段 | kg 污染物 | `jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031` |
| `calc_mass_balance` | 每个物料加工步骤 | 质量平衡差 = 实测投入 − 实测产品 − 实测共产品 − 实测废物 − 实测直接物料排放；调查并披露未解释差值 | 工序特定物料平衡协议 | kg 及实测投入百分比 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_botanical_identity` | 原料和参考产品 | 保留学名、品种或贸易类型、入厂状态、产品形态和批次链接；拒绝跨 Capsicum、Pimenta 或实质不同形态聚合的数据。 | 供应商规格、接收记录、批次谱系和成品规格 |
| `dq_route_completeness` | 过程图 | 记录每个必需工序以及每个条件工序的适用性决定，包括干燥和微生物减量是在上游还是现场实施。 | 签字路线图、工艺流程图和批次记录 |
| `dq_temporal_representativeness` | 所有前景记录 | 覆盖具有代表性的报告期，并披露季节性、开停机、异常批次以及技术或配方重大变化。 | 带日期表计、发票、批次日志和异常登记 |
| `dq_meter_quality` | 质量、能源、水和排放 | 使用校准仪器或有文件支持的核算；保留原始读数、单位、换算步骤和分配依据。 | 校准证书、原始读数和计算工作簿 |
| `dq_mass_balance` | 接收、预处理、干燥和粉碎 | 将实测产品、共产品、废物、失水和直接物料排放与实测投入核对，并调查实质性未解释差值。 | 批次质量平衡工作表和纠正措施记录 |
| `dq_bom_specificity` | 成分和包装 | 采用声明产品的产品特定材料清单；分别列出每种实际成分和包装材料，并排除未使用候选项。 | 批准配方、包装规格、领用和退回记录 |
| `dq_pollutant_specificity` | 空气和水排放 | 保留采样位置、环境介质、物质或参数身份、流量、浓度、期间和计算；不得报告合并污染物数量。 | 实验室报告、烟道测试、采样交接记录和流量校准 |
| `dq_no_unsubstantiated_default` | 所有清单数量 | 缺失前景数量保持未解决；不得以作者估算、无支持范围或从示例来源复制的数值替代。 | 完整性审查和未解决数据登记 |
| `dq_uuid_identity` | 每个清单行 | 采用本 PCR 给出的经核验参考 UUID；所有其他 UUID 保持为空，直至另行 Tiangong 身份审查确认准确行。 | UUID 审查记录和 manifest 身份缺口闭合 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认产品 UUID 为 `fa9bf702-43d4-414e-a2da-0dad135e5df7`、流属性为 `93a60a56-a3c8-11da-a746-0800200b9a66`、单位组为 `93a60a57-a4c8-11da-a746-0800200c9a66`，且参考数量恰好为 1 kg 净产品。 | `un-cpc-3.0-23922` |
| `validate_dataset_lock` | 数据集身份 | 学名、品种或贸易类型、入厂状态、干燥路线、产品形态、粒度规格或包装配置缺失，或对备选项取平均时失败。 | `un-cpc-3.0-23922`；`codex-cxs-353-2022`；`codex-cxs-358-2024` |
| `validate_process_map` | 过程清单 | 要求所有必需工序，并为每个条件工序记录适用性决定；每个详细 process_id 应在过程图中出现一次。 | `codex-cxc-42-1995`；`eu-pef-2021-2279` |
| `validate_atomic_exchange` | 清单行 | 每行要求一个具体交换，并拒绝原香辛料、材料、能源、燃料、包装、共产品、废物或排放等集合标签。 | `eu-pef-2021-2279` |
| `validate_bom_actuality` | 化学品、成分和包装 | 除非具名交换在声明路线中实际使用并有前景记录支持，否则拒绝化学品、抗结剂、包装组件、燃料或制冷剂行。 | `eu-pef-2021-2279` |
| `validate_mass_and_moisture_balance` | 预处理、干燥和粉碎 | 要求实测质量和兼容含水率基准；数据集发布前调查未解释平衡差。 | `codex-cxc-42-1995`；`eu-pef-2021-2279` |
| `validate_emission_separation` | 直接排放 | 要求物质特定空气排放和参数特定水污染物负荷；将制冷剂损失、燃料燃烧和椒类粉尘置于不同行。 | `jrc-fdm-bref-2019`；`eu-fdm-bat-2019-2031` |
| `validate_no_default_amounts` | 清单数量 | 拒绝无支持默认数量、范围、推理估算和模型估算；接受与声明协议相连的前景记录或计算。 | `eu-pef-2021-2279` |
| `validate_uuid_whitelist` | 含 UUID 字段 | 本作者候选仅允许三个经核验参考 UUID；每个非参考清单 UUID 均为空，并在 manifest 审查元数据中按 row_id 闭合。 | `un-cpc-3.0-23922` |
| `validate_bilingual_structure` | 英文与中文 Markdown | 两种语言要求相同顺序的 process_id、row_id、受控 token、protocol_id、计算 rule_id、规范 rule_id、source_id 和 UUID。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品特定前景门到门数据集，经审查后可作为 secondary_dataset 或 background_dataset 使用 |
| downstream_use | 链接上游原料、公用工程、成分、包装和处理数据集，再用于声明的产品系统；不得跨植物学身份或产品形态取平均 |
| allowed_use | 前景记录所代表的准确物种、品种或贸易类型、入厂状态、技术路线、产品形态、配方、包装、地理和报告期 |
| excluded_use | 未经审查不得代理不同植物物种、新鲜产品、Piper 产品、不同粒度形态、未代表的微生物处理、未代表成分配方或不同包装路线 |
| required_metadata | 全部参考流限定信息；设施地理；报告期；工序适用性；上游数据集链接；分配方法；数据所有权；审查状态 |
| required_quality_disclosure | 初级数据覆盖；表计和秤质量；含水率基准；质量平衡闭合；分配份额；缺失值；排放方法；未解决 UUID；对本 PCR 的偏离 |
| update_trigger | 物种或品种分组、入厂状态、干燥器或微生物减量技术、产品形态或粒度规格、成分配方、包装、制冷剂、燃料、设施、分配方法或代表性报告期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3.0-23922` | standard | 联合国统计司，《中央产品分类》3.0 版，子类 23922，仓库保留原始来源；https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-13） | 准确类别范围和参考产品身份 |
| `codex-cxs-353-2022` | standard | FAO/WHO Codex Alimentarius，Standard for Dried or Dehydrated Chilli Pepper and Paprika，CXS 353-2022，2022 年通过、2025 年修订；https://openknowledge.fao.org/handle/20.500.14283/cd9056en（检索于 2026-08-13） | Capsicum 物种、整粒/破碎/片状/研磨/粉末形态、果梗/种子/胎座和抗结剂适用性 |
| `codex-cxs-358-2024` | standard | FAO/WHO Codex Alimentarius，Standard for Spices Derived from Dried or Dehydrated Fruits and Berries: Allspice, Juniper Berry and Star Anise，CXS 358-2024；https://www.fao.org/fao-who-codexalimentarius/sh-proxy/en/?lnk=1&url=https%3A%2F%2Fworkspace.fao.org%2Fsites%2Fcodex%2FStandards%2FCXS%2B358-2024%2FCXS_358e.pdf（检索于 2026-08-13） | Pimenta 物种身份、整粒/切段/破碎/研磨/粉末形态和条件性加工助剂规则 |
| `codex-cxc-42-1995` | official_guidance | FAO/WHO Codex Alimentarius，Code of Hygienic Practice for Spices and Dried Aromatic Herbs，CXC 42-1995，2014 年修订；https://www.fao.org/input/download/standards/27/CXP_042e_2014.pdf（检索于 2026-08-13） | 清理、分选、机械干燥、研磨、微生物减量、包装、储存、粉尘控制、水管理和追溯 |
| `jrc-fdm-bref-2019` | official_guidance | 欧盟委员会联合研究中心，Best Available Techniques Reference Document for the Food, Drink and Milk Industries，JRC118627，EUR 29978 EN，DOI 10.2760/243911；https://publications.jrc.ec.europa.eu/repository/handle/JRC118627（检索于 2026-08-13） | 前景过程结构以及能源、水、原料、废水、废气和废物核算 |
| `eu-fdm-bat-2019-2031` | standard | Commission Implementing Decision (EU) 2019/2031，食品、饮料和乳品行业 BAT 结论；https://eur-lex.europa.eu/eli/dec_impl/2019/2031/oj（检索于 2026-08-13） | 水、能源、原料、废水污染物和空气污染物的独立清单与监测字段 |
| `eu-pef-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279，附件 I Product Environmental Footprint Method；https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索于 2026-08-13） | 功能单位、参考流、产品特定材料清单、公司特定制造数据、完整性、分配和数据质量 |
