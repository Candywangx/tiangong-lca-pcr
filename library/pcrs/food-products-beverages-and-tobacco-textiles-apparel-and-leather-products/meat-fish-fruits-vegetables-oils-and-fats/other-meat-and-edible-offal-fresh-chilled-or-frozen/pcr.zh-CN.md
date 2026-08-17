---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-offal-fresh-chilled-or-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他肉类及可食用内脏，鲜、冷藏或冷冻

## 1. 范围与适用性

本 PCR 适用于精确归入 CPC 21170 的前景数据包。官方范围涵盖爬行动物及非家禽鸟类的肉和可食内脏，包括鸽、猎禽、松鸡、鸵鸟、鹧鸪、雉、鹌鹑、野鸭和野鹅，状态为鲜、冷藏或冷冻。排除 CPC 2112、CPC 2114 与 CPC 21160 下的家禽肉和家禽可食内脏。

由于 CPC 21170 范围较宽，合格前景数据包必须将参考产品锁定为恰好一个通用物种名和科学物种名、恰好一个骨骼肌肉身份或一个明确具名可食器官，以及恰好一个市场状态。多物种批次、肉与内脏组合产品、混合鲜/冷藏/冷冻参考输出均不合格。本清单提供九个具体物种的示例路线；尚未列出的范围内物种或器官必须先新增物种和组织特定原子行。

前景边界从合法养殖或捕获及进厂运输结束后的设施接收开始，纳入接收、屠宰、初级分离、制备、条件性冷却或冻结、包装、储存、放行、卫生清洗、场内产热及条件性场内废水处理。养殖、合法捕获或狩猎与进厂运输属于上游；工厂门后的配送、零售、使用和寿命终止属于下游。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.other-meat-and-edible-offal-fresh-chilled-or-frozen` |
| classification_refs | CPC 3.0: 21170, exact |
| covered_products | 来自一个范围内爬行动物或非家禽鸟类物种的鲜、冷藏或冷冻骨骼肌肉，或一个明确识别的可食器官 |
| excluded_products | CPC 2112 或 CPC 2114 家禽肉；CPC 21160 家禽可食内脏；多物种参考产品；肉与内脏组合参考产品；混合市场状态；不可食组织 |
| representative_product | 一个申报科学物种、一个骨骼肌肉或可食器官身份及一个鲜、冷藏或冷冻状态的 1 kg 净合格产品 |
| production_route | 物种接收；屠宰与初级分离；组织制备；条件性冷却或冻结；变体包装、储存与放行；卫生清洗与产热；条件性场内废水处理 |
| market_state | 完整参考输出必须且只能为鲜、冷藏或冷冻中的一种 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 一个明确物种及一个明确骨骼肌肉或器官身份的净合格 CPC 21170 肉或可食内脏 |
| How much | 1 kg |
| How well | 通过适用的法律、食品安全、物种身份、产品状态和设施放行要求；排除包装质量 |
| How long or cycle | 一个生产批次直至工厂门放行 |
| reference_flow_link | 经 state 100 核验的精确公开 Tiangong Product flow |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | Other meat and edible offal, fresh, chilled or frozen `e67d4710-2094-4972-85a2-9e593546ae82` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 21170；一个通用物种名；一个科学物种名；爬行动物或非家禽鸟类范围证据；合法来源；一个骨骼肌肉或具名可食器官身份；肉或器官声明；恰好一个鲜、冷藏或冷冻状态；净产品质量；生产场址；报告期；温度调节技术；储存时长；另行报告包装组成 |

构建前景数据包时，`必需限定信息` 中的项目必须在数据集元数据、过程说明、参考流备注、产品说明或等效字段中明确声明。缺失必需限定信息会使参考流定义不完整。官方宽类别流名只提供类别身份，不授权混合物种、组织或状态输出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 应用物种、组织和状态锁定后，在经校准的秤上确定放行净合格质量。 |
| `mu_variant_mass` | 选定物种—组织—状态输入 | Mass | kg | 恰好一个完整指定的变体质量必须与放行净参考产品质量对账。 |
| `mu_live_mass` | 活体动物 | Mass | kg | 分别计量一个申报物种；同一秤记录不得聚合另一物种。 |
| `mu_tissue_mass` | 肉、器官、共产品与固体废物 | Mass | kg | 分别计量每项物理组织身份，并在相关时披露湿基、净基或干物质基准。 |
| `mu_packaging_excluded` | 参考产品与包装 | Mass | kg | 参考数量排除包装质量，每个包装组件分别记录。 |
| `mu_electricity` | 电力 | Energy | kWh | 使用经校准的仪表并保留阶段边界与分配驱动因素。 |
| `mu_heat` | 外购蒸汽、外购热水及每种场内燃料 | Energy | MJ | 用同期物性记录换算每项计量载体，并防止热量重复计算。 |
| `mu_water` | 水与废水 | Volume | m3 | 使用计量体积，并区分物种特定高负荷、常规、除霜、冷凝水、下水道、回用和直接排放流。 |
| `mu_refrigerant` | 每种制冷剂 | Mass | kg | 分别对每种物质与回路的补充和损失进行对账。 |
| `mu_direct_release` | 每项直接空气或水排放 | Mass | kg | 以匹配的实测活动量和浓度或经核实因子逐物质或参数计算。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 进厂运输结束后，一个明确识别的爬行动物或非家禽鸟类物种进入设施接收 |
| starting_condition_role | 锁定物种的前景起始条件 |
| product_classification_scope | 精确 CPC 21170，排除家禽 CPC 2112、CPC 2114 与 CPC 21160 |
| recursive_input_rule | 申报任何 CPC 21170 中间投入的来源及精确物种—组织—状态身份，并防止递归重复计算 |
| upstream_dataset_requirement | 养殖、合法捕获或狩猎及进厂运输在独立上游数据集中建模，并披露地理、时期与方法 |
| disclosure | 设施；报告期；通用和科学物种名；来源状态；骨骼肌肉或器官身份；一个市场状态；过程配置；温度调节和储存技术；供热路线；制冷剂物种；包装 BoM；共产品和废物去向；废水路线 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景系统 | 从一个明确物种在进厂运输结束后进入设施接收处开始。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | 上游活动 | 养殖、合法捕获或狩猎以及进厂运输在独立上游数据集中建模。 | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | 前景过程 | 纳入接收、屠宰、初级分离、组织制备、条件性冷却或冻结、包装、储存、放行与卫生清洗。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | 前景系统 | 在工厂门 1 kg 净合格 CPC 21170 产品处结束，包装质量不计入。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | 下游活动 | 本前景清单排除工厂门后的配送、零售、使用及寿命终止。 | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | 场内废水处理 | 仅当处理在报告设施边界内运行时纳入；否则分别记录每项废水转移。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_species` | 物种身份 | 要求一个通用名和一个科学名；不得在一个数据集中聚合爬行动物、猎禽或多物种生产。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_tissue` | 产品身份 | 要求骨骼肌肉或一个明确具名可食器官；一个参考输出不得混合肉与可食内脏。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_state` | 市场状态 | 必须且只能选择鲜、冷藏或冷冻中的一种，并只启用匹配状态的行。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_poultry_exclusion` | 分类范围 | 排除 CPC 2112、CPC 2114 或 CPC 21160 下的家禽肉和家禽可食内脏。 | `un-cpc-3-0-structure-2025` |
| `boundary_completeness` | 全部前景交换 | 每个已知交换必须原子化记录或披露经核实不存在；不得使用类别截断。 | `eu-2021-2279-environmental-footprint` |
| `boundary_extension` | 尚未列出的范围内物种或器官 | 若选定变体尚无卡片，必须新增完整的物种和组织特定行；不得使用其他物种或其他器官流。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | 同类别中间投入 | 申报任何 CPC 21170 中间投入的来源，并防止同一生产递归重复计算。 | `eu-2021-2279-environmental-footprint` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `species_receiving` | 按物种接收与验收 | `required` | 每个生产批次 | 在合法生产或捕获及进厂运输结束后启动前景记录 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `slaughter_primary_separation` | 屠宰与按物种初级分离 | `required` | 每个验收批次 | 分别分离具名肉、可食器官、共产品与残余物 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `meat_offal_preparation` | 按物种和组织制备肉及内脏 | `required` | 每个参考产品批次 | 修整、清洗、检验并计量一个具名肉或器官路线 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `state_conditioning` | 按状态冷却与冻结 | `conditional` | 冷藏或冷冻状态必须纳入；鲜状态绕过本过程 | 产生分别具名的冷藏和冷冻变体并记录制冷系统 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `variant_packaging_release` | 变体包装、储存与放行 | `required` | 每个放行参考产品批次 | 只选择一个物种—组织—状态变体并以官方宽类别身份放行 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `hygiene_heat_generation` | 卫生清洗与场内产热 | `required` | 每个生产批次及卫生周期 | 记录各项清洗投入、热载体、废水与燃烧排放 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |
| `onsite_wastewater_treatment` | 条件性场内废水处理 | `conditional` | 仅当报告设施边界内运行处理时 | 分别记录处理投入、残余物、去向与直接排放 | 每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体 |

### 过程：按物种接收与验收（`species_receiving`）

#### 输入

##### 产品流

###### 输入产品流：Live Nile crocodile (Crocodylus niloticus)（`receiving_live_nile_crocodile`）

本卡将“Live Nile crocodile (Crocodylus niloticus)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Nile crocodile (Crocodylus niloticus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Rock dove (Columba livia)（`receiving_live_rock_dove`）

本卡将“Live Rock dove (Columba livia)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Rock dove (Columba livia)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Red grouse (Lagopus lagopus scotica)（`receiving_live_red_grouse`）

本卡将“Live Red grouse (Lagopus lagopus scotica)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Red grouse (Lagopus lagopus scotica)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Common ostrich (Struthio camelus)（`receiving_live_common_ostrich`）

本卡将“Live Common ostrich (Struthio camelus)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Common ostrich (Struthio camelus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Grey partridge (Perdix perdix)（`receiving_live_grey_partridge`）

本卡将“Live Grey partridge (Perdix perdix)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Grey partridge (Perdix perdix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Common pheasant (Phasianus colchicus)（`receiving_live_common_pheasant`）

本卡将“Live Common pheasant (Phasianus colchicus)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Common pheasant (Phasianus colchicus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Common quail (Coturnix coturnix)（`receiving_live_common_quail`）

本卡将“Live Common quail (Coturnix coturnix)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Common quail (Coturnix coturnix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Wild mallard (Anas platyrhynchos)（`receiving_live_wild_mallard`）

本卡将“Live Wild mallard (Anas platyrhynchos)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Wild mallard (Anas platyrhynchos)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Live Wild greylag goose (Anser anser)（`receiving_live_wild_greylag_goose`）

本卡将“Live Wild greylag goose (Anser anser)”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Live Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Live Wild greylag goose (Anser anser)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Live Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`receiving_electricity`）

本卡将“Electricity, grid supply”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`receiving_water`）

本卡将“Process water”作为“按物种接收与验收”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Accepted live Nile crocodile (Crocodylus niloticus)（`receiving_accepted_nile_crocodile`）

本卡将“Accepted live Nile crocodile (Crocodylus niloticus)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Nile crocodile (Crocodylus niloticus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Rock dove (Columba livia)（`receiving_accepted_rock_dove`）

本卡将“Accepted live Rock dove (Columba livia)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Rock dove (Columba livia)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Red grouse (Lagopus lagopus scotica)（`receiving_accepted_red_grouse`）

本卡将“Accepted live Red grouse (Lagopus lagopus scotica)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Red grouse (Lagopus lagopus scotica)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Common ostrich (Struthio camelus)（`receiving_accepted_common_ostrich`）

本卡将“Accepted live Common ostrich (Struthio camelus)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common ostrich (Struthio camelus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Grey partridge (Perdix perdix)（`receiving_accepted_grey_partridge`）

本卡将“Accepted live Grey partridge (Perdix perdix)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Grey partridge (Perdix perdix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Common pheasant (Phasianus colchicus)（`receiving_accepted_common_pheasant`）

本卡将“Accepted live Common pheasant (Phasianus colchicus)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common pheasant (Phasianus colchicus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Common quail (Coturnix coturnix)（`receiving_accepted_common_quail`）

本卡将“Accepted live Common quail (Coturnix coturnix)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common quail (Coturnix coturnix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Wild mallard (Anas platyrhynchos)（`receiving_accepted_wild_mallard`）

本卡将“Accepted live Wild mallard (Anas platyrhynchos)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Wild mallard (Anas platyrhynchos)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Accepted live Wild greylag goose (Anser anser)（`receiving_accepted_wild_greylag_goose`）

本卡将“Accepted live Wild greylag goose (Anser anser)”作为“按物种接收与验收”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Wild greylag goose (Anser anser)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Excreta from live Nile crocodile (Crocodylus niloticus)（`receiving_excreta_nile_crocodile`）

本卡将“Excreta from live Nile crocodile (Crocodylus niloticus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Nile crocodile (Crocodylus niloticus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)（`receiving_wash_wastewater_nile_crocodile`）

本卡将“Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Rock dove (Columba livia)（`receiving_excreta_rock_dove`）

本卡将“Excreta from live Rock dove (Columba livia)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Rock dove (Columba livia)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Rock dove (Columba livia)（`receiving_wash_wastewater_rock_dove`）

本卡将“Receiving wash wastewater from Rock dove (Columba livia)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Rock dove (Columba livia)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Rock dove (Columba livia)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Red grouse (Lagopus lagopus scotica)（`receiving_excreta_red_grouse`）

本卡将“Excreta from live Red grouse (Lagopus lagopus scotica)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Red grouse (Lagopus lagopus scotica)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)（`receiving_wash_wastewater_red_grouse`）

本卡将“Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Common ostrich (Struthio camelus)（`receiving_excreta_common_ostrich`）

本卡将“Excreta from live Common ostrich (Struthio camelus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Common ostrich (Struthio camelus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Common ostrich (Struthio camelus)（`receiving_wash_wastewater_common_ostrich`）

本卡将“Receiving wash wastewater from Common ostrich (Struthio camelus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Common ostrich (Struthio camelus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Common ostrich (Struthio camelus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Grey partridge (Perdix perdix)（`receiving_excreta_grey_partridge`）

本卡将“Excreta from live Grey partridge (Perdix perdix)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Grey partridge (Perdix perdix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Grey partridge (Perdix perdix)（`receiving_wash_wastewater_grey_partridge`）

本卡将“Receiving wash wastewater from Grey partridge (Perdix perdix)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Grey partridge (Perdix perdix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Grey partridge (Perdix perdix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Common pheasant (Phasianus colchicus)（`receiving_excreta_common_pheasant`）

本卡将“Excreta from live Common pheasant (Phasianus colchicus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Common pheasant (Phasianus colchicus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Common pheasant (Phasianus colchicus)（`receiving_wash_wastewater_common_pheasant`）

本卡将“Receiving wash wastewater from Common pheasant (Phasianus colchicus)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Common pheasant (Phasianus colchicus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Common pheasant (Phasianus colchicus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Common quail (Coturnix coturnix)（`receiving_excreta_common_quail`）

本卡将“Excreta from live Common quail (Coturnix coturnix)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Common quail (Coturnix coturnix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Common quail (Coturnix coturnix)（`receiving_wash_wastewater_common_quail`）

本卡将“Receiving wash wastewater from Common quail (Coturnix coturnix)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Common quail (Coturnix coturnix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Common quail (Coturnix coturnix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Wild mallard (Anas platyrhynchos)（`receiving_excreta_wild_mallard`）

本卡将“Excreta from live Wild mallard (Anas platyrhynchos)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Wild mallard (Anas platyrhynchos)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Wild mallard (Anas platyrhynchos)（`receiving_wash_wastewater_wild_mallard`）

本卡将“Receiving wash wastewater from Wild mallard (Anas platyrhynchos)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Wild mallard (Anas platyrhynchos)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Excreta from live Wild greylag goose (Anser anser)（`receiving_excreta_wild_greylag_goose`）

本卡将“Excreta from live Wild greylag goose (Anser anser)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Excreta from live Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Excreta from live Wild greylag goose (Anser anser)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Excreta from live Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Receiving wash wastewater from Wild greylag goose (Anser anser)（`receiving_wash_wastewater_wild_greylag_goose`）

本卡将“Receiving wash wastewater from Wild greylag goose (Anser anser)”作为“按物种接收与验收”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Receiving wash wastewater from Wild greylag goose (Anser anser)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Receiving wash wastewater from Wild greylag goose (Anser anser)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Receiving wash wastewater from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：屠宰与按物种初级分离（`slaughter_primary_separation`）

#### 输入

##### 产品流

###### 输入产品流：Accepted live Nile crocodile (Crocodylus niloticus)（`slaughter_accepted_nile_crocodile_input`）

本卡将“Accepted live Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Nile crocodile (Crocodylus niloticus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Rock dove (Columba livia)（`slaughter_accepted_rock_dove_input`）

本卡将“Accepted live Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Rock dove (Columba livia)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Red grouse (Lagopus lagopus scotica)（`slaughter_accepted_red_grouse_input`）

本卡将“Accepted live Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Red grouse (Lagopus lagopus scotica)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Common ostrich (Struthio camelus)（`slaughter_accepted_common_ostrich_input`）

本卡将“Accepted live Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common ostrich (Struthio camelus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Grey partridge (Perdix perdix)（`slaughter_accepted_grey_partridge_input`）

本卡将“Accepted live Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Grey partridge (Perdix perdix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Common pheasant (Phasianus colchicus)（`slaughter_accepted_common_pheasant_input`）

本卡将“Accepted live Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common pheasant (Phasianus colchicus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Common quail (Coturnix coturnix)（`slaughter_accepted_common_quail_input`）

本卡将“Accepted live Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Common quail (Coturnix coturnix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Wild mallard (Anas platyrhynchos)（`slaughter_accepted_wild_mallard_input`）

本卡将“Accepted live Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Wild mallard (Anas platyrhynchos)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Accepted live Wild greylag goose (Anser anser)（`slaughter_accepted_wild_greylag_goose_input`）

本卡将“Accepted live Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Accepted live Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Accepted live Wild greylag goose (Anser anser)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Accepted live Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`slaughter_electricity`）

本卡将“Electricity, grid supply”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`slaughter_water`）

本卡将“Process water”作为“屠宰与按物种初级分离”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat（`slaughter_untrimmed_nile_crocodile_skeletal_meat`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Nile crocodile (Crocodylus niloticus) liver（`slaughter_untrimmed_nile_crocodile_liver`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Nile crocodile (Crocodylus niloticus) heart（`slaughter_untrimmed_nile_crocodile_heart`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Nile crocodile (Crocodylus niloticus) kidney（`slaughter_untrimmed_nile_crocodile_kidney`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) kidney
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Nile crocodile (Crocodylus niloticus) stomach（`slaughter_untrimmed_nile_crocodile_stomach`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) stomach
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Rock dove (Columba livia) skeletal meat（`slaughter_untrimmed_rock_dove_skeletal_meat`）

本卡将“Untrimmed Rock dove (Columba livia) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Rock dove (Columba livia) liver（`slaughter_untrimmed_rock_dove_liver`）

本卡将“Untrimmed Rock dove (Columba livia) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Rock dove (Columba livia) heart（`slaughter_untrimmed_rock_dove_heart`）

本卡将“Untrimmed Rock dove (Columba livia) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Rock dove (Columba livia) gizzard（`slaughter_untrimmed_rock_dove_gizzard`）

本卡将“Untrimmed Rock dove (Columba livia) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat（`slaughter_untrimmed_red_grouse_skeletal_meat`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Red grouse (Lagopus lagopus scotica) liver（`slaughter_untrimmed_red_grouse_liver`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Red grouse (Lagopus lagopus scotica) heart（`slaughter_untrimmed_red_grouse_heart`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Red grouse (Lagopus lagopus scotica) gizzard（`slaughter_untrimmed_red_grouse_gizzard`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common ostrich (Struthio camelus) skeletal meat（`slaughter_untrimmed_common_ostrich_skeletal_meat`）

本卡将“Untrimmed Common ostrich (Struthio camelus) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common ostrich (Struthio camelus) liver（`slaughter_untrimmed_common_ostrich_liver`）

本卡将“Untrimmed Common ostrich (Struthio camelus) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common ostrich (Struthio camelus) heart（`slaughter_untrimmed_common_ostrich_heart`）

本卡将“Untrimmed Common ostrich (Struthio camelus) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common ostrich (Struthio camelus) gizzard（`slaughter_untrimmed_common_ostrich_gizzard`）

本卡将“Untrimmed Common ostrich (Struthio camelus) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Grey partridge (Perdix perdix) skeletal meat（`slaughter_untrimmed_grey_partridge_skeletal_meat`）

本卡将“Untrimmed Grey partridge (Perdix perdix) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Grey partridge (Perdix perdix) liver（`slaughter_untrimmed_grey_partridge_liver`）

本卡将“Untrimmed Grey partridge (Perdix perdix) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Grey partridge (Perdix perdix) heart（`slaughter_untrimmed_grey_partridge_heart`）

本卡将“Untrimmed Grey partridge (Perdix perdix) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Grey partridge (Perdix perdix) gizzard（`slaughter_untrimmed_grey_partridge_gizzard`）

本卡将“Untrimmed Grey partridge (Perdix perdix) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common pheasant (Phasianus colchicus) skeletal meat（`slaughter_untrimmed_common_pheasant_skeletal_meat`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common pheasant (Phasianus colchicus) liver（`slaughter_untrimmed_common_pheasant_liver`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common pheasant (Phasianus colchicus) heart（`slaughter_untrimmed_common_pheasant_heart`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common pheasant (Phasianus colchicus) gizzard（`slaughter_untrimmed_common_pheasant_gizzard`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common quail (Coturnix coturnix) skeletal meat（`slaughter_untrimmed_common_quail_skeletal_meat`）

本卡将“Untrimmed Common quail (Coturnix coturnix) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common quail (Coturnix coturnix) liver（`slaughter_untrimmed_common_quail_liver`）

本卡将“Untrimmed Common quail (Coturnix coturnix) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common quail (Coturnix coturnix) heart（`slaughter_untrimmed_common_quail_heart`）

本卡将“Untrimmed Common quail (Coturnix coturnix) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Common quail (Coturnix coturnix) gizzard（`slaughter_untrimmed_common_quail_gizzard`）

本卡将“Untrimmed Common quail (Coturnix coturnix) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat（`slaughter_untrimmed_wild_mallard_skeletal_meat`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild mallard (Anas platyrhynchos) liver（`slaughter_untrimmed_wild_mallard_liver`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild mallard (Anas platyrhynchos) heart（`slaughter_untrimmed_wild_mallard_heart`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild mallard (Anas platyrhynchos) gizzard（`slaughter_untrimmed_wild_mallard_gizzard`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild greylag goose (Anser anser) skeletal meat（`slaughter_untrimmed_wild_greylag_goose_skeletal_meat`）

本卡将“Untrimmed Wild greylag goose (Anser anser) skeletal meat”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild greylag goose (Anser anser) liver（`slaughter_untrimmed_wild_greylag_goose_liver`）

本卡将“Untrimmed Wild greylag goose (Anser anser) liver”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild greylag goose (Anser anser) heart（`slaughter_untrimmed_wild_greylag_goose_heart`）

本卡将“Untrimmed Wild greylag goose (Anser anser) heart”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Untrimmed Wild greylag goose (Anser anser) gizzard（`slaughter_untrimmed_wild_greylag_goose_gizzard`）

本卡将“Untrimmed Wild greylag goose (Anser anser) gizzard”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) skin for recovery（`slaughter_cover_nile_crocodile`）

本卡将“Nile crocodile (Crocodylus niloticus) skin for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Nile crocodile (Crocodylus niloticus) skin for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skin for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skin for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Nile crocodile (Crocodylus niloticus)（`slaughter_recovered_blood_nile_crocodile`）

本卡将“Recovered blood from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Nile crocodile (Crocodylus niloticus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)（`slaughter_recovered_fat_nile_crocodile`）

本卡将“Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) feathers for recovery（`slaughter_cover_rock_dove`）

本卡将“Rock dove (Columba livia) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Rock dove (Columba livia) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Rock dove (Columba livia)（`slaughter_recovered_blood_rock_dove`）

本卡将“Recovered blood from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Rock dove (Columba livia)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Rock dove (Columba livia)（`slaughter_recovered_fat_rock_dove`）

本卡将“Recovered slaughter fat from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Rock dove (Columba livia)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) feathers for recovery（`slaughter_cover_red_grouse`）

本卡将“Red grouse (Lagopus lagopus scotica) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Red grouse (Lagopus lagopus scotica) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Red grouse (Lagopus lagopus scotica)（`slaughter_recovered_blood_red_grouse`）

本卡将“Recovered blood from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Red grouse (Lagopus lagopus scotica)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)（`slaughter_recovered_fat_red_grouse`）

本卡将“Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) feathers for recovery（`slaughter_cover_common_ostrich`）

本卡将“Common ostrich (Struthio camelus) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Common ostrich (Struthio camelus) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Common ostrich (Struthio camelus)（`slaughter_recovered_blood_common_ostrich`）

本卡将“Recovered blood from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Common ostrich (Struthio camelus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Common ostrich (Struthio camelus)（`slaughter_recovered_fat_common_ostrich`）

本卡将“Recovered slaughter fat from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Common ostrich (Struthio camelus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) feathers for recovery（`slaughter_cover_grey_partridge`）

本卡将“Grey partridge (Perdix perdix) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Grey partridge (Perdix perdix) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Grey partridge (Perdix perdix)（`slaughter_recovered_blood_grey_partridge`）

本卡将“Recovered blood from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Grey partridge (Perdix perdix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Grey partridge (Perdix perdix)（`slaughter_recovered_fat_grey_partridge`）

本卡将“Recovered slaughter fat from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Grey partridge (Perdix perdix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) feathers for recovery（`slaughter_cover_common_pheasant`）

本卡将“Common pheasant (Phasianus colchicus) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Common pheasant (Phasianus colchicus) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Common pheasant (Phasianus colchicus)（`slaughter_recovered_blood_common_pheasant`）

本卡将“Recovered blood from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Common pheasant (Phasianus colchicus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Common pheasant (Phasianus colchicus)（`slaughter_recovered_fat_common_pheasant`）

本卡将“Recovered slaughter fat from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Common pheasant (Phasianus colchicus)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) feathers for recovery（`slaughter_cover_common_quail`）

本卡将“Common quail (Coturnix coturnix) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Common quail (Coturnix coturnix) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Common quail (Coturnix coturnix)（`slaughter_recovered_blood_common_quail`）

本卡将“Recovered blood from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Common quail (Coturnix coturnix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Common quail (Coturnix coturnix)（`slaughter_recovered_fat_common_quail`）

本卡将“Recovered slaughter fat from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Common quail (Coturnix coturnix)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) feathers for recovery（`slaughter_cover_wild_mallard`）

本卡将“Wild mallard (Anas platyrhynchos) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Wild mallard (Anas platyrhynchos) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Wild mallard (Anas platyrhynchos)（`slaughter_recovered_blood_wild_mallard`）

本卡将“Recovered blood from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Wild mallard (Anas platyrhynchos)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Wild mallard (Anas platyrhynchos)（`slaughter_recovered_fat_wild_mallard`）

本卡将“Recovered slaughter fat from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Wild mallard (Anas platyrhynchos)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) feathers for recovery（`slaughter_cover_wild_greylag_goose`）

本卡将“Wild greylag goose (Anser anser) feathers for recovery”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Wild greylag goose (Anser anser) feathers for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) feathers for recovery”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) feathers for recovery”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered blood from Wild greylag goose (Anser anser)（`slaughter_recovered_blood_wild_greylag_goose`）

本卡将“Recovered blood from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered blood from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered blood from Wild greylag goose (Anser anser)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered blood from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Recovered slaughter fat from Wild greylag goose (Anser anser)（`slaughter_recovered_fat_wild_greylag_goose`）

本卡将“Recovered slaughter fat from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Recovered slaughter fat from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Recovered slaughter fat from Wild greylag goose (Anser anser)”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Recovered slaughter fat from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Waste blood from Nile crocodile (Crocodylus niloticus)（`slaughter_waste_blood_nile_crocodile`）

本卡将“Waste blood from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Nile crocodile (Crocodylus niloticus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Nile crocodile (Crocodylus niloticus)（`slaughter_bone_residual_nile_crocodile`）

本卡将“Bone residual from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Nile crocodile (Crocodylus niloticus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Nile crocodile (Crocodylus niloticus)（`slaughter_digestive_contents_nile_crocodile`）

本卡将“Digestive contents from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Nile crocodile (Crocodylus niloticus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Nile crocodile (Crocodylus niloticus)（`slaughter_inedible_tissue_nile_crocodile`）

本卡将“Inedible tissue residual from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Nile crocodile (Crocodylus niloticus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)（`slaughter_high_load_wastewater_nile_crocodile`）

本卡将“High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Rock dove (Columba livia)（`slaughter_waste_blood_rock_dove`）

本卡将“Waste blood from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Rock dove (Columba livia)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Rock dove (Columba livia)（`slaughter_bone_residual_rock_dove`）

本卡将“Bone residual from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Rock dove (Columba livia)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Rock dove (Columba livia)（`slaughter_digestive_contents_rock_dove`）

本卡将“Digestive contents from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Rock dove (Columba livia)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Rock dove (Columba livia)（`slaughter_inedible_tissue_rock_dove`）

本卡将“Inedible tissue residual from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Rock dove (Columba livia)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Rock dove (Columba livia)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Rock dove (Columba livia)（`slaughter_high_load_wastewater_rock_dove`）

本卡将“High-organic-load slaughter wastewater from Rock dove (Columba livia)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Rock dove (Columba livia)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Rock dove (Columba livia)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Red grouse (Lagopus lagopus scotica)（`slaughter_waste_blood_red_grouse`）

本卡将“Waste blood from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Red grouse (Lagopus lagopus scotica)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Red grouse (Lagopus lagopus scotica)（`slaughter_bone_residual_red_grouse`）

本卡将“Bone residual from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Red grouse (Lagopus lagopus scotica)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Red grouse (Lagopus lagopus scotica)（`slaughter_digestive_contents_red_grouse`）

本卡将“Digestive contents from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Red grouse (Lagopus lagopus scotica)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Red grouse (Lagopus lagopus scotica)（`slaughter_inedible_tissue_red_grouse`）

本卡将“Inedible tissue residual from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Red grouse (Lagopus lagopus scotica)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)（`slaughter_high_load_wastewater_red_grouse`）

本卡将“High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Common ostrich (Struthio camelus)（`slaughter_waste_blood_common_ostrich`）

本卡将“Waste blood from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Common ostrich (Struthio camelus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Common ostrich (Struthio camelus)（`slaughter_bone_residual_common_ostrich`）

本卡将“Bone residual from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Common ostrich (Struthio camelus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Common ostrich (Struthio camelus)（`slaughter_digestive_contents_common_ostrich`）

本卡将“Digestive contents from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Common ostrich (Struthio camelus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Common ostrich (Struthio camelus)（`slaughter_inedible_tissue_common_ostrich`）

本卡将“Inedible tissue residual from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Common ostrich (Struthio camelus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Common ostrich (Struthio camelus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)（`slaughter_high_load_wastewater_common_ostrich`）

本卡将“High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Grey partridge (Perdix perdix)（`slaughter_waste_blood_grey_partridge`）

本卡将“Waste blood from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Grey partridge (Perdix perdix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Grey partridge (Perdix perdix)（`slaughter_bone_residual_grey_partridge`）

本卡将“Bone residual from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Grey partridge (Perdix perdix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Grey partridge (Perdix perdix)（`slaughter_digestive_contents_grey_partridge`）

本卡将“Digestive contents from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Grey partridge (Perdix perdix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Grey partridge (Perdix perdix)（`slaughter_inedible_tissue_grey_partridge`）

本卡将“Inedible tissue residual from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Grey partridge (Perdix perdix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Grey partridge (Perdix perdix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)（`slaughter_high_load_wastewater_grey_partridge`）

本卡将“High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Common pheasant (Phasianus colchicus)（`slaughter_waste_blood_common_pheasant`）

本卡将“Waste blood from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Common pheasant (Phasianus colchicus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Common pheasant (Phasianus colchicus)（`slaughter_bone_residual_common_pheasant`）

本卡将“Bone residual from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Common pheasant (Phasianus colchicus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Common pheasant (Phasianus colchicus)（`slaughter_digestive_contents_common_pheasant`）

本卡将“Digestive contents from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Common pheasant (Phasianus colchicus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Common pheasant (Phasianus colchicus)（`slaughter_inedible_tissue_common_pheasant`）

本卡将“Inedible tissue residual from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Common pheasant (Phasianus colchicus)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Common pheasant (Phasianus colchicus)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)（`slaughter_high_load_wastewater_common_pheasant`）

本卡将“High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Common quail (Coturnix coturnix)（`slaughter_waste_blood_common_quail`）

本卡将“Waste blood from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Common quail (Coturnix coturnix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Common quail (Coturnix coturnix)（`slaughter_bone_residual_common_quail`）

本卡将“Bone residual from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Common quail (Coturnix coturnix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Common quail (Coturnix coturnix)（`slaughter_digestive_contents_common_quail`）

本卡将“Digestive contents from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Common quail (Coturnix coturnix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Common quail (Coturnix coturnix)（`slaughter_inedible_tissue_common_quail`）

本卡将“Inedible tissue residual from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Common quail (Coturnix coturnix)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Common quail (Coturnix coturnix)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)（`slaughter_high_load_wastewater_common_quail`）

本卡将“High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Wild mallard (Anas platyrhynchos)（`slaughter_waste_blood_wild_mallard`）

本卡将“Waste blood from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Wild mallard (Anas platyrhynchos)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Wild mallard (Anas platyrhynchos)（`slaughter_bone_residual_wild_mallard`）

本卡将“Bone residual from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Wild mallard (Anas platyrhynchos)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Wild mallard (Anas platyrhynchos)（`slaughter_digestive_contents_wild_mallard`）

本卡将“Digestive contents from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Wild mallard (Anas platyrhynchos)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Wild mallard (Anas platyrhynchos)（`slaughter_inedible_tissue_wild_mallard`）

本卡将“Inedible tissue residual from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Wild mallard (Anas platyrhynchos)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)（`slaughter_high_load_wastewater_wild_mallard`）

本卡将“High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Waste blood from Wild greylag goose (Anser anser)（`slaughter_waste_blood_wild_greylag_goose`）

本卡将“Waste blood from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Waste blood from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Waste blood from Wild greylag goose (Anser anser)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Waste blood from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Bone residual from Wild greylag goose (Anser anser)（`slaughter_bone_residual_wild_greylag_goose`）

本卡将“Bone residual from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Bone residual from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Bone residual from Wild greylag goose (Anser anser)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Bone residual from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Digestive contents from Wild greylag goose (Anser anser)（`slaughter_digestive_contents_wild_greylag_goose`）

本卡将“Digestive contents from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Digestive contents from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Digestive contents from Wild greylag goose (Anser anser)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Digestive contents from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Inedible tissue residual from Wild greylag goose (Anser anser)（`slaughter_inedible_tissue_wild_greylag_goose`）

本卡将“Inedible tissue residual from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Inedible tissue residual from Wild greylag goose (Anser anser)
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Inedible tissue residual from Wild greylag goose (Anser anser)”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Inedible tissue residual from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)（`slaughter_high_load_wastewater_wild_greylag_goose`）

本卡将“High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)”作为“屠宰与按物种初级分离”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load slaughter wastewater from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Ammonia to air（`slaughter_ammonia_to_air`）

本卡将“Ammonia to air”作为“屠宰与按物种初级分离”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Ammonia to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Ammonia to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Hydrogen sulfide to air（`slaughter_hydrogen_sulfide_to_air`）

本卡将“Hydrogen sulfide to air”作为“屠宰与按物种初级分离”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Hydrogen sulfide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Hydrogen sulfide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Hydrogen sulfide to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：按物种和组织制备肉及内脏（`meat_offal_preparation`）

#### 输入

##### 产品流

###### 输入产品流：Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat（`preparation_untrimmed_nile_crocodile_skeletal_meat_input`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Nile crocodile (Crocodylus niloticus) liver（`preparation_untrimmed_nile_crocodile_liver_input`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Nile crocodile (Crocodylus niloticus) heart（`preparation_untrimmed_nile_crocodile_heart_input`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Nile crocodile (Crocodylus niloticus) kidney（`preparation_untrimmed_nile_crocodile_kidney_input`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) kidney
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) kidney”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Nile crocodile (Crocodylus niloticus) stomach（`preparation_untrimmed_nile_crocodile_stomach_input`）

本卡将“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Nile crocodile (Crocodylus niloticus) stomach
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Nile crocodile (Crocodylus niloticus) stomach”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Rock dove (Columba livia) skeletal meat（`preparation_untrimmed_rock_dove_skeletal_meat_input`）

本卡将“Untrimmed Rock dove (Columba livia) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Rock dove (Columba livia) liver（`preparation_untrimmed_rock_dove_liver_input`）

本卡将“Untrimmed Rock dove (Columba livia) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Rock dove (Columba livia) heart（`preparation_untrimmed_rock_dove_heart_input`）

本卡将“Untrimmed Rock dove (Columba livia) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Rock dove (Columba livia) gizzard（`preparation_untrimmed_rock_dove_gizzard_input`）

本卡将“Untrimmed Rock dove (Columba livia) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Rock dove (Columba livia) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Rock dove (Columba livia) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Rock dove (Columba livia) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat（`preparation_untrimmed_red_grouse_skeletal_meat_input`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Red grouse (Lagopus lagopus scotica) liver（`preparation_untrimmed_red_grouse_liver_input`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Red grouse (Lagopus lagopus scotica) heart（`preparation_untrimmed_red_grouse_heart_input`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Red grouse (Lagopus lagopus scotica) gizzard（`preparation_untrimmed_red_grouse_gizzard_input`）

本卡将“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Red grouse (Lagopus lagopus scotica) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Red grouse (Lagopus lagopus scotica) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common ostrich (Struthio camelus) skeletal meat（`preparation_untrimmed_common_ostrich_skeletal_meat_input`）

本卡将“Untrimmed Common ostrich (Struthio camelus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common ostrich (Struthio camelus) liver（`preparation_untrimmed_common_ostrich_liver_input`）

本卡将“Untrimmed Common ostrich (Struthio camelus) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common ostrich (Struthio camelus) heart（`preparation_untrimmed_common_ostrich_heart_input`）

本卡将“Untrimmed Common ostrich (Struthio camelus) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common ostrich (Struthio camelus) gizzard（`preparation_untrimmed_common_ostrich_gizzard_input`）

本卡将“Untrimmed Common ostrich (Struthio camelus) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common ostrich (Struthio camelus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common ostrich (Struthio camelus) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common ostrich (Struthio camelus) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Grey partridge (Perdix perdix) skeletal meat（`preparation_untrimmed_grey_partridge_skeletal_meat_input`）

本卡将“Untrimmed Grey partridge (Perdix perdix) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Grey partridge (Perdix perdix) liver（`preparation_untrimmed_grey_partridge_liver_input`）

本卡将“Untrimmed Grey partridge (Perdix perdix) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Grey partridge (Perdix perdix) heart（`preparation_untrimmed_grey_partridge_heart_input`）

本卡将“Untrimmed Grey partridge (Perdix perdix) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Grey partridge (Perdix perdix) gizzard（`preparation_untrimmed_grey_partridge_gizzard_input`）

本卡将“Untrimmed Grey partridge (Perdix perdix) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Grey partridge (Perdix perdix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Grey partridge (Perdix perdix) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Grey partridge (Perdix perdix) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common pheasant (Phasianus colchicus) skeletal meat（`preparation_untrimmed_common_pheasant_skeletal_meat_input`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common pheasant (Phasianus colchicus) liver（`preparation_untrimmed_common_pheasant_liver_input`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common pheasant (Phasianus colchicus) heart（`preparation_untrimmed_common_pheasant_heart_input`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common pheasant (Phasianus colchicus) gizzard（`preparation_untrimmed_common_pheasant_gizzard_input`）

本卡将“Untrimmed Common pheasant (Phasianus colchicus) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common pheasant (Phasianus colchicus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common pheasant (Phasianus colchicus) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common pheasant (Phasianus colchicus) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common quail (Coturnix coturnix) skeletal meat（`preparation_untrimmed_common_quail_skeletal_meat_input`）

本卡将“Untrimmed Common quail (Coturnix coturnix) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common quail (Coturnix coturnix) liver（`preparation_untrimmed_common_quail_liver_input`）

本卡将“Untrimmed Common quail (Coturnix coturnix) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common quail (Coturnix coturnix) heart（`preparation_untrimmed_common_quail_heart_input`）

本卡将“Untrimmed Common quail (Coturnix coturnix) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Common quail (Coturnix coturnix) gizzard（`preparation_untrimmed_common_quail_gizzard_input`）

本卡将“Untrimmed Common quail (Coturnix coturnix) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Common quail (Coturnix coturnix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Common quail (Coturnix coturnix) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Common quail (Coturnix coturnix) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat（`preparation_untrimmed_wild_mallard_skeletal_meat_input`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild mallard (Anas platyrhynchos) liver（`preparation_untrimmed_wild_mallard_liver_input`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild mallard (Anas platyrhynchos) heart（`preparation_untrimmed_wild_mallard_heart_input`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild mallard (Anas platyrhynchos) gizzard（`preparation_untrimmed_wild_mallard_gizzard_input`）

本卡将“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild mallard (Anas platyrhynchos) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild mallard (Anas platyrhynchos) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild greylag goose (Anser anser) skeletal meat（`preparation_untrimmed_wild_greylag_goose_skeletal_meat_input`）

本卡将“Untrimmed Wild greylag goose (Anser anser) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) skeletal meat”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) skeletal meat”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild greylag goose (Anser anser) liver（`preparation_untrimmed_wild_greylag_goose_liver_input`）

本卡将“Untrimmed Wild greylag goose (Anser anser) liver”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) liver”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) liver”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild greylag goose (Anser anser) heart（`preparation_untrimmed_wild_greylag_goose_heart_input`）

本卡将“Untrimmed Wild greylag goose (Anser anser) heart”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) heart”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) heart”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Untrimmed Wild greylag goose (Anser anser) gizzard（`preparation_untrimmed_wild_greylag_goose_gizzard_input`）

本卡将“Untrimmed Wild greylag goose (Anser anser) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Untrimmed Wild greylag goose (Anser anser) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Untrimmed Wild greylag goose (Anser anser) gizzard”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Untrimmed Wild greylag goose (Anser anser) gizzard”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`preparation_electricity`）

本卡将“Electricity, grid supply”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`preparation_water`）

本卡将“Process water”作为“按物种和组织制备肉及内脏”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh（`preparation_fresh_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) liver, fresh（`preparation_fresh_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) heart, fresh（`preparation_fresh_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) kidney, fresh（`preparation_fresh_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) stomach, fresh（`preparation_fresh_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) skeletal meat, fresh（`preparation_fresh_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) liver, fresh（`preparation_fresh_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) heart, fresh（`preparation_fresh_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) gizzard, fresh（`preparation_fresh_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh（`preparation_fresh_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) liver, fresh（`preparation_fresh_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) heart, fresh（`preparation_fresh_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) gizzard, fresh（`preparation_fresh_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) skeletal meat, fresh（`preparation_fresh_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) liver, fresh（`preparation_fresh_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) heart, fresh（`preparation_fresh_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) gizzard, fresh（`preparation_fresh_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) skeletal meat, fresh（`preparation_fresh_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) liver, fresh（`preparation_fresh_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) heart, fresh（`preparation_fresh_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) gizzard, fresh（`preparation_fresh_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) skeletal meat, fresh（`preparation_fresh_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) liver, fresh（`preparation_fresh_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) heart, fresh（`preparation_fresh_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) gizzard, fresh（`preparation_fresh_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) skeletal meat, fresh（`preparation_fresh_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) liver, fresh（`preparation_fresh_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) heart, fresh（`preparation_fresh_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) gizzard, fresh（`preparation_fresh_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh（`preparation_fresh_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) liver, fresh（`preparation_fresh_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) heart, fresh（`preparation_fresh_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) gizzard, fresh（`preparation_fresh_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) skeletal meat, fresh（`preparation_fresh_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) liver, fresh（`preparation_fresh_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) heart, fresh（`preparation_fresh_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) gizzard, fresh（`preparation_fresh_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, fresh”作为“按物种和组织制备肉及内脏”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat（`preparation_trim_waste_nile_crocodile_skeletal_meat`）

本卡将“Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Nile crocodile (Crocodylus niloticus) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Nile crocodile (Crocodylus niloticus) liver（`preparation_trim_waste_nile_crocodile_liver`）

本卡将“Trimming waste from Nile crocodile (Crocodylus niloticus) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Nile crocodile (Crocodylus niloticus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Nile crocodile (Crocodylus niloticus) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Nile crocodile (Crocodylus niloticus) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Nile crocodile (Crocodylus niloticus) heart（`preparation_trim_waste_nile_crocodile_heart`）

本卡将“Trimming waste from Nile crocodile (Crocodylus niloticus) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Nile crocodile (Crocodylus niloticus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Nile crocodile (Crocodylus niloticus) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Nile crocodile (Crocodylus niloticus) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Nile crocodile (Crocodylus niloticus) kidney（`preparation_trim_waste_nile_crocodile_kidney`）

本卡将“Trimming waste from Nile crocodile (Crocodylus niloticus) kidney”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Nile crocodile (Crocodylus niloticus) kidney
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Nile crocodile (Crocodylus niloticus) kidney”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Nile crocodile (Crocodylus niloticus) kidney”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Nile crocodile (Crocodylus niloticus) stomach（`preparation_trim_waste_nile_crocodile_stomach`）

本卡将“Trimming waste from Nile crocodile (Crocodylus niloticus) stomach”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Nile crocodile (Crocodylus niloticus) stomach
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Nile crocodile (Crocodylus niloticus) stomach”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Nile crocodile (Crocodylus niloticus) stomach”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Rock dove (Columba livia) skeletal meat（`preparation_trim_waste_rock_dove_skeletal_meat`）

本卡将“Trimming waste from Rock dove (Columba livia) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Rock dove (Columba livia) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Rock dove (Columba livia) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Rock dove (Columba livia) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Rock dove (Columba livia) liver（`preparation_trim_waste_rock_dove_liver`）

本卡将“Trimming waste from Rock dove (Columba livia) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Rock dove (Columba livia) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Rock dove (Columba livia) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Rock dove (Columba livia) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Rock dove (Columba livia) heart（`preparation_trim_waste_rock_dove_heart`）

本卡将“Trimming waste from Rock dove (Columba livia) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Rock dove (Columba livia) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Rock dove (Columba livia) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Rock dove (Columba livia) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Rock dove (Columba livia) gizzard（`preparation_trim_waste_rock_dove_gizzard`）

本卡将“Trimming waste from Rock dove (Columba livia) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Rock dove (Columba livia) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Rock dove (Columba livia) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Rock dove (Columba livia) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat（`preparation_trim_waste_red_grouse_skeletal_meat`）

本卡将“Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Red grouse (Lagopus lagopus scotica) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Red grouse (Lagopus lagopus scotica) liver（`preparation_trim_waste_red_grouse_liver`）

本卡将“Trimming waste from Red grouse (Lagopus lagopus scotica) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Red grouse (Lagopus lagopus scotica) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Red grouse (Lagopus lagopus scotica) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Red grouse (Lagopus lagopus scotica) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Red grouse (Lagopus lagopus scotica) heart（`preparation_trim_waste_red_grouse_heart`）

本卡将“Trimming waste from Red grouse (Lagopus lagopus scotica) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Red grouse (Lagopus lagopus scotica) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Red grouse (Lagopus lagopus scotica) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Red grouse (Lagopus lagopus scotica) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard（`preparation_trim_waste_red_grouse_gizzard`）

本卡将“Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Red grouse (Lagopus lagopus scotica) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common ostrich (Struthio camelus) skeletal meat（`preparation_trim_waste_common_ostrich_skeletal_meat`）

本卡将“Trimming waste from Common ostrich (Struthio camelus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common ostrich (Struthio camelus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common ostrich (Struthio camelus) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common ostrich (Struthio camelus) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common ostrich (Struthio camelus) liver（`preparation_trim_waste_common_ostrich_liver`）

本卡将“Trimming waste from Common ostrich (Struthio camelus) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common ostrich (Struthio camelus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common ostrich (Struthio camelus) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common ostrich (Struthio camelus) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common ostrich (Struthio camelus) heart（`preparation_trim_waste_common_ostrich_heart`）

本卡将“Trimming waste from Common ostrich (Struthio camelus) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common ostrich (Struthio camelus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common ostrich (Struthio camelus) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common ostrich (Struthio camelus) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common ostrich (Struthio camelus) gizzard（`preparation_trim_waste_common_ostrich_gizzard`）

本卡将“Trimming waste from Common ostrich (Struthio camelus) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common ostrich (Struthio camelus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common ostrich (Struthio camelus) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common ostrich (Struthio camelus) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Grey partridge (Perdix perdix) skeletal meat（`preparation_trim_waste_grey_partridge_skeletal_meat`）

本卡将“Trimming waste from Grey partridge (Perdix perdix) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Grey partridge (Perdix perdix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Grey partridge (Perdix perdix) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Grey partridge (Perdix perdix) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Grey partridge (Perdix perdix) liver（`preparation_trim_waste_grey_partridge_liver`）

本卡将“Trimming waste from Grey partridge (Perdix perdix) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Grey partridge (Perdix perdix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Grey partridge (Perdix perdix) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Grey partridge (Perdix perdix) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Grey partridge (Perdix perdix) heart（`preparation_trim_waste_grey_partridge_heart`）

本卡将“Trimming waste from Grey partridge (Perdix perdix) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Grey partridge (Perdix perdix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Grey partridge (Perdix perdix) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Grey partridge (Perdix perdix) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Grey partridge (Perdix perdix) gizzard（`preparation_trim_waste_grey_partridge_gizzard`）

本卡将“Trimming waste from Grey partridge (Perdix perdix) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Grey partridge (Perdix perdix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Grey partridge (Perdix perdix) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Grey partridge (Perdix perdix) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat（`preparation_trim_waste_common_pheasant_skeletal_meat`）

本卡将“Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common pheasant (Phasianus colchicus) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common pheasant (Phasianus colchicus) liver（`preparation_trim_waste_common_pheasant_liver`）

本卡将“Trimming waste from Common pheasant (Phasianus colchicus) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common pheasant (Phasianus colchicus) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common pheasant (Phasianus colchicus) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common pheasant (Phasianus colchicus) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common pheasant (Phasianus colchicus) heart（`preparation_trim_waste_common_pheasant_heart`）

本卡将“Trimming waste from Common pheasant (Phasianus colchicus) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common pheasant (Phasianus colchicus) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common pheasant (Phasianus colchicus) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common pheasant (Phasianus colchicus) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common pheasant (Phasianus colchicus) gizzard（`preparation_trim_waste_common_pheasant_gizzard`）

本卡将“Trimming waste from Common pheasant (Phasianus colchicus) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common pheasant (Phasianus colchicus) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common pheasant (Phasianus colchicus) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common pheasant (Phasianus colchicus) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common quail (Coturnix coturnix) skeletal meat（`preparation_trim_waste_common_quail_skeletal_meat`）

本卡将“Trimming waste from Common quail (Coturnix coturnix) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common quail (Coturnix coturnix) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common quail (Coturnix coturnix) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common quail (Coturnix coturnix) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common quail (Coturnix coturnix) liver（`preparation_trim_waste_common_quail_liver`）

本卡将“Trimming waste from Common quail (Coturnix coturnix) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common quail (Coturnix coturnix) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common quail (Coturnix coturnix) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common quail (Coturnix coturnix) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common quail (Coturnix coturnix) heart（`preparation_trim_waste_common_quail_heart`）

本卡将“Trimming waste from Common quail (Coturnix coturnix) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common quail (Coturnix coturnix) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common quail (Coturnix coturnix) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common quail (Coturnix coturnix) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Common quail (Coturnix coturnix) gizzard（`preparation_trim_waste_common_quail_gizzard`）

本卡将“Trimming waste from Common quail (Coturnix coturnix) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Common quail (Coturnix coturnix) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Common quail (Coturnix coturnix) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Common quail (Coturnix coturnix) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat（`preparation_trim_waste_wild_mallard_skeletal_meat`）

本卡将“Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild mallard (Anas platyrhynchos) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild mallard (Anas platyrhynchos) liver（`preparation_trim_waste_wild_mallard_liver`）

本卡将“Trimming waste from Wild mallard (Anas platyrhynchos) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild mallard (Anas platyrhynchos) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild mallard (Anas platyrhynchos) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild mallard (Anas platyrhynchos) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild mallard (Anas platyrhynchos) heart（`preparation_trim_waste_wild_mallard_heart`）

本卡将“Trimming waste from Wild mallard (Anas platyrhynchos) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild mallard (Anas platyrhynchos) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild mallard (Anas platyrhynchos) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild mallard (Anas platyrhynchos) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild mallard (Anas platyrhynchos) gizzard（`preparation_trim_waste_wild_mallard_gizzard`）

本卡将“Trimming waste from Wild mallard (Anas platyrhynchos) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild mallard (Anas platyrhynchos) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild mallard (Anas platyrhynchos) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild mallard (Anas platyrhynchos) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild greylag goose (Anser anser) skeletal meat（`preparation_trim_waste_wild_greylag_goose_skeletal_meat`）

本卡将“Trimming waste from Wild greylag goose (Anser anser) skeletal meat”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild greylag goose (Anser anser) skeletal meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild greylag goose (Anser anser) skeletal meat”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild greylag goose (Anser anser) skeletal meat”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild greylag goose (Anser anser) liver（`preparation_trim_waste_wild_greylag_goose_liver`）

本卡将“Trimming waste from Wild greylag goose (Anser anser) liver”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild greylag goose (Anser anser) liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild greylag goose (Anser anser) liver”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild greylag goose (Anser anser) liver”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild greylag goose (Anser anser) heart（`preparation_trim_waste_wild_greylag_goose_heart`）

本卡将“Trimming waste from Wild greylag goose (Anser anser) heart”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild greylag goose (Anser anser) heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild greylag goose (Anser anser) heart”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild greylag goose (Anser anser) heart”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Trimming waste from Wild greylag goose (Anser anser) gizzard（`preparation_trim_waste_wild_greylag_goose_gizzard`）

本卡将“Trimming waste from Wild greylag goose (Anser anser) gizzard”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Trimming waste from Wild greylag goose (Anser anser) gizzard
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Trimming waste from Wild greylag goose (Anser anser) gizzard”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Trimming waste from Wild greylag goose (Anser anser) gizzard”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)（`preparation_wash_wastewater_nile_crocodile`）

本卡将“High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Nile crocodile (Crocodylus niloticus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Rock dove (Columba livia)（`preparation_wash_wastewater_rock_dove`）

本卡将“High-organic-load preparation wastewater from Rock dove (Columba livia)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Rock dove (Columba livia)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Rock dove (Columba livia)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Rock dove (Columba livia)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)（`preparation_wash_wastewater_red_grouse`）

本卡将“High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Red grouse (Lagopus lagopus scotica)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Common ostrich (Struthio camelus)（`preparation_wash_wastewater_common_ostrich`）

本卡将“High-organic-load preparation wastewater from Common ostrich (Struthio camelus)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Common ostrich (Struthio camelus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Common ostrich (Struthio camelus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Common ostrich (Struthio camelus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Grey partridge (Perdix perdix)（`preparation_wash_wastewater_grey_partridge`）

本卡将“High-organic-load preparation wastewater from Grey partridge (Perdix perdix)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Grey partridge (Perdix perdix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Grey partridge (Perdix perdix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Grey partridge (Perdix perdix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)（`preparation_wash_wastewater_common_pheasant`）

本卡将“High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Common pheasant (Phasianus colchicus)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Common quail (Coturnix coturnix)（`preparation_wash_wastewater_common_quail`）

本卡将“High-organic-load preparation wastewater from Common quail (Coturnix coturnix)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Common quail (Coturnix coturnix)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Common quail (Coturnix coturnix)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Common quail (Coturnix coturnix)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)（`preparation_wash_wastewater_wild_mallard`）

本卡将“High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Wild mallard (Anas platyrhynchos)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load preparation wastewater from Wild greylag goose (Anser anser)（`preparation_wash_wastewater_wild_greylag_goose`）

本卡将“High-organic-load preparation wastewater from Wild greylag goose (Anser anser)”作为“按物种和组织制备肉及内脏”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load preparation wastewater from Wild greylag goose (Anser anser)
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load preparation wastewater from Wild greylag goose (Anser anser)”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_preparation_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load preparation wastewater from Wild greylag goose (Anser anser)”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：按状态冷却与冻结（`state_conditioning`）

#### 输入

##### 产品流

###### 输入产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh（`conditioning_fresh_nile_crocodile_skeletal_meat_input`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) liver, fresh（`conditioning_fresh_nile_crocodile_liver_input`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) heart, fresh（`conditioning_fresh_nile_crocodile_heart_input`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) kidney, fresh（`conditioning_fresh_nile_crocodile_kidney_input`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) stomach, fresh（`conditioning_fresh_nile_crocodile_stomach_input`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) skeletal meat, fresh（`conditioning_fresh_rock_dove_skeletal_meat_input`）

本卡将“Rock dove (Columba livia) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) liver, fresh（`conditioning_fresh_rock_dove_liver_input`）

本卡将“Rock dove (Columba livia) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) heart, fresh（`conditioning_fresh_rock_dove_heart_input`）

本卡将“Rock dove (Columba livia) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) gizzard, fresh（`conditioning_fresh_rock_dove_gizzard_input`）

本卡将“Rock dove (Columba livia) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh（`conditioning_fresh_red_grouse_skeletal_meat_input`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) liver, fresh（`conditioning_fresh_red_grouse_liver_input`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) heart, fresh（`conditioning_fresh_red_grouse_heart_input`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) gizzard, fresh（`conditioning_fresh_red_grouse_gizzard_input`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) skeletal meat, fresh（`conditioning_fresh_common_ostrich_skeletal_meat_input`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) liver, fresh（`conditioning_fresh_common_ostrich_liver_input`）

本卡将“Common ostrich (Struthio camelus) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) heart, fresh（`conditioning_fresh_common_ostrich_heart_input`）

本卡将“Common ostrich (Struthio camelus) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) gizzard, fresh（`conditioning_fresh_common_ostrich_gizzard_input`）

本卡将“Common ostrich (Struthio camelus) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) skeletal meat, fresh（`conditioning_fresh_grey_partridge_skeletal_meat_input`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) liver, fresh（`conditioning_fresh_grey_partridge_liver_input`）

本卡将“Grey partridge (Perdix perdix) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) heart, fresh（`conditioning_fresh_grey_partridge_heart_input`）

本卡将“Grey partridge (Perdix perdix) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) gizzard, fresh（`conditioning_fresh_grey_partridge_gizzard_input`）

本卡将“Grey partridge (Perdix perdix) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) skeletal meat, fresh（`conditioning_fresh_common_pheasant_skeletal_meat_input`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) liver, fresh（`conditioning_fresh_common_pheasant_liver_input`）

本卡将“Common pheasant (Phasianus colchicus) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) heart, fresh（`conditioning_fresh_common_pheasant_heart_input`）

本卡将“Common pheasant (Phasianus colchicus) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) gizzard, fresh（`conditioning_fresh_common_pheasant_gizzard_input`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) skeletal meat, fresh（`conditioning_fresh_common_quail_skeletal_meat_input`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) liver, fresh（`conditioning_fresh_common_quail_liver_input`）

本卡将“Common quail (Coturnix coturnix) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) heart, fresh（`conditioning_fresh_common_quail_heart_input`）

本卡将“Common quail (Coturnix coturnix) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) gizzard, fresh（`conditioning_fresh_common_quail_gizzard_input`）

本卡将“Common quail (Coturnix coturnix) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh（`conditioning_fresh_wild_mallard_skeletal_meat_input`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) liver, fresh（`conditioning_fresh_wild_mallard_liver_input`）

本卡将“Wild mallard (Anas platyrhynchos) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) heart, fresh（`conditioning_fresh_wild_mallard_heart_input`）

本卡将“Wild mallard (Anas platyrhynchos) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) gizzard, fresh（`conditioning_fresh_wild_mallard_gizzard_input`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) skeletal meat, fresh（`conditioning_fresh_wild_greylag_goose_skeletal_meat_input`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) liver, fresh（`conditioning_fresh_wild_greylag_goose_liver_input`）

本卡将“Wild greylag goose (Anser anser) liver, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) heart, fresh（`conditioning_fresh_wild_greylag_goose_heart_input`）

本卡将“Wild greylag goose (Anser anser) heart, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) gizzard, fresh（`conditioning_fresh_wild_greylag_goose_gizzard_input`）

本卡将“Wild greylag goose (Anser anser) gizzard, fresh”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`conditioning_chilling_electricity`）

本卡将“Electricity, grid supply”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_utilities`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Electricity, grid supply”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`conditioning_freezing_electricity`）

本卡将“Electricity, grid supply”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_utilities`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Electricity, grid supply”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`conditioning_process_water`）

本卡将“Process water”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_utilities`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Process water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Ammonia, refrigerant grade R717（`conditioning_r717_makeup`）

本卡将“Ammonia, refrigerant grade R717”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡按一个制冷剂物种及适用回路保持独立。

- 选定流：Ammonia, refrigerant grade R717
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修及回路库存记录，分别对“Ammonia, refrigerant grade R717”质量进行对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Ammonia, refrigerant grade R717”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Carbon dioxide, refrigerant grade R744（`conditioning_r744_makeup`）

本卡将“Carbon dioxide, refrigerant grade R744”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡按一个制冷剂物种及适用回路保持独立。

- 选定流：Carbon dioxide, refrigerant grade R744
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修及回路库存记录，分别对“Carbon dioxide, refrigerant grade R744”质量进行对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Carbon dioxide, refrigerant grade R744”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Propane, refrigerant grade R290（`conditioning_r290_makeup`）

本卡将“Propane, refrigerant grade R290”作为“按状态冷却与冻结”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡按一个制冷剂物种及适用回路保持独立。

- 选定流：Propane, refrigerant grade R290
- 流属性/单位：Mass / kg
- 数量规则：使用采购、钢瓶称量、维修及回路库存记录，分别对“Propane, refrigerant grade R290”质量进行对账。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Propane, refrigerant grade R290”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, chilled（`conditioning_chilled_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, frozen（`conditioning_frozen_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) liver, chilled（`conditioning_chilled_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) liver, frozen（`conditioning_frozen_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) heart, chilled（`conditioning_chilled_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) heart, frozen（`conditioning_frozen_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) kidney, chilled（`conditioning_chilled_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) kidney, frozen（`conditioning_frozen_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) stomach, chilled（`conditioning_chilled_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Nile crocodile (Crocodylus niloticus) stomach, frozen（`conditioning_frozen_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) skeletal meat, chilled（`conditioning_chilled_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) skeletal meat, frozen（`conditioning_frozen_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) liver, chilled（`conditioning_chilled_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) liver, frozen（`conditioning_frozen_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) heart, chilled（`conditioning_chilled_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) heart, frozen（`conditioning_frozen_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) gizzard, chilled（`conditioning_chilled_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Rock dove (Columba livia) gizzard, frozen（`conditioning_frozen_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, chilled（`conditioning_chilled_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, frozen（`conditioning_frozen_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) liver, chilled（`conditioning_chilled_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) liver, frozen（`conditioning_frozen_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) heart, chilled（`conditioning_chilled_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) heart, frozen（`conditioning_frozen_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) gizzard, chilled（`conditioning_chilled_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Red grouse (Lagopus lagopus scotica) gizzard, frozen（`conditioning_frozen_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) skeletal meat, chilled（`conditioning_chilled_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) skeletal meat, frozen（`conditioning_frozen_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) liver, chilled（`conditioning_chilled_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) liver, frozen（`conditioning_frozen_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) heart, chilled（`conditioning_chilled_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) heart, frozen（`conditioning_frozen_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) gizzard, chilled（`conditioning_chilled_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common ostrich (Struthio camelus) gizzard, frozen（`conditioning_frozen_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) skeletal meat, chilled（`conditioning_chilled_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) skeletal meat, frozen（`conditioning_frozen_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) liver, chilled（`conditioning_chilled_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) liver, frozen（`conditioning_frozen_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) heart, chilled（`conditioning_chilled_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) heart, frozen（`conditioning_frozen_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) gizzard, chilled（`conditioning_chilled_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Grey partridge (Perdix perdix) gizzard, frozen（`conditioning_frozen_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) skeletal meat, chilled（`conditioning_chilled_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) skeletal meat, frozen（`conditioning_frozen_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) liver, chilled（`conditioning_chilled_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) liver, frozen（`conditioning_frozen_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) heart, chilled（`conditioning_chilled_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) heart, frozen（`conditioning_frozen_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) gizzard, chilled（`conditioning_chilled_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common pheasant (Phasianus colchicus) gizzard, frozen（`conditioning_frozen_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) skeletal meat, chilled（`conditioning_chilled_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) skeletal meat, frozen（`conditioning_frozen_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) liver, chilled（`conditioning_chilled_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) liver, frozen（`conditioning_frozen_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) heart, chilled（`conditioning_chilled_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) heart, frozen（`conditioning_frozen_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) gizzard, chilled（`conditioning_chilled_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Common quail (Coturnix coturnix) gizzard, frozen（`conditioning_frozen_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) skeletal meat, chilled（`conditioning_chilled_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) skeletal meat, frozen（`conditioning_frozen_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) liver, chilled（`conditioning_chilled_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) liver, frozen（`conditioning_frozen_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) heart, chilled（`conditioning_chilled_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) heart, frozen（`conditioning_frozen_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) gizzard, chilled（`conditioning_chilled_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild mallard (Anas platyrhynchos) gizzard, frozen（`conditioning_frozen_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) skeletal meat, chilled（`conditioning_chilled_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) skeletal meat, frozen（`conditioning_frozen_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) liver, chilled（`conditioning_chilled_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) liver, frozen（`conditioning_frozen_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) heart, chilled（`conditioning_chilled_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) heart, frozen（`conditioning_frozen_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) gizzard, chilled（`conditioning_chilled_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, chilled”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出产品流：Wild greylag goose (Anser anser) gizzard, frozen（`conditioning_frozen_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, frozen”作为“按状态冷却与冻结”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_conditioning_products`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Cold-system defrost wastewater（`conditioning_defrost_wastewater`）

本卡将“Cold-system defrost wastewater”作为“按状态冷却与冻结”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Cold-system defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Cold-system defrost wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_utilities`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Cold-system defrost wastewater”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Cold-system condensate wastewater（`conditioning_condensate_wastewater`）

本卡将“Cold-system condensate wastewater”作为“按状态冷却与冻结”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Cold-system condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Cold-system condensate wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_conditioning_utilities`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Cold-system condensate wastewater”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Ammonia, R717 refrigerant, to air（`conditioning_r717_to_air`）

本卡将“Ammonia, R717 refrigerant, to air”作为“按状态冷却与冻结”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Ammonia, R717 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种和回路，以期初库存、补充、期末库存、回收及有记录转移量对账计算“Ammonia, R717 refrigerant, to air”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Ammonia, R717 refrigerant, to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Carbon dioxide, R744 refrigerant, to air（`conditioning_r744_to_air`）

本卡将“Carbon dioxide, R744 refrigerant, to air”作为“按状态冷却与冻结”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Carbon dioxide, R744 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种和回路，以期初库存、补充、期末库存、回收及有记录转移量对账计算“Carbon dioxide, R744 refrigerant, to air”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Carbon dioxide, R744 refrigerant, to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Propane, R290 refrigerant, to air（`conditioning_r290_to_air`）

本卡将“Propane, R290 refrigerant, to air”作为“按状态冷却与冻结”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Propane, R290 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按该制冷剂物种和回路，以期初库存、补充、期末库存、回收及有记录转移量对账计算“Propane, R290 refrigerant, to air”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Propane, R290 refrigerant, to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：变体包装、储存与放行（`variant_packaging_release`）

#### 输入

##### 产品流

###### 输入产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh（`packaging_fresh_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, chilled（`packaging_chilled_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) skeletal meat, frozen（`packaging_frozen_nile_crocodile_skeletal_meat`）

本卡将“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) liver, fresh（`packaging_fresh_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) liver, chilled（`packaging_chilled_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) liver, frozen（`packaging_frozen_nile_crocodile_liver`）

本卡将“Nile crocodile (Crocodylus niloticus) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) heart, fresh（`packaging_fresh_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) heart, chilled（`packaging_chilled_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) heart, frozen（`packaging_frozen_nile_crocodile_heart`）

本卡将“Nile crocodile (Crocodylus niloticus) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) kidney, fresh（`packaging_fresh_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) kidney, chilled（`packaging_chilled_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) kidney, frozen（`packaging_frozen_nile_crocodile_kidney`）

本卡将“Nile crocodile (Crocodylus niloticus) kidney, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) kidney, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) kidney, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) kidney, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) stomach, fresh（`packaging_fresh_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) stomach, chilled（`packaging_chilled_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nile crocodile (Crocodylus niloticus) stomach, frozen（`packaging_frozen_nile_crocodile_stomach`）

本卡将“Nile crocodile (Crocodylus niloticus) stomach, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Nile crocodile (Crocodylus niloticus) stomach, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Nile crocodile (Crocodylus niloticus) stomach, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nile crocodile (Crocodylus niloticus) stomach, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) skeletal meat, fresh（`packaging_fresh_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) skeletal meat, chilled（`packaging_chilled_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) skeletal meat, frozen（`packaging_frozen_rock_dove_skeletal_meat`）

本卡将“Rock dove (Columba livia) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) liver, fresh（`packaging_fresh_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) liver, chilled（`packaging_chilled_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) liver, frozen（`packaging_frozen_rock_dove_liver`）

本卡将“Rock dove (Columba livia) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) heart, fresh（`packaging_fresh_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) heart, chilled（`packaging_chilled_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) heart, frozen（`packaging_frozen_rock_dove_heart`）

本卡将“Rock dove (Columba livia) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) gizzard, fresh（`packaging_fresh_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) gizzard, chilled（`packaging_chilled_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Rock dove (Columba livia) gizzard, frozen（`packaging_frozen_rock_dove_gizzard`）

本卡将“Rock dove (Columba livia) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rock dove (Columba livia) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Rock dove (Columba livia) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rock dove (Columba livia) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh（`packaging_fresh_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, chilled（`packaging_chilled_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) skeletal meat, frozen（`packaging_frozen_red_grouse_skeletal_meat`）

本卡将“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) liver, fresh（`packaging_fresh_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) liver, chilled（`packaging_chilled_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) liver, frozen（`packaging_frozen_red_grouse_liver`）

本卡将“Red grouse (Lagopus lagopus scotica) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) heart, fresh（`packaging_fresh_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) heart, chilled（`packaging_chilled_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) heart, frozen（`packaging_frozen_red_grouse_heart`）

本卡将“Red grouse (Lagopus lagopus scotica) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) gizzard, fresh（`packaging_fresh_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) gizzard, chilled（`packaging_chilled_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Red grouse (Lagopus lagopus scotica) gizzard, frozen（`packaging_frozen_red_grouse_gizzard`）

本卡将“Red grouse (Lagopus lagopus scotica) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Red grouse (Lagopus lagopus scotica) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Red grouse (Lagopus lagopus scotica) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Red grouse (Lagopus lagopus scotica) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) skeletal meat, fresh（`packaging_fresh_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) skeletal meat, chilled（`packaging_chilled_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) skeletal meat, frozen（`packaging_frozen_common_ostrich_skeletal_meat`）

本卡将“Common ostrich (Struthio camelus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) liver, fresh（`packaging_fresh_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) liver, chilled（`packaging_chilled_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) liver, frozen（`packaging_frozen_common_ostrich_liver`）

本卡将“Common ostrich (Struthio camelus) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) heart, fresh（`packaging_fresh_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) heart, chilled（`packaging_chilled_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) heart, frozen（`packaging_frozen_common_ostrich_heart`）

本卡将“Common ostrich (Struthio camelus) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) gizzard, fresh（`packaging_fresh_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) gizzard, chilled（`packaging_chilled_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common ostrich (Struthio camelus) gizzard, frozen（`packaging_frozen_common_ostrich_gizzard`）

本卡将“Common ostrich (Struthio camelus) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common ostrich (Struthio camelus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common ostrich (Struthio camelus) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common ostrich (Struthio camelus) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) skeletal meat, fresh（`packaging_fresh_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) skeletal meat, chilled（`packaging_chilled_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) skeletal meat, frozen（`packaging_frozen_grey_partridge_skeletal_meat`）

本卡将“Grey partridge (Perdix perdix) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) liver, fresh（`packaging_fresh_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) liver, chilled（`packaging_chilled_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) liver, frozen（`packaging_frozen_grey_partridge_liver`）

本卡将“Grey partridge (Perdix perdix) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) heart, fresh（`packaging_fresh_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) heart, chilled（`packaging_chilled_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) heart, frozen（`packaging_frozen_grey_partridge_heart`）

本卡将“Grey partridge (Perdix perdix) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) gizzard, fresh（`packaging_fresh_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) gizzard, chilled（`packaging_chilled_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Grey partridge (Perdix perdix) gizzard, frozen（`packaging_frozen_grey_partridge_gizzard`）

本卡将“Grey partridge (Perdix perdix) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Grey partridge (Perdix perdix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Grey partridge (Perdix perdix) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Grey partridge (Perdix perdix) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) skeletal meat, fresh（`packaging_fresh_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) skeletal meat, chilled（`packaging_chilled_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) skeletal meat, frozen（`packaging_frozen_common_pheasant_skeletal_meat`）

本卡将“Common pheasant (Phasianus colchicus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) liver, fresh（`packaging_fresh_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) liver, chilled（`packaging_chilled_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) liver, frozen（`packaging_frozen_common_pheasant_liver`）

本卡将“Common pheasant (Phasianus colchicus) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) heart, fresh（`packaging_fresh_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) heart, chilled（`packaging_chilled_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) heart, frozen（`packaging_frozen_common_pheasant_heart`）

本卡将“Common pheasant (Phasianus colchicus) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) gizzard, fresh（`packaging_fresh_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) gizzard, chilled（`packaging_chilled_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common pheasant (Phasianus colchicus) gizzard, frozen（`packaging_frozen_common_pheasant_gizzard`）

本卡将“Common pheasant (Phasianus colchicus) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common pheasant (Phasianus colchicus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common pheasant (Phasianus colchicus) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common pheasant (Phasianus colchicus) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) skeletal meat, fresh（`packaging_fresh_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) skeletal meat, chilled（`packaging_chilled_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) skeletal meat, frozen（`packaging_frozen_common_quail_skeletal_meat`）

本卡将“Common quail (Coturnix coturnix) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) liver, fresh（`packaging_fresh_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) liver, chilled（`packaging_chilled_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) liver, frozen（`packaging_frozen_common_quail_liver`）

本卡将“Common quail (Coturnix coturnix) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) heart, fresh（`packaging_fresh_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) heart, chilled（`packaging_chilled_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) heart, frozen（`packaging_frozen_common_quail_heart`）

本卡将“Common quail (Coturnix coturnix) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) gizzard, fresh（`packaging_fresh_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) gizzard, chilled（`packaging_chilled_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Common quail (Coturnix coturnix) gizzard, frozen（`packaging_frozen_common_quail_gizzard`）

本卡将“Common quail (Coturnix coturnix) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Common quail (Coturnix coturnix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Common quail (Coturnix coturnix) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Common quail (Coturnix coturnix) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh（`packaging_fresh_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) skeletal meat, chilled（`packaging_chilled_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) skeletal meat, frozen（`packaging_frozen_wild_mallard_skeletal_meat`）

本卡将“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) liver, fresh（`packaging_fresh_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) liver, chilled（`packaging_chilled_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) liver, frozen（`packaging_frozen_wild_mallard_liver`）

本卡将“Wild mallard (Anas platyrhynchos) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) heart, fresh（`packaging_fresh_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) heart, chilled（`packaging_chilled_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) heart, frozen（`packaging_frozen_wild_mallard_heart`）

本卡将“Wild mallard (Anas platyrhynchos) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) gizzard, fresh（`packaging_fresh_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) gizzard, chilled（`packaging_chilled_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild mallard (Anas platyrhynchos) gizzard, frozen（`packaging_frozen_wild_mallard_gizzard`）

本卡将“Wild mallard (Anas platyrhynchos) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild mallard (Anas platyrhynchos) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild mallard (Anas platyrhynchos) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild mallard (Anas platyrhynchos) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) skeletal meat, fresh（`packaging_fresh_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) skeletal meat, chilled（`packaging_chilled_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) skeletal meat, frozen（`packaging_frozen_wild_greylag_goose_skeletal_meat`）

本卡将“Wild greylag goose (Anser anser) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) skeletal meat, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) liver, fresh（`packaging_fresh_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) liver, chilled（`packaging_chilled_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) liver, frozen（`packaging_frozen_wild_greylag_goose_liver`）

本卡将“Wild greylag goose (Anser anser) liver, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) liver, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) liver, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) heart, fresh（`packaging_fresh_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) heart, chilled（`packaging_chilled_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) heart, frozen（`packaging_frozen_wild_greylag_goose_heart`）

本卡将“Wild greylag goose (Anser anser) heart, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) heart, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) heart, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) gizzard, fresh（`packaging_fresh_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, fresh”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, fresh”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) gizzard, chilled（`packaging_chilled_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, chilled”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, chilled”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Wild greylag goose (Anser anser) gizzard, frozen（`packaging_frozen_wild_greylag_goose_gizzard`）

本卡将“Wild greylag goose (Anser anser) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Wild greylag goose (Anser anser) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、库存、转移或放行记录，分别记录“Wild greylag goose (Anser anser) gizzard, frozen”的批次质量，并保持物种、组织与状态身份。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_variant_selection`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wild greylag goose (Anser anser) gizzard, frozen”交换且有记录时纳入。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`packaging_electricity`）

本卡将“Electricity, grid supply”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`storage_chilled_electricity`）

本卡将“Electricity, grid supply”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Electricity, grid supply”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Electricity, grid supply（`storage_frozen_electricity`）

本卡将“Electricity, grid supply”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_release_records`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Electricity, grid supply”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Low-density polyethylene film（`packaging_ldpe_film`）

本卡将“Low-density polyethylene film”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Low-density polyethylene film
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Low-density polyethylene film”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Low-density polyethylene film”交换且有记录时纳入。
- 来源：`eu-2021-2279-environmental-footprint`

###### 输入产品流：Corrugated fibreboard box（`packaging_fibreboard_box`）

本卡将“Corrugated fibreboard box”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Corrugated fibreboard box
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Corrugated fibreboard box”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Corrugated fibreboard box”交换且有记录时纳入。
- 来源：`eu-2021-2279-environmental-footprint`

###### 输入产品流：Paper label（`packaging_paper_label`）

本卡将“Paper label”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Paper label
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Paper label”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Paper label”交换且有记录时纳入。
- 来源：`eu-2021-2279-environmental-footprint`

###### 输入产品流：Wood pallet（`packaging_wood_pallet`）

本卡将“Wood pallet”作为“变体包装、储存与放行”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Wood pallet
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Wood pallet”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Wood pallet”交换且有记录时纳入。
- 来源：`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 单一申报 CPC 21170 变体的参考输出（`cpc21170_reference_product`）

本卡使用官方宽类别 Tiangong 流作为类别身份；实际数据集输出必须锁定为一个物种、一个骨骼肌肉或器官身份及一个市场状态。

- 选定流：Other meat and edible offal, fresh, chilled or frozen `e67d4710-2094-4972-85a2-9e593546ae82`
- 流属性/单位：Mass / kg
- 数量规则：记录恰好 1 kg 净合格产品：一个申报物种、一个骨骼肌肉或器官身份及一个鲜、冷藏或冷冻状态；排除包装质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_release_records`
- UUID 状态：已核验公开 state=100 Product flow，并与 CPC 21170 及 Mass 参考精确一致。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：必需；每个数据集恰好一个定量参考输出。
- 来源：`un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh（`packaging_reject_fresh_nile_crocodile_skeletal_meat`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled（`packaging_reject_chilled_nile_crocodile_skeletal_meat`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen（`packaging_reject_frozen_nile_crocodile_skeletal_meat`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) liver, fresh（`packaging_reject_fresh_nile_crocodile_liver`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) liver, chilled（`packaging_reject_chilled_nile_crocodile_liver`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) liver, frozen（`packaging_reject_frozen_nile_crocodile_liver`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) heart, fresh（`packaging_reject_fresh_nile_crocodile_heart`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) heart, chilled（`packaging_reject_chilled_nile_crocodile_heart`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) heart, frozen（`packaging_reject_frozen_nile_crocodile_heart`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh（`packaging_reject_fresh_nile_crocodile_kidney`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) kidney, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled（`packaging_reject_chilled_nile_crocodile_kidney`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) kidney, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen（`packaging_reject_frozen_nile_crocodile_kidney`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) kidney, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh（`packaging_reject_fresh_nile_crocodile_stomach`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) stomach, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled（`packaging_reject_chilled_nile_crocodile_stomach`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) stomach, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen（`packaging_reject_frozen_nile_crocodile_stomach`）

本卡将“Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Nile crocodile (Crocodylus niloticus) stomach, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) skeletal meat, fresh（`packaging_reject_fresh_rock_dove_skeletal_meat`）

本卡将“Rejected Rock dove (Columba livia) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) skeletal meat, chilled（`packaging_reject_chilled_rock_dove_skeletal_meat`）

本卡将“Rejected Rock dove (Columba livia) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) skeletal meat, frozen（`packaging_reject_frozen_rock_dove_skeletal_meat`）

本卡将“Rejected Rock dove (Columba livia) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) liver, fresh（`packaging_reject_fresh_rock_dove_liver`）

本卡将“Rejected Rock dove (Columba livia) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) liver, chilled（`packaging_reject_chilled_rock_dove_liver`）

本卡将“Rejected Rock dove (Columba livia) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) liver, frozen（`packaging_reject_frozen_rock_dove_liver`）

本卡将“Rejected Rock dove (Columba livia) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) heart, fresh（`packaging_reject_fresh_rock_dove_heart`）

本卡将“Rejected Rock dove (Columba livia) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) heart, chilled（`packaging_reject_chilled_rock_dove_heart`）

本卡将“Rejected Rock dove (Columba livia) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) heart, frozen（`packaging_reject_frozen_rock_dove_heart`）

本卡将“Rejected Rock dove (Columba livia) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) gizzard, fresh（`packaging_reject_fresh_rock_dove_gizzard`）

本卡将“Rejected Rock dove (Columba livia) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) gizzard, chilled（`packaging_reject_chilled_rock_dove_gizzard`）

本卡将“Rejected Rock dove (Columba livia) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Rock dove (Columba livia) gizzard, frozen（`packaging_reject_frozen_rock_dove_gizzard`）

本卡将“Rejected Rock dove (Columba livia) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Rock dove (Columba livia) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Rock dove (Columba livia) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Rock dove (Columba livia) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh（`packaging_reject_fresh_red_grouse_skeletal_meat`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled（`packaging_reject_chilled_red_grouse_skeletal_meat`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen（`packaging_reject_frozen_red_grouse_skeletal_meat`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) liver, fresh（`packaging_reject_fresh_red_grouse_liver`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) liver, chilled（`packaging_reject_chilled_red_grouse_liver`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) liver, frozen（`packaging_reject_frozen_red_grouse_liver`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) heart, fresh（`packaging_reject_fresh_red_grouse_heart`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) heart, chilled（`packaging_reject_chilled_red_grouse_heart`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) heart, frozen（`packaging_reject_frozen_red_grouse_heart`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh（`packaging_reject_fresh_red_grouse_gizzard`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled（`packaging_reject_chilled_red_grouse_gizzard`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen（`packaging_reject_frozen_red_grouse_gizzard`）

本卡将“Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Red grouse (Lagopus lagopus scotica) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) skeletal meat, fresh（`packaging_reject_fresh_common_ostrich_skeletal_meat`）

本卡将“Rejected Common ostrich (Struthio camelus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) skeletal meat, chilled（`packaging_reject_chilled_common_ostrich_skeletal_meat`）

本卡将“Rejected Common ostrich (Struthio camelus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) skeletal meat, frozen（`packaging_reject_frozen_common_ostrich_skeletal_meat`）

本卡将“Rejected Common ostrich (Struthio camelus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) liver, fresh（`packaging_reject_fresh_common_ostrich_liver`）

本卡将“Rejected Common ostrich (Struthio camelus) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) liver, chilled（`packaging_reject_chilled_common_ostrich_liver`）

本卡将“Rejected Common ostrich (Struthio camelus) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) liver, frozen（`packaging_reject_frozen_common_ostrich_liver`）

本卡将“Rejected Common ostrich (Struthio camelus) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) heart, fresh（`packaging_reject_fresh_common_ostrich_heart`）

本卡将“Rejected Common ostrich (Struthio camelus) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) heart, chilled（`packaging_reject_chilled_common_ostrich_heart`）

本卡将“Rejected Common ostrich (Struthio camelus) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) heart, frozen（`packaging_reject_frozen_common_ostrich_heart`）

本卡将“Rejected Common ostrich (Struthio camelus) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) gizzard, fresh（`packaging_reject_fresh_common_ostrich_gizzard`）

本卡将“Rejected Common ostrich (Struthio camelus) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) gizzard, chilled（`packaging_reject_chilled_common_ostrich_gizzard`）

本卡将“Rejected Common ostrich (Struthio camelus) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common ostrich (Struthio camelus) gizzard, frozen（`packaging_reject_frozen_common_ostrich_gizzard`）

本卡将“Rejected Common ostrich (Struthio camelus) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common ostrich (Struthio camelus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common ostrich (Struthio camelus) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common ostrich (Struthio camelus) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) skeletal meat, fresh（`packaging_reject_fresh_grey_partridge_skeletal_meat`）

本卡将“Rejected Grey partridge (Perdix perdix) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) skeletal meat, chilled（`packaging_reject_chilled_grey_partridge_skeletal_meat`）

本卡将“Rejected Grey partridge (Perdix perdix) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) skeletal meat, frozen（`packaging_reject_frozen_grey_partridge_skeletal_meat`）

本卡将“Rejected Grey partridge (Perdix perdix) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) liver, fresh（`packaging_reject_fresh_grey_partridge_liver`）

本卡将“Rejected Grey partridge (Perdix perdix) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) liver, chilled（`packaging_reject_chilled_grey_partridge_liver`）

本卡将“Rejected Grey partridge (Perdix perdix) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) liver, frozen（`packaging_reject_frozen_grey_partridge_liver`）

本卡将“Rejected Grey partridge (Perdix perdix) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) heart, fresh（`packaging_reject_fresh_grey_partridge_heart`）

本卡将“Rejected Grey partridge (Perdix perdix) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) heart, chilled（`packaging_reject_chilled_grey_partridge_heart`）

本卡将“Rejected Grey partridge (Perdix perdix) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) heart, frozen（`packaging_reject_frozen_grey_partridge_heart`）

本卡将“Rejected Grey partridge (Perdix perdix) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) gizzard, fresh（`packaging_reject_fresh_grey_partridge_gizzard`）

本卡将“Rejected Grey partridge (Perdix perdix) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) gizzard, chilled（`packaging_reject_chilled_grey_partridge_gizzard`）

本卡将“Rejected Grey partridge (Perdix perdix) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Grey partridge (Perdix perdix) gizzard, frozen（`packaging_reject_frozen_grey_partridge_gizzard`）

本卡将“Rejected Grey partridge (Perdix perdix) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Grey partridge (Perdix perdix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Grey partridge (Perdix perdix) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Grey partridge (Perdix perdix) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh（`packaging_reject_fresh_common_pheasant_skeletal_meat`）

本卡将“Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled（`packaging_reject_chilled_common_pheasant_skeletal_meat`）

本卡将“Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen（`packaging_reject_frozen_common_pheasant_skeletal_meat`）

本卡将“Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) liver, fresh（`packaging_reject_fresh_common_pheasant_liver`）

本卡将“Rejected Common pheasant (Phasianus colchicus) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) liver, chilled（`packaging_reject_chilled_common_pheasant_liver`）

本卡将“Rejected Common pheasant (Phasianus colchicus) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) liver, frozen（`packaging_reject_frozen_common_pheasant_liver`）

本卡将“Rejected Common pheasant (Phasianus colchicus) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) heart, fresh（`packaging_reject_fresh_common_pheasant_heart`）

本卡将“Rejected Common pheasant (Phasianus colchicus) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) heart, chilled（`packaging_reject_chilled_common_pheasant_heart`）

本卡将“Rejected Common pheasant (Phasianus colchicus) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) heart, frozen（`packaging_reject_frozen_common_pheasant_heart`）

本卡将“Rejected Common pheasant (Phasianus colchicus) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) gizzard, fresh（`packaging_reject_fresh_common_pheasant_gizzard`）

本卡将“Rejected Common pheasant (Phasianus colchicus) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) gizzard, chilled（`packaging_reject_chilled_common_pheasant_gizzard`）

本卡将“Rejected Common pheasant (Phasianus colchicus) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common pheasant (Phasianus colchicus) gizzard, frozen（`packaging_reject_frozen_common_pheasant_gizzard`）

本卡将“Rejected Common pheasant (Phasianus colchicus) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common pheasant (Phasianus colchicus) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common pheasant (Phasianus colchicus) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common pheasant (Phasianus colchicus) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) skeletal meat, fresh（`packaging_reject_fresh_common_quail_skeletal_meat`）

本卡将“Rejected Common quail (Coturnix coturnix) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) skeletal meat, chilled（`packaging_reject_chilled_common_quail_skeletal_meat`）

本卡将“Rejected Common quail (Coturnix coturnix) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) skeletal meat, frozen（`packaging_reject_frozen_common_quail_skeletal_meat`）

本卡将“Rejected Common quail (Coturnix coturnix) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) liver, fresh（`packaging_reject_fresh_common_quail_liver`）

本卡将“Rejected Common quail (Coturnix coturnix) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) liver, chilled（`packaging_reject_chilled_common_quail_liver`）

本卡将“Rejected Common quail (Coturnix coturnix) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) liver, frozen（`packaging_reject_frozen_common_quail_liver`）

本卡将“Rejected Common quail (Coturnix coturnix) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) heart, fresh（`packaging_reject_fresh_common_quail_heart`）

本卡将“Rejected Common quail (Coturnix coturnix) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) heart, chilled（`packaging_reject_chilled_common_quail_heart`）

本卡将“Rejected Common quail (Coturnix coturnix) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) heart, frozen（`packaging_reject_frozen_common_quail_heart`）

本卡将“Rejected Common quail (Coturnix coturnix) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) gizzard, fresh（`packaging_reject_fresh_common_quail_gizzard`）

本卡将“Rejected Common quail (Coturnix coturnix) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) gizzard, chilled（`packaging_reject_chilled_common_quail_gizzard`）

本卡将“Rejected Common quail (Coturnix coturnix) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Common quail (Coturnix coturnix) gizzard, frozen（`packaging_reject_frozen_common_quail_gizzard`）

本卡将“Rejected Common quail (Coturnix coturnix) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Common quail (Coturnix coturnix) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Common quail (Coturnix coturnix) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Common quail (Coturnix coturnix) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh（`packaging_reject_fresh_wild_mallard_skeletal_meat`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled（`packaging_reject_chilled_wild_mallard_skeletal_meat`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen（`packaging_reject_frozen_wild_mallard_skeletal_meat`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) liver, fresh（`packaging_reject_fresh_wild_mallard_liver`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) liver, chilled（`packaging_reject_chilled_wild_mallard_liver`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) liver, frozen（`packaging_reject_frozen_wild_mallard_liver`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) heart, fresh（`packaging_reject_fresh_wild_mallard_heart`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) heart, chilled（`packaging_reject_chilled_wild_mallard_heart`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) heart, frozen（`packaging_reject_frozen_wild_mallard_heart`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh（`packaging_reject_fresh_wild_mallard_gizzard`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled（`packaging_reject_chilled_wild_mallard_gizzard`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen（`packaging_reject_frozen_wild_mallard_gizzard`）

本卡将“Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild mallard (Anas platyrhynchos) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) skeletal meat, fresh（`packaging_reject_fresh_wild_greylag_goose_skeletal_meat`）

本卡将“Rejected Wild greylag goose (Anser anser) skeletal meat, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) skeletal meat, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) skeletal meat, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) skeletal meat, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) skeletal meat, chilled（`packaging_reject_chilled_wild_greylag_goose_skeletal_meat`）

本卡将“Rejected Wild greylag goose (Anser anser) skeletal meat, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) skeletal meat, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) skeletal meat, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) skeletal meat, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) skeletal meat, frozen（`packaging_reject_frozen_wild_greylag_goose_skeletal_meat`）

本卡将“Rejected Wild greylag goose (Anser anser) skeletal meat, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) skeletal meat, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) skeletal meat, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) skeletal meat, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) liver, fresh（`packaging_reject_fresh_wild_greylag_goose_liver`）

本卡将“Rejected Wild greylag goose (Anser anser) liver, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) liver, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) liver, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) liver, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) liver, chilled（`packaging_reject_chilled_wild_greylag_goose_liver`）

本卡将“Rejected Wild greylag goose (Anser anser) liver, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) liver, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) liver, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) liver, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) liver, frozen（`packaging_reject_frozen_wild_greylag_goose_liver`）

本卡将“Rejected Wild greylag goose (Anser anser) liver, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) liver, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) liver, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) liver, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) heart, fresh（`packaging_reject_fresh_wild_greylag_goose_heart`）

本卡将“Rejected Wild greylag goose (Anser anser) heart, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) heart, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) heart, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) heart, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) heart, chilled（`packaging_reject_chilled_wild_greylag_goose_heart`）

本卡将“Rejected Wild greylag goose (Anser anser) heart, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) heart, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) heart, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) heart, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) heart, frozen（`packaging_reject_frozen_wild_greylag_goose_heart`）

本卡将“Rejected Wild greylag goose (Anser anser) heart, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) heart, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) heart, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) heart, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) gizzard, fresh（`packaging_reject_fresh_wild_greylag_goose_gizzard`）

本卡将“Rejected Wild greylag goose (Anser anser) gizzard, fresh”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) gizzard, fresh
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) gizzard, fresh”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) gizzard, fresh”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) gizzard, chilled（`packaging_reject_chilled_wild_greylag_goose_gizzard`）

本卡将“Rejected Wild greylag goose (Anser anser) gizzard, chilled”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) gizzard, chilled
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) gizzard, chilled”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) gizzard, chilled”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Rejected Wild greylag goose (Anser anser) gizzard, frozen（`packaging_reject_frozen_wild_greylag_goose_gizzard`）

本卡将“Rejected Wild greylag goose (Anser anser) gizzard, frozen”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应流名所示的一个市场状态。

- 选定流：Rejected Wild greylag goose (Anser anser) gizzard, frozen
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“Rejected Wild greylag goose (Anser anser) gizzard, frozen”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Rejected Wild greylag goose (Anser anser) gizzard, frozen”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Low-density polyethylene film offcut waste（`packaging_ldpe_film_waste`）

本卡将“Low-density polyethylene film offcut waste”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Low-density polyethylene film offcut waste
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Low-density polyethylene film offcut waste”。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Low-density polyethylene film offcut waste”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Corrugated fibreboard packaging waste（`packaging_fibreboard_waste`）

本卡将“Corrugated fibreboard packaging waste”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Corrugated fibreboard packaging waste”。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Corrugated fibreboard packaging waste”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Paper label waste（`packaging_paper_label_waste`）

本卡将“Paper label waste”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Paper label waste”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Paper label waste”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：Damaged wood pallet waste（`packaging_wood_pallet_waste`）

本卡将“Damaged wood pallet waste”作为“变体包装、储存与放行”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Damaged wood pallet waste
- 流属性/单位：Mass / kg
- 数量规则：按产品 BoM，以领用质量减退回质量或组件数量乘经核实单件质量，分别计算“Damaged wood pallet waste”。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Damaged wood pallet waste”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

### 过程：卫生清洗与场内产热（`hygiene_heat_generation`）

#### 输入

##### 产品流

###### 输入产品流：Electricity, grid supply（`hygiene_electricity`）

本卡将“Electricity, grid supply”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hygiene_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：当场址发生“Electricity, grid supply”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`hygiene_water`）

本卡将“Process water”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：当场址发生“Process water”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Purchased steam（`hygiene_purchased_steam`）

本卡将“Purchased steam”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Purchased steam
- 流属性/单位：Energy / MJ
- 数量规则：用经校准的载体计量记录及同期温度、压力、密度或热值，将“Purchased steam”换算为交付能量，并防止供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_carriers`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Purchased steam”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Purchased hot water（`hygiene_purchased_hot_water`）

本卡将“Purchased hot water”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Purchased hot water
- 流属性/单位：Energy / MJ
- 数量规则：用经校准的载体计量记录及同期温度、压力、密度或热值，将“Purchased hot water”换算为交付能量，并防止供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_carriers`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Purchased hot water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Natural gas（`hygiene_natural_gas`）

本卡将“Natural gas”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Natural gas
- 流属性/单位：Energy / MJ
- 数量规则：用经校准的载体计量记录及同期温度、压力、密度或热值，将“Natural gas”换算为交付能量，并防止供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_carriers`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Natural gas”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Diesel fuel（`hygiene_diesel`）

本卡将“Diesel fuel”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Diesel fuel
- 流属性/单位：Energy / MJ
- 数量规则：用经校准的载体计量记录及同期温度、压力、密度或热值，将“Diesel fuel”换算为交付能量，并防止供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_carriers`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Diesel fuel”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Liquefied petroleum gas（`hygiene_lpg`）

本卡将“Liquefied petroleum gas”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Liquefied petroleum gas
- 流属性/单位：Energy / MJ
- 数量规则：用经校准的载体计量记录及同期温度、压力、密度或热值，将“Liquefied petroleum gas”换算为交付能量，并防止供热路线重复计算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_heat_carriers`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Liquefied petroleum gas”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Sodium hydroxide（`hygiene_sodium_hydroxide`）

本卡将“Sodium hydroxide”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Sodium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Sodium hydroxide”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Sodium hydroxide”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Nitric acid（`hygiene_nitric_acid`）

本卡将“Nitric acid”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Nitric acid
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Nitric acid”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nitric acid”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Peracetic acid（`hygiene_peracetic_acid`）

本卡将“Peracetic acid”作为“卫生清洗与场内产热”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Peracetic acid
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Peracetic acid”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Peracetic acid”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 输出废物流：Routine meat-processing sanitation wastewater（`hygiene_routine_wastewater`）

本卡将“Routine meat-processing sanitation wastewater”作为“卫生清洗与场内产热”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Routine meat-processing sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Routine meat-processing sanitation wastewater”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hygiene_wastewater`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：当场址发生“Routine meat-processing sanitation wastewater”交换时必须记录。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：High-organic-load meat-processing sanitation wastewater（`hygiene_high_load_wastewater`）

本卡将“High-organic-load meat-processing sanitation wastewater”作为“卫生清洗与场内产热”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load meat-processing sanitation wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load meat-processing sanitation wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_hygiene_wastewater`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load meat-processing sanitation wastewater”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Carbon dioxide, fossil, to air（`combustion_co2_fossil_to_air`）

本卡将“Carbon dioxide, fossil, to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Carbon dioxide, fossil, to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Carbon dioxide, fossil, to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Carbon dioxide, fossil, to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Nitrogen monoxide to air（`combustion_nitrogen_monoxide_to_air`）

本卡将“Nitrogen monoxide to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Nitrogen monoxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Nitrogen monoxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nitrogen monoxide to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Nitrogen dioxide to air（`combustion_nitrogen_dioxide_to_air`）

本卡将“Nitrogen dioxide to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Nitrogen dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Nitrogen dioxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Nitrogen dioxide to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Sulfur dioxide to air（`combustion_sulfur_dioxide_to_air`）

本卡将“Sulfur dioxide to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Sulfur dioxide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Sulfur dioxide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Sulfur dioxide to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Particulate matter below 2.5 micrometres to air（`combustion_pm25_to_air`）

本卡将“Particulate matter below 2.5 micrometres to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Particulate matter below 2.5 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Particulate matter below 2.5 micrometres to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Particulate matter below 2.5 micrometres to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Particulate matter from 2.5 to 10 micrometres to air（`combustion_pm_coarse_to_air`）

本卡将“Particulate matter from 2.5 to 10 micrometres to air”作为“卫生清洗与场内产热”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Particulate matter from 2.5 to 10 micrometres to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Particulate matter from 2.5 to 10 micrometres to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Particulate matter from 2.5 to 10 micrometres to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

### 过程：条件性场内废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 输入产品流：Electricity, grid supply（`wwtp_electricity`）

本卡将“Electricity, grid supply”作为“条件性场内废水处理”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Electricity, grid supply
- 流属性/单位：Energy / kWh
- 数量规则：记录“Electricity, grid supply”对应阶段的分表；共享电量只按有记录的设备活动、停留或占用驱动因素分配。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Electricity, grid supply”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Process water（`wwtp_process_water`）

本卡将“Process water”作为“条件性场内废水处理”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Process water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Calcium hydroxide（`wwtp_calcium_hydroxide`）

本卡将“Calcium hydroxide”作为“条件性场内废水处理”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Calcium hydroxide
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Calcium hydroxide”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Calcium hydroxide”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Aluminium sulfate（`wwtp_aluminium_sulfate`）

本卡将“Aluminium sulfate”作为“条件性场内废水处理”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Aluminium sulfate”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Aluminium sulfate”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入产品流：Ferric chloride（`wwtp_ferric_chloride`）

本卡将“Ferric chloride”作为“条件性场内废水处理”的一项独立输入产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Ferric chloride
- 流属性/单位：Mass / kg
- 数量规则：依据化学品库存、领用和投加记录，分别记录“Ferric chloride”的实际质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Ferric chloride”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输入废物流：Routine CPC 21170 processing wastewater（`wwtp_routine_wastewater_input`）

本卡将“Routine CPC 21170 processing wastewater”作为“条件性场内废水处理”的一项独立输入废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Routine CPC 21170 processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“Routine CPC 21170 processing wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Routine CPC 21170 processing wastewater”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输入废物流：High-organic-load CPC 21170 processing wastewater（`wwtp_high_load_wastewater_input`）

本卡将“High-organic-load CPC 21170 processing wastewater”作为“条件性场内废水处理”的一项独立输入废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：High-organic-load CPC 21170 processing wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计或匹配的供水、滞留、回收与转移记录计算“High-organic-load CPC 21170 processing wastewater”体积，并保留水量平衡。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“High-organic-load CPC 21170 processing wastewater”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

#### 输出

##### 产品流

###### 输出产品流：Reclaimed process water（`wwtp_reclaimed_water`）

本卡将“Reclaimed process water”作为“条件性场内废水处理”的一项独立输出产品流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Reclaimed process water
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Reclaimed process water”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Reclaimed process water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 废物流

###### 输出废物流：Treated CPC 21170 processing wastewater to sewer（`wwtp_treated_wastewater_to_sewer`）

本卡将“Treated CPC 21170 processing wastewater to sewer”作为“条件性场内废水处理”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：Treated CPC 21170 processing wastewater to sewer
- 流属性/单位：Volume / m3
- 数量规则：使用专用流量计分别记录“Treated CPC 21170 processing wastewater to sewer”体积，并保留批次、时间及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Treated CPC 21170 processing wastewater to sewer”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：CPC 21170 wastewater screening solids（`wwtp_screening_solids`）

本卡将“CPC 21170 wastewater screening solids”作为“条件性场内废水处理”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：CPC 21170 wastewater screening solids
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“CPC 21170 wastewater screening solids”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“CPC 21170 wastewater screening solids”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：CPC 21170 wastewater grease skim（`wwtp_grease_skim`）

本卡将“CPC 21170 wastewater grease skim”作为“条件性场内废水处理”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：CPC 21170 wastewater grease skim
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“CPC 21170 wastewater grease skim”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“CPC 21170 wastewater grease skim”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：CPC 21170 biological wastewater sludge（`wwtp_biological_sludge`）

本卡将“CPC 21170 biological wastewater sludge”作为“条件性场内废水处理”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：CPC 21170 biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“CPC 21170 biological wastewater sludge”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“CPC 21170 biological wastewater sludge”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出废物流：CPC 21170 chemical precipitation sludge（`wwtp_chemical_sludge`）

本卡将“CPC 21170 chemical precipitation sludge”作为“条件性场内废水处理”的一项独立输出废物流交换；不得与另一物种、组织、状态、物质或载体合并。

- 选定流：CPC 21170 chemical precipitation sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准的秤、容器皮重或专用台账，分别记录“CPC 21170 chemical precipitation sludge”的质量、身份及去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录秤或仪表分辨率、校准、缺失记录、身份错误及批次归属不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“CPC 21170 chemical precipitation sludge”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

##### 基本流

###### 输出基本流：Chemical oxygen demand to surface water（`wwtp_cod_to_water`）

本卡将“Chemical oxygen demand to surface water”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Chemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：以同期匹配的最终出水体积乘“Chemical oxygen demand to surface water”的实测浓度计算排放质量，并保留单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Chemical oxygen demand to surface water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Five-day biochemical oxygen demand to surface water（`wwtp_bod5_to_water`）

本卡将“Five-day biochemical oxygen demand to surface water”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Five-day biochemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：以同期匹配的最终出水体积乘“Five-day biochemical oxygen demand to surface water”的实测浓度计算排放质量，并保留单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Five-day biochemical oxygen demand to surface water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total nitrogen to surface water（`wwtp_total_nitrogen_to_water`）

本卡将“Total nitrogen to surface water”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total nitrogen to surface water
- 流属性/单位：Mass / kg
- 数量规则：以同期匹配的最终出水体积乘“Total nitrogen to surface water”的实测浓度计算排放质量，并保留单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Total nitrogen to surface water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total phosphorus to surface water（`wwtp_total_phosphorus_to_water`）

本卡将“Total phosphorus to surface water”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total phosphorus to surface water
- 流属性/单位：Mass / kg
- 数量规则：以同期匹配的最终出水体积乘“Total phosphorus to surface water”的实测浓度计算排放质量，并保留单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Total phosphorus to surface water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Total suspended solids to surface water（`wwtp_tss_to_water`）

本卡将“Total suspended solids to surface water”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Total suspended solids to surface water
- 流属性/单位：Mass / kg
- 数量规则：以同期匹配的最终出水体积乘“Total suspended solids to surface water”的实测浓度计算排放质量，并保留单位换算。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Total suspended solids to surface water”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Ammonia to air（`wwtp_ammonia_to_air`）

本卡将“Ammonia to air”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Ammonia to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Ammonia to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Ammonia to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

###### 输出基本流：Hydrogen sulfide to air（`wwtp_hydrogen_sulfide_to_air`）

本卡将“Hydrogen sulfide to air”作为“条件性场内废水处理”的一项独立输出基本流交换；不得与另一物种、组织、状态、物质或载体合并。本卡只对应一个具名物质或监测参数及一个环境介质。

- 选定流：Hydrogen sulfide to air
- 流属性/单位：Mass / kg
- 数量规则：使用同期实测排气流量与物质浓度，或对实测活动量应用经核实的设备特定因子，计算“Hydrogen sulfide to air”质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格的单一 CPC 21170 物种—肉/器官—状态变体
- 基准类型：参考流（`reference_flow`）
- 证据类型：从采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air`
- UUID 状态：未解决；有意不填写 Tiangong flow UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子来源、身份错误及分配不确定性。
- 适用性：条件适用；仅当数据集申报的具体路线实际发生“Hydrogen sulfide to air”交换且有记录时纳入。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出屠宰与分离 | 首先通过过程细分以及对每项具名组织、共产品、公用工程与废物的直接计量避免分配。 | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | 具有额外功能的共产品 | 若细分不能解析功能，应在分摊负荷前研究透明的系统扩展。 | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | 剩余多输出过程 | 仍需分配时，采用反映投入使用和产出形成因果关系且有记录支持的物理关系。 | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | 仍未解决的关系 | 仅当细分、系统扩展和相关物理关系均不可辩护时使用经济分配，并披露敏感性。 | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | 每项共产品与废物 | 分配前依据质量、法律状态与去向证据确定产品或废物身份；同一数量不得同时属于两者。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `allocation_reference_variant` | 参考物种—组织—状态变体 | 参考产品只赋给一个申报变体；其他可食输出保持为分别计量的共产品。 | `eu-2021-2279-environmental-footprint` |
| `allocation_waste` | 废物处理 | 除非所选 LCA 方法及有记录的接收功能要求，否则不得为废物去向给予抵扣。 | `eu-2021-2279-environmental-footprint` |
| `allocation_capture` | 上游生产或合法捕获 | 养殖、捕获或狩猎负荷保留在上游数据集中，并披露所选上游方法。 | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | 全部过程连接 | 不得重复计算物种—组织转移、替代供热路线、制冷剂补充与损失，或废水输出与处理输入。 | `eu-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_inputs` | `species_receiving` | 按物种的活体动物、电力与水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; species_common_name; scientific_name; origin_status; scale_id; gross_mass; tare_mass; meter_id; opening_reading; closing_reading | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 按物种接收与验收范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_receiving_outputs` | `species_receiving` | 验收合格物种转移、排泄物与按物种接收清洗废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; species_common_name; scientific_name; accepted_mass; waste_mass; drain_volume; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3 | 每批 | 完整研究期 | 按物种接收与验收范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_slaughter_inputs` | `slaughter_primary_separation` | 验收动物、屠宰电力与水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; species_common_name; scientific_name; source_process; mass; meter_id; opening_reading; closing_reading | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 屠宰与按物种初级分离范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_slaughter_outputs` | `slaughter_primary_separation` | 物种—组织中间流、具名共产品、残余物与废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; legal_status; mass; volume; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3 | 每批 | 完整研究期 | 屠宰与按物种初级分离范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_slaughter_air` | `slaughter_primary_separation` | 氨与硫化氢直接空气排放 | 经校准的现场记录、台账与检测记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 监测活动及重大变化时 | 完整研究期 | 屠宰与按物种初级分离范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_preparation_inputs` | `meat_offal_preparation` | 未修整物种—组织输入、电力与水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; mass; meter_id; opening_reading; closing_reading | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; kWh; m3 | 每批 | 完整研究期 | 按物种和组织制备肉及内脏范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_preparation_outputs` | `meat_offal_preparation` | 鲜物种—组织输出、修整废物与清洗废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; accepted_mass; rejected_mass; volume; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3 | 每批 | 完整研究期 | 按物种和组织制备肉及内脏范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_conditioning_products` | `state_conditioning` | 鲜输入及冷藏或冷冻输出 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; market_state; mass; temperature; residence_time | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 每批 | 完整研究期 | 按状态冷却与冻结范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_conditioning_utilities` | `state_conditioning` | 冷却电力、冻结电力、水、除霜废水与冷凝水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; equipment_id; meter_id; opening_reading; closing_reading; residence_time; occupancy; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kWh; m3 | 每批 | 完整研究期 | 按状态冷却与冻结范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_refrigerant_inventory` | `state_conditioning` | R717、R744 与 R290 补充和排放 | 经校准的现场记录、台账与检测记录 | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 每次维修及年度结算 | 完整研究期 | 按状态冷却与冻结范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_variant_selection` | `variant_packaging_release` | 完整指定的物种—组织—状态输入 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; tissue_kind; market_state; net_mass | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 每批 | 完整研究期 | 变体包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_bom` | `variant_packaging_release` | 每个具名包装组件 | 经校准的现场记录、台账与检测记录 | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 每批 | 完整研究期 | 变体包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_release_records` | `variant_packaging_release` | 包装电力、状态特定储存电力与参考输出 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; species_common_name; scientific_name; tissue_identity; market_state; output_net_mass; meter_reading; storage_duration; release_status | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; kWh | 每批 | 完整研究期 | 变体包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_packaging_waste` | `variant_packaging_release` | 状态特定不合格品及每项包装废物 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; species_common_name; scientific_name; tissue_identity; market_state; gross_mass; tare_mass; count; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 每批 | 完整研究期 | 变体包装、储存与放行范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_hygiene_inputs` | `hygiene_heat_generation` | 电力、水、氢氧化钠、硝酸与过氧乙酸 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; cycle_id; substance; issued_mass; concentration; meter_reading | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3; kWh | 每个卫生周期 | 完整研究期 | 卫生清洗与场内产热范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_heat_carriers` | `hygiene_heat_generation` | 外购蒸汽、外购热水、天然气、柴油与液化石油气 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | MJ | 每个卫生周期及月度结算 | 完整研究期 | 卫生清洗与场内产热范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_hygiene_wastewater` | `hygiene_heat_generation` | 常规及高有机负荷卫生废水 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | m3 | 每个卫生周期 | 完整研究期 | 卫生清洗与场内产热范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_combustion_releases` | `hygiene_heat_generation` | 每种具名直接燃烧排放 | 经校准的现场记录、台账与检测记录 | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 监测活动及报告期 | 完整研究期 | 卫生清洗与场内产热范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | 废水输入、电力、水及每种处理药剂 | 经校准的现场记录、台账与检测记录 | timestamp; lot_id; row_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3; kWh | 每日及每次批次分配 | 完整研究期 | 条件性场内废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | 回用水、下水道废水、筛渣、浮油及每种污泥 | 经校准的现场记录、台账与检测记录 | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg; m3 | 每日及每次发运 | 完整研究期 | 条件性场内废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_water_discharge` | `onsite_wastewater_treatment` | COD、BOD5、总氮、总磷与总悬浮固体排放 | 经校准的现场记录、台账与检测记录 | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 许可监测频率及重大变化时 | 完整研究期 | 条件性场内废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |
| `cp_wwtp_air` | `onsite_wastewater_treatment` | 氨与硫化氢直接空气排放 | 经校准的现场记录、台账与检测记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 将每项原子交换与批次、身份、仪表、库存、检测或去向记录关联并独立对账。 | kg | 监测活动及重大变化时 | 完整研究期 | 条件性场内废水处理范围内的实际设备、作业区或排放点 | 每个 row_id 仅汇总一次；共享量只按有文件记录的驱动因素分配，不得跨物种、组织、状态或交换合并 | 校准证明；身份与原始记录；去向或质量证据；对账与计算复核 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 用放行的净合格参考产品质量除每项归属于批次的交换。 | 批次归属交换；放行净质量 | 每 1 kg 参考产品的交换量 | `eu-2021-2279-environmental-footprint` |
| `calc_variant_gate` | 全部物种—组织—状态行 | 归一化前将清单筛定为一个申报科学物种、一个骨骼肌肉或器官身份及一个市场状态。 | 物种身份；组织身份；市场状态；行适用性 | 一个启用的参考变体 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | 每个阶段电力行 | 采用阶段直表，或以可审计的设备活动、停留或占用份额乘共享电表总量。 | 电表总量；活动量或占用量；批次质量 | 每参考流的阶段电力 | `eu-2021-2279-environmental-footprint` |
| `calc_species_mass_balance` | 每个物种批次 | 将活体质量与所有分别计量的可食组织、共产品、残余物、废水相关固体和库存变化对账。 | 物种特定输入与输出质量 | 物种特定过程质量平衡 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_tissue_mass_balance` | 每个肉或器官路线 | 将未修整组织与合格产品和组织特定修整废物对账，不得强制平衡。 | 未修整质量；合格质量；不合格质量；库存变化 | 组织特定质量平衡 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | 每种制冷剂 | 每个回路以期初库存加购入量，与期末库存、回收量和有记录的转移量对账。 | 期初库存；购入量；期末库存；回收量；转移量 | 物种特定制冷剂损失 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | 每个包装组件 | 以领用质量减退回质量，或数量乘经核实单件质量计算；只有托盘可按有记录的重复使用周期处理。 | 领用质量；退回质量；数量；单件质量；重复使用台账 | 每参考流的组件质量 | `eu-2021-2279-environmental-footprint` |
| `calc_heat_energy` | 每项热载体与场内燃料 | 使用同期温度、压力、密度或热值将实测载体数量换算。 | 实测载体数量；载体物性 | 每参考流的 MJ | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | 每种直接燃烧排放物质 | 使用直接实测质量流，或对实测燃料应用经核实的设备特定因子。 | 实测燃料；浓度和流量或经核实因子 | 每参考流排入空气的物质质量 | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | 每项废水流 | 使用专用流量计，或仅从匹配供水中扣除有记录的滞留、回收或蒸发水。 | 流量计或匹配水量平衡记录 | 每参考流的 m3 废水 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | 每个直接水排放参数 | 以实测最终出水体积乘同期匹配的实测浓度并换算单位。 | 出水体积；参数浓度；单位换算 | 每参考流排入地表水的参数质量 | `ec-jrc-2024-sa-bref-jrc135916` |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| `dq_variant_identity` | 参考产品 | 使用一个科学物种身份、一个骨骼肌肉或具名器官身份以及一个市场状态。 | 签署的变体声明；物种记录；放行记录 |
| `dq_scope_exclusion` | 物种范围 | 证明所选动物为范围内爬行动物或非家禽鸟类，且不属于 CPC 2112、CPC 2114 或 CPC 21160 家禽。 | 分类审查；物种身份；来源记录 |
| `dq_product_specific` | 参考产品与包装 | 使用变体特定净质量、BoM、储存和放行记录。 | 批准的规格；BoM；签署的放行记录 |
| `dq_site_specific` | 前景运行 | 对报告设施运行的过程使用公司特定活动数据与直接排放。 | 仪表；秤；台账；实验室；维修记录 |
| `dq_temporal` | 全部前景行 | 覆盖代表性生产期，并披露停机、维护、季节性运行与缺口。 | 覆盖说明；缺口登记；运行日历 |
| `dq_technology` | 温度调节、供热与废水处理 | 识别实际设备、制冷剂物种、供热路线和处理配置。 | 设备登记；管线图；维修记录；过程流程图 |
| `dq_species_mass_balance` | 屠宰与分离 | 对一个申报物种完成对账，不得混入另一物种记录。 | 签署的物种特定质量平衡 |
| `dq_tissue_mass_balance` | 制备与放行 | 对每项具名肉或器官路线完成对账并调查残差。 | 签署的组织特定质量平衡 |
| `dq_meter_reconciliation` | 公用工程与废水 | 将分表与全厂仪表对账，并记录每个分配驱动因素。 | 仪表层级；校准；分配工作表 |
| `dq_destination` | 共产品与废物 | 保留去向和法律状态证据，确保一个物理流不会同时是产品和废物。 | 合同；发运单；接收记录 |
| `dq_uuid` | 全部清单身份 | 只有经精确语义混合检索及公开 state=100 直接读取双重核验后才使用 Tiangong UUID；否则保持为空。 | 双重核验证据或 manifest 未解决条目 |
| `dq_uncertainty` | 全部清单行 | 记录分辨率、校准、缺失数据处理、因子来源与分配不确定性，不得虚构范围。 | 不确定性登记；计算复核 |
| `dq_completeness` | 完整清单 | 证明物种特定产品、公用工程、化学品、包装、废物及直接空气和水体交换均已覆盖。 | 过程流程图；行清单；对账 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 要求 Product flow e67d4710-2094-4972-85a2-9e593546ae82、Mass 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 及 kg。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考输出 | 要求恰好 1 kg 净合格产品并排除包装质量。 | `un-cpc-3-0-structure-2025` |
| `validate_species_lock` | 参考限定信息 | 要求恰好一个通用物种名和科学物种名。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_tissue_lock` | 参考限定信息 | 要求恰好一个骨骼肌肉或明确具名的可食器官身份。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_state_lock` | 参考限定信息 | 要求鲜、冷藏或冷冻中的恰好一种。 | `un-cpc-3-0-structure-2025` |
| `validate_variant_rows` | 清单适用性 | 放行过程必须恰好有一个物种—组织—状态输入，且不得启用任何冲突变体行。 | `eu-2021-2279-environmental-footprint` |
| `validate_scope` | 物种分类 | 要求范围内爬行动物或非家禽鸟类，并拒绝 CPC 2112、CPC 2114 和 CPC 21160 家禽。 | `un-cpc-3-0-structure-2025` |
| `validate_unlisted_variant` | 尚未列出的范围内物种或器官 | 使用前新增物种和组织特定行；拒绝 reptile、game bird、declared species、other organ 等选择器标签。 | `un-cpc-3-0-structure-2025`; `eu-2021-2279-environmental-footprint` |
| `validate_boundary` | 过程覆盖 | 要求全部必需过程，并记录状态调节与场内废水处理的纳入决定。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | 清单行 | 每个 row_id 仅允许一个物理或化学交换，并要求说明、数量规则、协议、不确定性、适用性和来源均非空。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | 选定流 | 拒绝集合标签与选择指令；物种产品、公用工程、燃料、制冷剂、化学品、包装、废物及排放均分别记录。 | `eu-2021-2279-environmental-footprint` |
| `validate_official_name_exception` | 参考产品选定流 | 仅允许官方 CPC 21170 参考流名称含集合词；所有非参考 Selected flow 必须不含选择器。 | `un-cpc-3-0-structure-2025` |
| `validate_uuid` | 清单 UUID | 非参考 UUID 只有在精确语义混合检索及公开 state=100 直接读取双重核验后方可接受；否则必须为空。 | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | 未解决 UUID | 每个 UUID 为空的 row_id 必须在 manifest review_metadata 中恰好出现一次，并含候选身份和拒绝原因。 | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | 清单数量 | 仅允许由采集记录支持的 foreground_record 或 calculated_value；拒绝无依据数量及默认范围。 | `eu-2021-2279-environmental-footprint` |
| `validate_species_mass_balance` | 物理输出 | 将一个物种的活体输入与全部具名组织、共产品、残余物及库存变化对账，不得强制平衡。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_tissue_mass_balance` | 肉与器官路线 | 对每个选定组织的输入、合格输出、修整废物与不合格品对账，不得混合组织。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_heat_routes` | 热力输入 | 防止对同一热量重复记录外购蒸汽、外购热水及场内燃料。 | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | 冷系统 | 按物种和回路识别每种实际制冷剂；发生损失时必须有自己的补充和直接排放行。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_hygiene_chemicals` | 卫生清洗 | 根据库存和投加记录分别识别每种清洗与消毒物质。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | 包装 | 每个包装组件及材料特定废物必须与产品 BoM 匹配，并从参考质量中排除包装。 | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | 共产品与废物 | 要求去向和状态证据，并禁止将一个物理数量同时赋给产品与废物。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | 废水 | 保持常规与高有机负荷废水分开，并区分下水道转移、直接排放及场内处理。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | 直接空气排放 | 要求逐物质计量或计算并保留因子来源；拒绝聚合燃烧或制冷剂排放行。 | `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | 直接水排放 | 每个直接排放行均要求同期匹配的出水体积与参数浓度。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | 证据 | 仅使用列出的 UN CPC、EC JRC SA BREF 与欧盟委员会建议来源；UUID 查询不得作为数量证据。 | `un-cpc-3-0-structure-2025`; `ec-jrc-2024-sa-bref-jrc135916`; `eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | 双语记录 | 要求 en-US 与 zh-CN 中 process_id、direction、flow_type、row_id、UUID、受控 token、协议 id 和来源 id 序列完全同序。 | `eu-2021-2279-environmental-footprint` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个 CPC 21170 物种—组织—状态变体的设施特定前景数据包 |
| downstream_use | 构建并校验 Tiangong flow、process、lifecyclemodel 与 dataset 投影 |
| allowed_use | 已披露一个范围内物种、一个骨骼肌肉或可食器官身份、一个市场状态、设施边界、技术与采集期时用于产品特定建模 |
| excluded_use | 类别默认清单；多物种产品；肉与内脏组合；混合状态；CPC 2112、CPC 2114 或 CPC 21160 家禽；未识别的爬行动物或猎禽选择器 |
| required_metadata | 设施地理；时期；产量；批次；通用和科学物种名；来源；肉或器官身份；精确组织；一个市场状态；净质量方法；过程配置；温度调节技术；储存时长；供热路线；制冷剂物种；包装 BoM；去向；废水路线 |
| required_quality_disclosure | 身份证据；仪表与秤校准；时间覆盖；缺失数据；计算输入；分配决定；物种及组织质量平衡；不确定性；UUID 状态 |
| update_trigger | 分类范围、物种、组织、状态、生产来源、过程配置、温度调节或储存技术、供热路线、制冷剂、包装 BoM、去向、废水路线或证据来源变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 数据集（`dataset`） | United Nations Statistics Division, CPC Ver. 3.0 official page, https://unstats.un.org/unsd/classifications/Econ/CPC; retained raw structure `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | 精确 CPC 21170 身份；爬行动物及非家禽鸟类肉和可食内脏范围；鲜、冷藏或冷冻状态；排除家禽 CPC 2112、CPC 2114 与 CPC 21160 |
| `ec-jrc-2024-sa-bref-jrc135916` | 官方指南（`official_guidance`） | European Commission Joint Research Centre, Best Available Techniques Reference Document for the Slaughterhouses, Animal By-products and/or Edible Co-products Industries, JRC135916, 2024, DOI 10.2760/18199, https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 接收、屠宰、初级分离、组织制备、冷却冻结、卫生清洗、公用工程、制冷剂、残余物、废水、污泥及直接空气和水体排放 |
| `eu-2021-2279-environmental-footprint` | 官方指南（`official_guidance`） | Commission Recommendation (EU) 2021/2279, consolidated 30 December 2021, https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定身份与 BoM；公司特定制造数据；完整 LCI；分配层级；完整性、透明度、数据质量与核查 |
