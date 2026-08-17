---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-not-put-up-for-retail-sale-yarn-of-fine-or-coarse-animal-hair-or-of-horse-3d239b59
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 羊毛、动物细毛或粗毛及马毛纱线

## 1. 范围与适用性

本 PCR 适用于定义纤维为羊毛、动物细毛、动物粗毛或马毛，且产品身份归入 CPC 3.0 子类 26340 的纱线前景数据包。范围包括粗梳毛纺或精梳毛纺准备、纺纱、加捻或轧花包缠、卷绕，以及使产品达到申报纱厂门口状态所需的调湿。只有在报告设施内实施或作为前景作业直接控制时，原毛洗毛和纱线湿法整理才纳入范围。

本 PCR 不涵盖缝纫线；归入 CPC 26340 之外的零售包装手工针织纱；由棉、丝、植物纤维或人造纤维分类定义的纱线；机织物、针织物、簇绒织物或非织造布；服装制造；畜牧养殖；纤维生产；场外运输；使用阶段或寿命终结。混纺纱只有在 CPC 26340 仍是有依据的产品分类且每种组成纤维均单独披露时才纳入。对于非羊毛纱线，数据包必须为每种实际纤维输入使用一个物种特定的已准备纤维流，不得复用羊毛流或动物毛集合名称。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.yarn-of-wool-not-put-up-for-retail-sale-yarn-of-fine-or-coarse-animal-hair-or-of-horse-3d239b59 |
| classification_refs | CPC 3.0: 26340 |
| covered_products | 非供零售的羊毛纱；一种已申报动物细毛物种的纱线；一种已申报动物粗毛物种的纱线；马毛纱，包括轧花马毛纱；归入 CPC 26340 的合格混纺纱 |
| excluded_products | 缝纫线；由其他定义纤维类别分类的纱线；织物和非织造产品；服装；无可辩护 CPC 26340 分类的未明确混合纤维纱 |
| representative_product | 在申报卷绕支撑物上、位于纱厂门口的成品羊毛纱 |
| production_route | 接收已准备纤维或羊毛条；可选前景原毛洗毛；按适用路线进行梳理或精梳；并条和混纺；纺纱；按适用情况加捻或轧花包缠；卷绕；可选前景纱线湿法整理 |
| market_state | 可销售的厂门口纱线，并申报纤维物种和组成、粗梳或精梳纺纱系统、纱支、捻度、含水率或调湿基准、颜色或未染状态及卷绕形式 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 羊毛、一种已申报动物细毛或粗毛物种、或马毛制成的可销售纱线 |
| How much | 申报厂门口状态下 1 kg 净干态调湿纱线 |
| How well | 符合申报的纤维组成、纺纱系统、纱支、捻度或轧花结构、含水率或调湿基准、颜色状态及卷绕形式 |
| How long or cycle | 通过申报纱线制造边界的一个完整生产批次 |
| reference_flow_link | 见下方参考数量和 Tiangong 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维物种；每种组成纤维的质量分数；粗梳、精梳或马毛路线；纱支制式和数值；捻向与捻度或轧花结构；干质量和含水率或调湿基准；染色或未染状态；卷绕支撑物及净重或毛重基准；生产地域；报告期；前景边界 |

构建前景数据包时，所有必需限定信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中声明。参考质量不包括卷绕支撑物和任何外包装。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_yarn_mass` | 参考纱线 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 按申报的干质量和含水率或调湿基准报告净纱线质量；扣除卷绕支撑物和外包装。 |
| `constituent_fibre_mass` | 每种纤维输入 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每种纤维物种作为单独产品输入记录，并用批次输入记录核对申报组成。 |
| `utility_measurement` | 电力、蒸汽和工艺水 | 流特定能量或质量属性 | kWh、kg 或其他已申报可换算单位 | 归一化前保留计量单位和换算因子、计量边界、供应情景及共享仪表分配方法。 |

## 5. 系统边界

前景边界从接收申报的已准备纤维或羊毛条开始。只有在前景系统内实施原毛洗毛时，边界才从接收含脂剪羊毛开始。边界止于申报卷绕支撑物上的厂门口净可销售纱线。边界包括所有已纳入前景过程的材料损失、回收纤维、工艺水、公用工程、助剂、卷绕支撑物、直接废物、废水和实测直接基本流。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 接收已准备纤维或羊毛条；仅当前景包含洗毛路线时为含脂剪羊毛 |
| starting_condition_role | 第一项前景过程的已披露产品输入 |
| product_classification_scope | 输出边界为 CPC 3.0 子类 26340；上游纤维输入保留各自产品身份 |
| recursive_input_rule | 已归入 CPC 26340 的未整理纱线输入仍是带独立上游数据集和阶段限定信息的显式产品输入；不得与参考输出静默合并 |
| upstream_dataset_requirement | 每项外购纤维、电力供应、蒸汽或热供应、化学品、卷绕支撑物和其他产品输入均需上游数据集或显式未解析身份披露 |
| disclosure | 披露纤维来源和物种、再生含量、准备状态、纳入的工艺路线、共享公用工程分配、回收去向、废物处理去向和排除作业 |

### 边界规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_foreground_route` | 前景纱线生产 | 纳入按适用情况进行的梳理或精梳、并条和混纺、纺纱、加捻或轧花包缠、卷绕、调湿，以及报告设施控制的所有直接交换。 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022` |
| `boundary_conditional_scouring` | 原毛洗毛 | 仅在申报前景边界内接收并洗涤含脂羊毛时纳入洗毛；否则要求为接收的已准备纤维提供上游数据集。 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_conditional_wet_finishing` | 纱线湿法整理 | 仅在洗涤、染色或整理是生产申报可销售纱线所必需且在前景边界内受控时纳入。 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `boundary_no_hidden_extensions` | 所有纳入过程 | 将每种实际化学品、着色剂、盐、燃料、包装组件、废物、废水和直接排放分别作为原子交换添加；不得把未列明集合或选择器表示为一个流。 | `eu-pef-recommendation-2021-2279` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `raw_wool_scouring` | 原毛洗毛 | conditional | 当前景系统内洗涤含脂剪羊毛时纳入 | 前景纤维准备 | kg 洗净毛输出 |
| `fibre_preparation_spinning_winding` | 纤维准备、纺纱和卷绕 | required | 参考纱线始终纳入 | 前景纱线制造 | kg 净可销售纱线输出 |
| `yarn_wet_finishing` | 纱线湿法整理 | conditional | 当洗涤、染色或整理是申报可销售纱线所需且由前景系统控制时纳入 | 前景湿法加工 | kg 净成品纱线输出 |

### 过程：原毛洗毛（`raw_wool_scouring`）

#### 输入

##### 产品流

###### 含脂剪羊毛（`greasy_shorn_wool`）

只有当报告设施实施原毛洗毛时才记录含脂剪羊毛。

- 选定流：Shorn wool, greasy, including fleece-washed shorn wool `bc0047e4-c6e8-4758-b86e-887af8a1f176`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入洗毛批次的实测含脂羊毛净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 洗毛工艺水（`scouring_process_water`）

向洗毛槽和漂洗步骤供应的水作为一个产品输入记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应至洗毛批次的计量水量或水箱衡算水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 非离子洗毛剂（`scouring_detergent`）

实际非离子羊毛洗毛剂配方应与其他每种洗毛化学品分开记录。

- 选定流：Non-ionic wool-scouring detergent formulation
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次配方和库存记录中的领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 洗毛电力（`scouring_grid_electricity`）

以申报的中压电网供应情景记录跨越洗毛过程边界的电力。

- 选定流：Electricity, medium voltage, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或从共享仪表记录中形成的有文件依据分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 外购洗毛蒸汽（`scouring_purchased_steam`）

只有当天然气工业锅炉外购蒸汽供应情景跨越洗毛边界时才记录该蒸汽。

- 选定流：Steam, purchased from a natural-gas-fired industrial boiler
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量或分配至洗毛批次的供应商账单量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

本过程不规定废物输入。

##### 基本流

在前景数据包中将每项实测直接资源开采或排放记录为单独的基本流行。

#### 输出

##### 产品流

###### 洗净毛（`scoured_wool_output`）

洗净毛是转移至梳理、精梳或上游/下游数据集边界的清洁纤维输出。

- 选定流：Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按申报含水率基准计量的洗净毛净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 回收羊毛脂（`recovered_wool_grease`）

只有当羊毛脂被实际回收并离开系统用于有益用途时，才将其作为一个共产品记录。

- 选定流：Wool grease (lanolin)
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为可销售或可利用羊毛脂接收的实测回收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 废物流

###### 未处理羊毛洗毛废水（`scouring_wastewater`）

离开洗毛过程并送往处理的未处理废水应与污泥、回收羊毛脂或内部循环水分开记录。

- 选定流：Untreated wool-scouring wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放质量，或使用有文件依据的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 洗净毛输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scouring_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

##### 基本流

将未由废水承载的每种实测直接排放记录为单独基本流行。

### 过程：纤维准备、纺纱和卷绕（`fibre_preparation_spinning_winding`）

#### 输入

##### 产品流

###### 粗梳路线洗净毛（`scoured_wool_input`）

当洗净毛是申报粗梳路线的具体已准备纤维输入时记录该流。

- 选定流：Scoured Wool `1f286780-8831-47b4-88dd-582d6b7f8947`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用至生产批次的实测净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

###### 精梳路线羊毛条（`wool_top_input`）

当羊毛条是申报精梳路线的具体已准备纤维输入时，以其代替松散洗净毛记录。

- 选定流：Wool Top `a19fde0b-23f4-4ab7-9832-317affa7ab44`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：领用至生产批次的实测羊毛条净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 纺纱电力（`spinning_grid_electricity`）

以申报的中压电网供应情景记录跨越纤维准备、纺纱和卷绕边界的电力。

- 选定流：Electricity, medium voltage, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或从共享仪表记录中形成的有文件依据分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022`

###### 外购调湿蒸汽（`spinning_purchased_steam`）

只有当天然气工业锅炉外购蒸汽用于加湿或调湿且跨越过程边界时才记录该蒸汽。

- 选定流：Steam, purchased from a natural-gas-fired industrial boiler
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量或分配至生产批次的供应商账单量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

###### 纺纱工艺水（`spinning_process_water`）

当纤维调湿或加湿用水跨越过程边界时记录该直接供水。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应至生产批次的计量水量或水箱衡算水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

###### 合成酯纺纱润滑剂（`spinning_lubricant`）

实际合成酯纺织纺纱润滑剂作为一种配方产品记录；不得在本行中以矿物油替代。

- 选定流：Synthetic ester textile spinning lubricant
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次配方和库存记录中的领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`eu-textiles-bat-2022-2508`; `wiedemann-recycled-wool-lca-2022`

###### 纸板卷绕芯（`cardboard_winding_core`）

与纱线一同离开的纸板筒或纸芯应与净纱线质量分开记录。

- 选定流：Cardboard tube or Paper core `78bf7f6e-519e-4b3d-82f0-eda15b2fee61`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：随可销售纱线保留的卷绕芯实测领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

##### 废物流

本过程不规定废物输入。

##### 基本流

在前景数据包中将每项实测直接资源开采或排放记录为单独基本流行。

#### 输出

##### 产品流

###### 可销售羊毛或动物毛纱线（`saleable_yarn_output`）

本输出是在申报厂门口满足参考流限定信息的净纱线质量。

- 选定流：Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：扣除卷绕芯和外包装后的实测净纱线质量，归一化至 1 kg 参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`unsd-cpc-3-0-26340`

##### 废物流

###### 羊毛纺纱废料（`wool_spinning_waste`）

羊毛纺纱废料作为梳理、并条、纺纱或卷绕离开系统的质量记录一次；其回收或处置去向另行申报。

- 选定流：wool spinning waste `db23708c-5c2f-4b7e-9098-910948275caa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次和去向称量的废物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净可销售纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_spinning_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

##### 基本流

将每种实测直接排放记录为单独基本流行。

### 过程：纱线湿法整理（`yarn_wet_finishing`）

#### 输入

##### 产品流

###### 未整理羊毛纱（`unfinished_yarn_input`）

当湿法整理是独立受控前景阶段时，将未整理纱线记录为同类别产品输入。

- 选定流：Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：进入湿法整理批次的实测未整理纱线净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法整理工艺水（`wet_finishing_process_water`）

向洗涤、染色、漂洗或整理浴供应的水作为一个产品输入记录。

- 选定流：Process Water `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：供应至湿法整理批次的计量水量或水箱衡算水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 湿法整理电力（`wet_finishing_grid_electricity`）

以申报的中压电网供应情景记录跨越湿法整理边界的电力。

- 选定流：Electricity, medium voltage, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：计量电力或从共享仪表记录中形成的有文件依据分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`eu-textiles-bat-2022-2508`

###### 外购湿法整理蒸汽（`wet_finishing_purchased_steam`）

只有当天然气工业锅炉外购蒸汽供应情景跨越湿法整理边界时才记录该蒸汽。

- 选定流：Steam, purchased from a natural-gas-fired industrial boiler
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量蒸汽质量或分配至湿法整理批次的供应商账单量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

###### 乙酸（`wet_finishing_acetic_acid`）

只有当实际湿法整理配方使用乙酸时才记录该化学品；本流不得作为其他酸或助剂的代理。

- 选定流：Acetic acid `e2450fd4-acdc-4ab3-b8e3-269f8882a44e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：批次配方和库存记录中的领用质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`wiedemann-recycled-wool-lca-2022`

申报配方中实际使用的每种染料、盐、表面活性剂、还原剂或氧化剂、柔软剂和其他化学品，均必须作为单独命名的原子产品流行加入前景数据包。

##### 废物流

本过程不规定废物输入。

##### 基本流

将每项实测直接资源开采或排放记录为单独基本流行。

#### 输出

##### 产品流

###### 成品可销售纱线（`finished_yarn_output`）

本输出是满足参考流限定信息的湿法整理后净纱线质量。

- 选定流：Yarn of wool, not put up for retail sale, yarn of fine or coarse animal hair or of horse hair (including gimped horsehair yarn), whether or not put up for retail sale `e4318719-55db-447b-8b6d-08a745a3dfb5`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：实测净成品纱线质量，归一化至 1 kg 参考输出
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`unsd-cpc-3-0-26340`

##### 废物流

###### 未处理羊毛纱染色废水（`wet_finishing_wastewater`）

离开湿法整理过程并送往处理的未处理废水应与回收浴液或污泥分开记录。

- 选定流：Untreated wool-yarn dyeing wastewater
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：计量排放质量，或使用有文件依据的密度将体积换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净成品纱线输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_finishing_batch_records`
- 来源：`eu-jrc-textiles-bref-2023`

##### 基本流

将未由废水承载的每种实测直接排放记录为单独基本流行。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 所有多功能前景作业 | 在分配前，先按生产线、批次或过程步骤细分，并使用直接计量关系。 | `eu-pef-recommendation-2021-2279` |
| `allocation_shared_utilities` | 共享电力、蒸汽、水和助剂 | 使用计量消耗、机器运行时间或批次质量等有文件依据的因果驱动因素分配共享记录；披露驱动因素并保留未分配源记录。 | `eu-pef-recommendation-2021-2279` |
| `allocation_recovered_wool_grease` | 洗净毛和回收羊毛脂 | 将回收羊毛脂保留为显式输出。若细分和因果分派无法处理共享负担，则采用并披露有依据的物理或经济分配基准，并报告敏感性情景；不得通过净抵扣隐藏该输出。 | `eu-pef-recommendation-2021-2279`; `eu-textiles-bat-2022-2508` |
| `allocation_spinning_waste` | 回收或处置的羊毛纺纱废料 | 记录全部废物质量和去向。任何再生或替代产品抵扣属于申报的下游建模方法，不得嵌入前景交换数量。 | `eu-pef-recommendation-2021-2279`; `wiedemann-recycled-wool-lca-2022` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_scouring_batch_records` | `raw_wool_scouring` | 所有洗毛输入和输出 | 批次记录、仪表记录、库存领用、发票、地磅记录、排放记录 | batch_id; start/end time; input and output flow identity; gross, tare, and net mass; moisture basis; water meter; electricity meter; steam meter or invoice; detergent issue; grease recovery; wastewater quantity; waste destination | 将签字生产、公用工程、库存和排放记录核对至同一批次标识 | kg、kWh 或申报源单位 | 每个洗毛批次和每个相关计量期 | 覆盖申报报告期的日期 | 每条纳入的洗毛线和共享公用工程边界 | 汇总经核验记录，使用有文件依据的因果驱动因素分配共享仪表记录，再按实测洗净毛输出归一化 | 校准状态；发票或库存核对；批次签字；缺失记录日志 |
| `cp_spinning_batch_records` | `fibre_preparation_spinning_winding` | 所有纤维准备、纺纱、卷绕、产品和废物交换 | 批次记录、库存领用、仪表记录、纸芯领用、产品称量、废物称量 | batch_id; fibre species and composition; spinning system; yarn count; twist; input mass and moisture; electricity; steam; process water; lubricant issue; core mass; net yarn mass; waste mass and destination | 将生产订单、仪表、库存记录、产品称量和废物记录关联至同一纱线批次 | kg、kWh 或申报源单位 | 每个生产批次和每个相关计量期 | 覆盖申报报告期的日期 | 每条纳入的梳理、精梳、并条、纺纱、加捻、轧花包缠和卷绕线 | 汇总经核验记录，从参考纱线中扣除皮重和纸芯质量，使用有文件依据的驱动因素分配共享公用工程，再按净纱线输出归一化 | 秤和仪表校准；组成证书；生产订单完结；库存和废物核对 |
| `cp_wet_finishing_batch_records` | `yarn_wet_finishing` | 所有纱线湿法整理输入和输出 | 配方、批次记录、库存领用、仪表记录、产品称量、排放记录 | batch_id; unfinished-yarn mass; recipe chemical identities and issued masses; water; electricity; steam; finished-yarn mass; colour state; wastewater quantity; treatment destination | 将配方、库存、仪表、产品和排放记录核对至同一湿法整理批次 | kg、kWh 或申报源单位 | 每个湿法整理批次和每个相关计量期 | 覆盖申报报告期的日期 | 每条纳入的纱线洗涤、染色、漂洗和整理线 | 汇总经核验记录，使用有文件依据的驱动因素分配共享公用工程，再按净成品纱线输出归一化 | 配方批准；秤和仪表校准；库存核对；颜色和产品放行记录；排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass_exchange` | 每项质量交换 | 实测交换质量 / 实测净参考阶段输出质量 × 1 kg 参考输出 | 交换质量；净过程或参考输出质量 | kg 交换/kg 输出 |  |
| `normalize_energy_exchange` | 每项能量交换 | 计量或因果分配能量 / 实测净参考阶段输出质量 × 1 kg 参考输出 | 计量能量；适用时的共享仪表分配驱动因素；净输出质量 | 申报能量单位/kg 输出 | `eu-textiles-bat-2022-2508` |
| `convert_volume_to_mass` | 按体积记录的工艺水或废水 | 实测体积 × 有文件依据的批次温度密度；保留原始体积记录和密度来源 | 实测体积；密度；具有实质影响时的温度 | kg 水或废水 |  |
| `net_reference_yarn_mass` | 卷绕支撑物上的纱线 | 卷装毛质量 − 实测卷绕支撑物质量 − 其他非纱线皮重 | 卷装毛质量；卷绕支撑物质量；皮重 | kg 净参考纱线 |  |
| `foreground_mass_reconciliation` | 每项纳入过程 | 核对所有实测产品输入和输出、单独计量废物、库存变化和水分变化；调查并披露每项无法解释的不平衡，不得强制闭合 | 经核验批次质量；库存变化；实测含水率基准 | 签字质量核对记录 | `eu-pef-recommendation-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考纱线 | 声明 CPC 26340 范围、精确 Tiangong 参考流 UUID、纤维物种和组成、纱线系统、纱支、捻度或轧花结构、含水率基准、颜色状态、卷绕形式、地域、期间和边界。 | 产品规格；组成证书；生产订单；数据集元数据 |
| `dq_flow_identity` | 每项清单交换 | 每项交换命名一个物理或化学流。带 UUID 的行必须匹配经核验的 Tiangong 类型和属性；未解析行保持显式，不得借用更宽泛或语义不同的 UUID。 | 流身份审查；Tiangong 检索；未解析身份披露 |
| `dq_temporal_representativeness` | 所有前景记录 | 报告期必须代表申报技术和产品组合；披露开始和结束日期、停机、异常批次和替代。 | 带日期的批次、仪表、发票和维护记录 |
| `dq_completeness` | 所有纳入过程 | 在申报截断规则内纳入所有类别定义纤维输入、公用工程、助剂、卷绕支撑物、产品输出、废物、废水和实测直接基本流；披露截断规则和每项排除流。 | 过程流核对；库存核对；完整性检查表；排除日志 |
| `dq_consistency` | 归一化和共享记录 | 在整个报告期使用相同干质量基准、参考边界、换算因子和共享记录分配驱动因素。 | 计算工作簿；仪表图；换算记录；内部审查 |
| `dq_uncertainty_disclosure` | 缺失或分配记录 | 标记替代、估算或分配记录；说明方法、原因、受影响份额和敏感性。AI 生成的数量范围不属于前景记录。 | 缺口日志；分配记录；敏感性结果 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 为 `e4318719-55db-447b-8b6d-08a745a3dfb5`，类型为 Product flow，CPC 叶节点为 26340，参考属性为 Mass `93a60a56-a3c8-11da-a746-0800200b9a66`，归一化数量为 1 kg 净纱线。 | `unsd-cpc-3-0-26340` |
| `validate_required_qualifiers` | 参考纱线 | 拒绝缺少纤维物种、组成、纺纱路线、纱支、捻度或轧花结构、含水率基准、颜色状态、卷绕形式、地域、报告期或前景边界的数据包。 | `unsd-cpc-3-0-26340` |
| `validate_atomic_inventory` | 过程清单 | 拒绝将多种纤维、化学品、电力情景、蒸汽或热供应、燃料、包装组件、废物、废水或基本流组合到一张清单卡中，或把选择器或占位符用作选定流的清单卡。 | `eu-pef-recommendation-2021-2279` |
| `validate_non_wool_route` | 动物细毛、动物粗毛或马毛纱线 | 每种实际纤维必须有一个物种特定的已准备纤维输入；拒绝以 Scoured Wool、Wool Top 或动物毛集合身份作为代理。 | `unsd-cpc-3-0-26340` |
| `validate_unresolved_identity` | 没有确认流 UUID 的行 | 在每项实际使用的未解析行绑定至一个名称语义、类型、属性和单位均匹配的 state_code 100 Tiangong 流前，将校验视为不确定；不得复制被拒绝候选的 UUID。 |  |
| `validate_foreground_amounts` | 所有清单数量 | 要求采集记录或与采集协议关联的计算。拒绝将 AI 估算、无引用默认值或文献值表示为实测前景数量。 | `eu-pef-recommendation-2021-2279` |
| `validate_route_completeness` | 纳入的前景过程 | 确认所有必需过程和所有适用条件过程均存在，实际配方化学品为单独行，共享公用工程透明分配，且所有废物和废水去向均已申报。 | `eu-jrc-textiles-bref-2023`; `eu-textiles-bat-2022-2508` |
| `validate_mass_reconciliation` | 每项纳入过程 | 要求签字质量核对并披露每项未解决不平衡、水分调整、库存变化、回收输出和废物流。 | `eu-pef-recommendation-2021-2279` |
| `validate_allocation` | 多功能作业 | 首先要求细分或有文件依据的因果驱动因素；仍需分配时，要求申报所选基准、理由和敏感性。 | `eu-pef-recommendation-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 前景单元过程数据包和汇总纱厂数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 当参考限定信息、纤维身份、路线、地域、期间和边界匹配时，用于生产 CPC 26340 羊毛、已申报动物毛或马毛纱线 |
| excluded_use | 原纤维生产；无纤维身份的通用纺织纱线；织物或服装制造；零售包装；其他 CPC 类别；无兼容已审查研究设计的比较声明 |
| required_metadata | 规范 PCR id；参考流 UUID 和属性；纤维物种和组成；原生或再生含量；纺纱系统；纱支；捻度或轧花结构；含水率基准；颜色状态；卷绕形式；地域；报告期；技术；前景边界；纳入的条件过程；数据所有者 |
| required_quality_disclosure | 源记录和覆盖度；仪表和秤校准；共享记录分配；未解析流身份；替代；截断；排除；质量核对；废物和废水去向；不确定性和敏感性 |
| update_trigger | 纤维物种或组成、CPC 身份、参考流 UUID、纺纱系统、湿法加工路线、能源供应、分配方法、前景边界、主要技术或对规则有实质影响的来源证据发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-26340` | official_guidance | United Nations Statistics Division, Central Product Classification Version 3.0, subclass 26340, https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/26340 (retrieved 2026-08-12) | 产品范围、分类身份、参考产品校验 |
| `eu-jrc-textiles-bref-2023` | official_guidance | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Textiles Industry, 2023, https://bureau-industrial-transformation.jrc.ec.europa.eu/reference/textiles-industry (retrieved 2026-08-12) | 纺织过程分解、纤维准备、预处理、染色、整理、公用工程和废物覆盖 |
| `eu-textiles-bat-2022-2508` | official_guidance | Commission Implementing Decision (EU) 2022/2508 establishing BAT conclusions for the textiles industry, http://data.europa.eu/eli/dec_impl/2022/2508/oj (retrieved 2026-08-12) | 原毛洗毛、羊毛脂回收、纺纱润滑剂规则、能源和资源记录 |
| `wiedemann-recycled-wool-lca-2022` | literature | Wiedemann, S. G.; Biggs, L.; Clarke, S. J.; Russell, S. J. (2022), Reducing the Environmental Impacts of Garments through Industrially Scalable Closed-Loop Recycling: Life Cycle Assessment of a Recycled Wool Blend Sweater, Sustainability 14(3), 1081, https://doi.org/10.3390/su14031081 | 经验过程分解，以及纺纱、水、蒸汽、润滑剂、卷绕纸芯、纤维废料和湿法整理交换识别；不采用研究数值作为 PCR 默认值 |
| `eu-pef-recommendation-2021-2279` | official_guidance | Commission Recommendation (EU) 2021/2279 on the use of the Environmental Footprint methods, http://data.europa.eu/eli/reco/2021/2279/oj (retrieved 2026-08-12) | 功能单位、系统边界、完整性、企业特定数据、分配、数据质量和校验规则 |
