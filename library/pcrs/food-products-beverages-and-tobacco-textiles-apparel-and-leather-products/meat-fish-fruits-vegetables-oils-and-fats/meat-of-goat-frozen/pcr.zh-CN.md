---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-frozen
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 山羊肉，冷冻

## 1. 范围与适用性

本 PCR 适用于精确归入 CPC 21136 的冷冻山羊肉前景数据包。前景范围从合格活山羊在场址接收开始，覆盖屠宰、放血、剥皮、去内脏、标准胴体整理与分割、预冷、冻结、包装、冷冻暂存、质量放行、清洗，以及条件性场内废水处理。

参考产品为工厂门净合格冷冻山羊肉。鲜或冷藏山羊肉与可食内脏不属于参考产品。山羊养殖和入厂运输属于上游；工厂门后的配送、零售、使用与寿命终止属于下游。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.meat-of-goat-frozen` |
| classification_refs | CPC 3.0：21136，精确 |
| covered_products | 在屠宰或肉类加工场址工厂门以合格产品放行、市场状态为冷冻的山羊肉 |
| excluded_products | 鲜或冷藏山羊肉；山羊可食内脏；非山羊物种的肉；零售餐食或预制餐产品 |
| representative_product | 来自屠宰山羊的净冷冻山羊肉切块，不含包装质量 |
| production_route | 接收；屠宰与胴体整理；胴体分割；预冷与冻结；冷系统运行；包装与放行；卫生清洗；条件性场内废水处理 |
| market_state | 冷冻 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 精确归入 CPC 21136 的净合格冷冻山羊肉 |
| How much | 1 kg |
| How well | 已冻结并按适用产品规格放行；不含可食内脏与包装质量 |
| How long or cycle | 一个生产批次直至工厂门质量放行 |
| reference_flow_link | state 100、version 01.01.000 的精确公开天工 Product 流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 净产品 |
| 参考产品流 | 冷冻山羊肉 `cf1026b3-d517-4896-b54b-0ba4e919a40b` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | CPC 21136；山羊物种；冷冻市场状态；产品净重；生产场址；生产期；冻结技术；冷冻储存时长；包装组成另行报告 |

构建前景数据包时，`必需限定信息` 中的内容必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺失必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `mu_reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 用经校准秤确定放行的净合格产品质量。 |
| `mu_packaging_excluded` | 参考产品与包装 | Mass | kg | 参考产品质量不含包装，并逐项记录每个包装组件。 |
| `mu_physical_mass` | 活山羊、胴体、肉、共产品和固体废物 | Mass | kg | 按情况使用实测湿重或净重；含水率或干物质基准影响解释时必须声明。 |
| `mu_electricity` | 电力 | Energy | kWh | 采用经校准电表读数并保留计量边界和分摊驱动。 |
| `mu_thermal_energy` | 外购蒸汽、外购热水和每种场内燃料 | Energy | MJ | 用报告期匹配的物性记录换算实测载体数量，并防止热量重复核算。 |
| `mu_water_volume` | 水和废水 | Volume | m3 | 采用计量体积，且常规、高有机负荷、除霜、冷凝、排入下水道、回用和直接排放水流保持分开。 |
| `mu_direct_release_mass` | 向空气或水的直接排放 | Mass | kg | 由匹配的实测活动量与浓度或经核实因子计算单一物质或监测参数的质量。 |
| `mu_refrigerant_mass` | 制冷剂补充与损失 | Mass | kg | 每种制冷剂和每个回路独立核对。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 入厂运输结束后，合格活山羊跨越场址接收边界 |
| starting_condition_role | 前景起始条件 |
| product_classification_scope | 精确 CPC 21136 冷冻山羊肉 |
| recursive_input_rule | 声明任何 CPC 21136 中间投入来源并防止同一生产递归计数 |
| upstream_dataset_requirement | 山羊养殖和入厂运输使用独立上游数据集，并披露地理与时期 |
| disclosure | 声明场址、批次时期、屠宰与分割配置、冻结技术、储存时长、供热路线、制冷剂物种、包装 BoM、废水去向和场内处理决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_start` | 前景系统 | 入厂运输服务结束后，以进入场址接收环节的合格活山羊为起点。 | `un-cpc-3-0-structure-2025`；`ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_upstream` | 上游活动 | 山羊养殖和入厂运输使用独立上游数据集建模，不纳入本前景清单。 | `eu-2021-2279-environmental-footprint` |
| `boundary_core` | 前景过程 | 纳入接收、屠宰与胴体整理、胴体分割、预冷与冻结、冷系统运行、包装、冷冻暂存、放行和清洗。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_end` | 前景系统 | 以工厂门放行的 1 kg 净合格 CPC 21136 冷冻山羊肉为终点，包装质量不计入。 | `un-cpc-3-0-structure-2025`；`ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_downstream` | 下游活动 | 本前景清单不含工厂门后的配送、零售、使用和寿命终止。 | `eu-2021-2279-environmental-footprint` |
| `boundary_wwtp` | 场内废水处理 | 仅在报告场址边界内运行处理设施时纳入场内处理；否则记录每股废水向接收系统的转移。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `boundary_cpc` | 产品身份 | 参考产品不含鲜或冷藏山羊肉与山羊可食内脏；任何可食内脏输出均单独记录。 | `un-cpc-3-0-structure-2025` |
| `boundary_completeness` | 全部前景交换 | 对已知实际发生的交换不设类别截断；应原子记录或披露经核实的缺失。 | `eu-2021-2279-environmental-footprint` |
| `boundary_recursive` | 同类别中间投入 | 若引入 CPC 21136 冷冻山羊肉中间投入，声明其来源并防止同一生产被递归计数。 | `eu-2021-2279-environmental-footprint` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `live_goat_receiving` | 活山羊接收与验收 | `required` | 每个工厂门生产批次 | 入厂运输结束后开始前景采集 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `slaughter_dressing` | 屠宰、放血、剥皮与去内脏 | `required` | 每个合格生产批次 | 把合格活山羊转化为净膛胴体及分别识别的输出 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `carcass_cutting` | 胴体整理与分割 | `required` | 每个生产批次 | 生产供冻结的山羊肉切块并分离分割输出 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `chilling_freezing` | 预冷、冻结与冷系统运行 | `required` | 每个生产批次 | 冻结合格山羊肉并记录直至冷冻暂存的制冷回路 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `packaging_release` | 包装、冷冻暂存与工厂门放行 | `required` | 每个放行生产批次 | 包装并放行 CPC 21136 参考产品 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `cleaning_disinfection` | 清洗、消毒与场内热力公用工程 | `required` | 每个生产批次及计划卫生周期 | 记录卫生资源、清洗废水和场内燃烧直接排放 | 每 1 kg 工厂门净合格冷冻山羊肉 |
| `onsite_wastewater_treatment` | 场内屠宰废水处理 | `conditional` | 仅当场址在前景边界内运行废水处理时 | 处理分别识别的废水并记录处理输出 | 每 1 kg 工厂门净合格冷冻山羊肉 |

### 过程：活山羊接收与验收（`live_goat_receiving`）

#### 输入

##### 产品流

###### 入场活山羊（`receiving_live_goat`）

入场活山羊作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Live goat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 接收阶段电力（`receiving_electricity`）

接收阶段电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 接收阶段用水（`receiving_water`）

接收阶段用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格活山羊转出（`receiving_accepted_live_goat`）

合格活山羊转出作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Accepted live goat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 待栏山羊粪便（`receiving_goat_manure`）

待栏山羊粪便作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat manure from lairage
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 待栏冲洗废水（`receiving_lairage_wastewater`）

待栏冲洗废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Lairage wash wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_receiving_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流



### 过程：屠宰、放血、剥皮与去内脏（`slaughter_dressing`）

#### 输入

##### 产品流

###### 合格活山羊投入（`slaughter_live_goat_input`）

合格活山羊投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Accepted live goat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 屠宰线电力（`slaughter_electricity`）

屠宰线电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 屠宰工艺用水（`slaughter_water`）

屠宰工艺用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净膛胴体转出（`slaughter_dressed_carcass`）

净膛胴体转出作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Dressed goat carcass
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 回收山羊血（`slaughter_recovered_blood`）

回收山羊血作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Recovered goat blood
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 回收山羊皮（`slaughter_recovered_hide`）

回收山羊皮作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat hide for recovery
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 回收屠宰脂肪（`slaughter_recovered_fat`）

回收屠宰脂肪作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Recovered goat slaughter fat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 食用山羊肝（`slaughter_edible_liver`）

食用山羊肝作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat liver for human consumption
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 食用山羊心（`slaughter_edible_heart`）

食用山羊心作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat heart for human consumption
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 食用山羊肾（`slaughter_edible_kidneys`）

食用山羊肾作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat kidneys for human consumption
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 废弃山羊血（`slaughter_waste_blood`）

废弃山羊血作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Waste goat blood
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 不合格山羊皮（`slaughter_rejected_hide`）

不合格山羊皮作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Rejected goat hide
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 废弃屠宰脂肪（`slaughter_waste_fat`）

废弃屠宰脂肪作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Waste goat slaughter fat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 判废山羊肝（`slaughter_condemned_liver`）

判废山羊肝作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Condemned goat liver
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 判废山羊心（`slaughter_condemned_heart`）

判废山羊心作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Condemned goat heart
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 判废山羊肾（`slaughter_condemned_kidneys`）

判废山羊肾作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Condemned goat kidneys
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 山羊胃内容物（`slaughter_stomach_contents`）

山羊胃内容物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat stomach contents
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 山羊肠内容物（`slaughter_intestinal_contents`）

山羊肠内容物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat intestinal contents
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 高有机负荷屠宰废水（`slaughter_high_load_wastewater`）

高有机负荷屠宰废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：High-organic-load slaughter wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流

###### 屠宰氨排放（`slaughter_ammonia_to_air`）

屠宰氨排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 屠宰硫化氢排放（`slaughter_hydrogen_sulfide_to_air`）

屠宰硫化氢排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：硫化氢，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_slaughter_air_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`



### 过程：胴体整理与分割（`carcass_cutting`）

#### 输入

##### 产品流

###### 净膛胴体投入（`cutting_dressed_carcass_input`）

净膛胴体投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Dressed goat carcass
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 分割阶段电力（`cutting_electricity`）

分割阶段电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 分割工艺用水（`cutting_water`）

分割工艺用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 冻结前山羊肉（`cutting_goat_meat_for_freezing`）

冻结前山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat meat cuts before freezing
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 食品级山羊骨（`cutting_food_grade_bones`）

食品级山羊骨作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Food-grade goat bones
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 回收修整脂肪（`cutting_recovered_fat`）

回收修整脂肪作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Recovered goat trimming fat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 山羊骨废物（`cutting_bone_waste`）

山羊骨废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat bone waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 修整脂肪废物（`cutting_fat_waste`）

修整脂肪废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat trimming fat waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 山羊肉修整废物（`cutting_meat_trim_waste`）

山羊肉修整废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat meat trimming waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 高有机负荷分割废水（`cutting_high_load_wastewater`）

高有机负荷分割废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：High-organic-load cutting wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流



### 过程：预冷、冻结与冷系统运行（`chilling_freezing`）

#### 输入

##### 产品流

###### 进入冷系统的山羊肉（`freezing_goat_meat_input`）

进入冷系统的山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Goat meat cuts before freezing
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 冻结阶段电力（`freezing_electricity`）

冻结阶段电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 冷冻库电力（`frozen_storage_electricity`）

冷冻库电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 冷系统工艺用水（`freezing_process_water`）

冷系统工艺用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### R717 制冷剂补充（`freezing_refrigerant_r717`）

R717 制冷剂补充作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Ammonia, refrigerant grade R717
- 流属性/单位：Mass / kg
- 数量规则：按制冷剂物种和回路，用期初库存、领用或购入、期末库存、回收量、转移量、维修与泄漏记录计算补充量或损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### R744 制冷剂补充（`freezing_refrigerant_r744`）

R744 制冷剂补充作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Carbon dioxide, refrigerant grade R744
- 流属性/单位：Mass / kg
- 数量规则：按制冷剂物种和回路，用期初库存、领用或购入、期末库存、回收量、转移量、维修与泄漏记录计算补充量或损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### R290 制冷剂补充（`freezing_refrigerant_r290`）

R290 制冷剂补充作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Propane, refrigerant grade R290
- 流属性/单位：Mass / kg
- 数量规则：按制冷剂物种和回路，用期初库存、领用或购入、期末库存、回收量、转移量、维修与泄漏记录计算补充量或损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前冷冻山羊肉（`freezing_frozen_goat_meat`）

包装前冷冻山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Frozen goat meat before packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 不合格冷冻山羊肉（`freezing_offspec_meat`）

不合格冷冻山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Off-specification frozen goat meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 冷冻机除霜废水（`freezing_defrost_wastewater`）

冷冻机除霜废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Freezer defrost wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 制冷冷凝废水（`freezing_condensate_wastewater`）

制冷冷凝废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Refrigeration condensate wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_freezing_records`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流

###### R717 向空气释放（`freezing_ammonia_to_air`）

R717 向空气释放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Ammonia, R717 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### R744 向空气释放（`freezing_carbon_dioxide_to_air`）

R744 向空气释放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Carbon dioxide, R744 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按制冷剂物种和回路，用期初库存、领用或购入、期末库存、回收量、转移量、维修与泄漏记录计算补充量或损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### R290 向空气释放（`freezing_propane_to_air`）

R290 向空气释放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Propane, R290 refrigerant, to air
- 流属性/单位：Mass / kg
- 数量规则：按制冷剂物种和回路，用期初库存、领用或购入、期末库存、回收量、转移量、维修与泄漏记录计算补充量或损失量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_inventory`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`



### 过程：包装、冷冻暂存与工厂门放行（`packaging_release`）

#### 输入

##### 产品流

###### 进入包装的冷冻山羊肉（`packaging_frozen_meat_input`）

进入包装的冷冻山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Frozen goat meat before packaging
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 包装阶段电力（`packaging_electricity`）

包装阶段电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_release`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### LDPE 薄膜包装（`packaging_ldpe_film`）

LDPE 薄膜包装作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：低密度聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 瓦楞纤维板箱包装（`packaging_fibreboard_box`）

瓦楞纤维板箱包装作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：瓦楞纸箱
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 木托盘包装（`packaging_wood_pallet`）

木托盘包装作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：木托盘
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 纸标签包装（`packaging_paper_label`）

纸标签包装作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：纸质标签
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 聚丙烯捆扎带（`packaging_pp_strapping`）

聚丙烯捆扎带作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：聚丙烯捆扎带
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考冷冻山羊肉（`frozen_goat_meat_reference_product`）

参考冷冻山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：冷冻山羊肉 `cf1026b3-d517-4896-b54b-0ba4e919a40b`
- 流属性/单位：Mass / kg
- 数量规则：用经校准秤记录工厂门放行的 1 kg 净合格冷冻山羊肉；产品净重不含任何包装组件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_release`
- UUID 状态：已核验公开 state=100、version 01.01.000 的 Product 流，且 CPC 21136 与 Mass 参考一致。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：必需；每个数据集仅允许一个定量参考输出。
- 来源：`un-cpc-3-0-structure-2025`；`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 不合格已包装冷冻山羊肉（`packaging_offspec_meat`）

不合格已包装冷冻山羊肉作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Off-specification packaged frozen goat meat
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### LDPE 薄膜废物（`packaging_ldpe_film_waste`）

LDPE 薄膜废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Low-density polyethylene film offcut waste
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 瓦楞纤维板包装废物（`packaging_fibreboard_waste`）

瓦楞纤维板包装废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Corrugated fibreboard packaging waste
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 损坏木托盘废物（`packaging_wood_pallet_waste`）

损坏木托盘废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Damaged wood pallet waste
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 纸标签废物（`packaging_paper_label_waste`）

纸标签废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Paper label waste
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 聚丙烯捆扎带废物（`packaging_pp_strapping_waste`）

聚丙烯捆扎带废物作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Polypropylene strapping waste
- 流属性/单位：Mass / kg
- 数量规则：用称量、废弃数量与经核实单件质量计算该单一包装废物流数量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_waste`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流



### 过程：清洗、消毒与场内热力公用工程（`cleaning_disinfection`）

#### 输入

##### 产品流

###### 清洗阶段电力（`cleaning_electricity`）

清洗阶段电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 清洗用水（`cleaning_water`）

清洗用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 外购蒸汽（`cleaning_purchased_steam`）

外购蒸汽作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：由供应方计量值和有记录的蒸汽状态计算交付蒸汽能量，并与场内燃料路线相互排斥。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 外购热水（`cleaning_purchased_hot_water`）

外购热水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：外购热水
- 流属性/单位：Energy / MJ
- 数量规则：由计量的热水质量或体积及实测进出口温度计算交付热量，并与场内燃料路线相互排斥。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 天然气投入（`cleaning_natural_gas`）

天然气投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：由校准燃料计量或罐存及采购记录，结合报告期匹配的燃料物性记录计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 柴油投入（`cleaning_diesel`）

柴油投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：柴油燃料
- 流属性/单位：Energy / MJ
- 数量规则：由校准燃料计量或罐存及采购记录，结合报告期匹配的燃料物性记录计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 液化石油气投入（`cleaning_lpg`）

液化石油气投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：液化石油气
- 流属性/单位：Energy / MJ
- 数量规则：由校准燃料计量或罐存及采购记录，结合报告期匹配的燃料物性记录计算能量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_thermal_utility`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 氢氧化钠清洗剂（`cleaning_sodium_hydroxide`）

氢氧化钠清洗剂作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：氢氧化钠
- 流属性/单位：Mass / kg
- 数量规则：按化学品库存、领用和投加记录采集该单一物质的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 次氯酸钠消毒剂（`cleaning_sodium_hypochlorite`）

次氯酸钠消毒剂作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：次氯酸钠
- 流属性/单位：Mass / kg
- 数量规则：按化学品库存、领用和投加记录采集该单一物质的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 常规清洗废水（`cleaning_routine_wastewater`）

常规清洗废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Routine slaughterhouse cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_wastewater`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：满足本过程纳入条件的每个生产批次均为必需项。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 高有机负荷清洗废水（`cleaning_high_load_wastewater`）

高有机负荷清洗废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：High-organic-load cleaning wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_cleaning_wastewater`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流

###### 化石二氧化碳排放（`cleaning_co2_fossil_to_air`）

化石二氧化碳排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 一氧化氮排放（`cleaning_nitrogen_monoxide_to_air`）

一氧化氮排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：一氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 二氧化氮排放（`cleaning_nitrogen_dioxide_to_air`）

二氧化氮排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：二氧化氮，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 二氧化硫排放（`cleaning_sulfur_dioxide_to_air`）

二氧化硫排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：二氧化硫，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 细颗粒物排放（`cleaning_pm25_to_air`）

细颗粒物排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：粒径小于2.5微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 粗颗粒物排放（`cleaning_pm_coarse_to_air`）

粗颗粒物排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：粒径2.5至10微米的颗粒物，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_combustion_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`



### 过程：场内屠宰废水处理（`onsite_wastewater_treatment`）

#### 输入

##### 产品流

###### 废水处理电力（`wwtp_electricity`）

废水处理电力作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：电网供电
- 流属性/单位：Energy / kWh
- 数量规则：使用该阶段校准分表读数；共用电表仅按有记录的设备活动、运行时间或冷库占用量计算批次份额。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 废水处理工艺用水（`wwtp_process_water`）

废水处理工艺用水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 氢氧化钙药剂（`wwtp_calcium_hydroxide`）

氢氧化钙药剂作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：氢氧化钙
- 流属性/单位：Mass / kg
- 数量规则：按化学品库存、领用和投加记录采集该单一物质的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 硫酸铝药剂（`wwtp_aluminium_sulfate`）

硫酸铝药剂作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Aluminium sulfate
- 流属性/单位：Mass / kg
- 数量规则：按化学品库存、领用和投加记录采集该单一物质的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 氯化铁药剂（`wwtp_ferric_chloride`）

氯化铁药剂作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：氯化铁
- 流属性/单位：Mass / kg
- 数量规则：按化学品库存、领用和投加记录采集该单一物质的质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 常规废水投入（`wwtp_routine_wastewater_input`）

常规废水投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Routine slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 高有机负荷废水投入（`wwtp_high_load_wastewater_input`）

高有机负荷废水投入作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：High-organic-load slaughterhouse wastewater
- 流属性/单位：Volume / m3
- 数量规则：由匹配的校准流量计或有记录的水量平衡计算体积，不用类别默认值补足。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_inputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流

#### 输出

##### 产品流

###### 回用工艺水（`wwtp_reclaimed_water`）

回用工艺水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Reclaimed process water
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 废物流

###### 处理后排入下水道的废水（`wwtp_treated_wastewater_to_sewer`）

处理后排入下水道的废水作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Treated slaughterhouse wastewater to sewer
- 流属性/单位：Volume / m3
- 数量规则：使用该单一水流或废水流的校准流量计直接记录体积。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 废水筛渣（`wwtp_screening_solids`）

废水筛渣作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Slaughterhouse wastewater screening solids
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 废水浮油（`wwtp_grease_skim`）

废水浮油作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Slaughterhouse wastewater grease skim
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 生物废水污泥（`wwtp_biological_sludge`）

生物废水污泥作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Slaughterhouse biological wastewater sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 化学沉淀污泥（`wwtp_chemical_sludge`）

化学沉淀污泥作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Slaughterhouse chemical precipitation sludge
- 流属性/单位：Mass / kg
- 数量规则：使用经校准秤、净重记录或物料台账直接记录该单一交换的质量，并保留批次与去向。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wwtp_outputs`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录仪器分辨率、校准状态、缺失记录和批次分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

##### 基本流

###### 化学需氧量入水排放（`wwtp_cod_to_water`）

化学需氧量入水排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Chemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 五日生化需氧量入水排放（`wwtp_bod5_to_water`）

五日生化需氧量入水排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Five-day biochemical oxygen demand to surface water
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 总氮入水排放（`wwtp_total_nitrogen_to_water`）

总氮入水排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Total nitrogen to surface water
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 总磷入水排放（`wwtp_total_phosphorus_to_water`）

总磷入水排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Total phosphorus to surface water
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 总悬浮物入水排放（`wwtp_tss_to_water`）

总悬浮物入水排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：Total suspended solids to surface water
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_water_discharge`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 处理过程氨排放（`wwtp_ammonia_to_air`）

处理过程氨排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：氨，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

###### 处理过程硫化氢排放（`wwtp_hydrogen_sulfide_to_air`）

处理过程硫化氢排放作为本过程的单一基本流输出跨越边界；不得把其他物质、能源、废物或排放并入本卡。

- 选定流：硫化氢，排入空气
- 流属性/单位：Mass / kg
- 数量规则：仅由已采集的秤量、库存、计数或物料平衡记录计算该单一交换质量。
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 工厂门净合格冷冻山羊肉
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_wwtp_air_releases`
- UUID 状态：未解决；有意不填写天工流 UUID。
- 不确定性：记录输入记录不确定性、计算假设、因子出处和分摊不确定性。
- 适用性：仅在场址实际发生该项交换且有相应计量、台账或去向证据时适用。
- 来源：`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出过程 | 首先通过过程细分和对屠宰、分割、冻结、包装、清洗与处理活动的直接计量避免分配。 | `eu-2021-2279-environmental-footprint` |
| `allocation_expand` | 具有附加功能的共产品 | 若细分不能解决共产品功能，应在分摊负荷前研究透明的系统扩展。 | `eu-2021-2279-environmental-footprint` |
| `allocation_physical` | 剩余多输出过程 | 仍需分配时，采用反映投入使用与输出形成因果关系的有记录物理关系。 | `eu-2021-2279-environmental-footprint` |
| `allocation_economic` | 仍无法确定的关系 | 仅在细分、系统扩展及相关物理关系均不可辩护时使用经济分配；采用同期场址记录并披露敏感性。 | `eu-2021-2279-environmental-footprint` |
| `allocation_status` | 每个血、皮、脂肪、器官、骨、水和残余物行 | 分配前依据质量、法律状态和去向证据确定产品或废物状态；同一物理数量不得同时归入两种状态。 | `ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `allocation_waste` | 废物处理 | 除非所选 LCA 方法与有记录的接收功能要求，否则不对废物去向计入收益；披露建模选择。 | `eu-2021-2279-environmental-footprint` |
| `allocation_consistency` | 全部过程连接 | 不得重复计算中间转移、外购热量及其上游燃料、制冷剂补充及无关损失，或同一废水输出与处理投入。 | `eu-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_receiving_records` | `live_goat_receiving` | 接收过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; meter_or_scale_id; opening_reading; closing_reading; gross_mass; tare_mass; destination | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; m3; kWh | 逐生产批次及报告期结算 | 完整研究期 | 活山羊接收与验收 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_slaughter_inputs` | `slaughter_dressing` | 屠宰过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; source_process; meter_id; opening_reading; closing_reading | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; kWh; m3 | 逐生产批次及报告期结算 | 完整研究期 | 屠宰、放血、剥皮与去内脏 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_slaughter_outputs` | `slaughter_dressing` | 屠宰过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; row_id; gross_mass; tare_mass; destination; legal_status; flow_reading | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; m3 | 逐生产批次及报告期结算 | 完整研究期 | 屠宰、放血、剥皮与去内脏 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_slaughter_air_releases` | `slaughter_dressing` | 屠宰过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐生产批次及报告期结算 | 完整研究期 | 屠宰、放血、剥皮与去内脏 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_cutting_records` | `carcass_cutting` | 分割过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; row_id; mass; meter_reading; destination; legal_status | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; kWh; m3 | 逐生产批次及报告期结算 | 完整研究期 | 胴体整理与分割 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_freezing_records` | `chilling_freezing` | 冷系统过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; mass; meter_id; opening_reading; closing_reading; storage_duration; drain_volume | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; kWh; m3 | 逐生产批次及报告期结算 | 完整研究期 | 预冷、冻结与冷系统运行 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_refrigerant_inventory` | `chilling_freezing` | 冷系统过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | date; circuit_id; refrigerant_code; opening_stock; receipts; closing_stock; recovered_mass; transferred_mass; leak_event | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐生产批次及报告期结算 | 完整研究期 | 预冷、冻结与冷系统运行 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_packaging_bom` | `packaging_release` | 包装放行过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | lot_id; component_identity; issued_mass; returned_mass; count; unit_mass; reuse_cycles | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐生产批次及报告期结算 | 完整研究期 | 包装、冷冻暂存与工厂门放行 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_packaging_release` | `packaging_release` | 包装放行过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; input_net_mass; output_net_mass; meter_reading; release_status; temperature | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; kWh | 逐生产批次及报告期结算 | 完整研究期 | 包装、冷冻暂存与工厂门放行 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_packaging_waste` | `packaging_release` | 包装放行过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; row_id; gross_mass; tare_mass; count; destination | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐生产批次及报告期结算 | 完整研究期 | 包装、冷冻暂存与工厂门放行 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_cleaning_inputs` | `cleaning_disinfection` | 清洗与热力过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; cycle_id; substance; concentration; issued_mass; meter_reading | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; m3; kWh | 逐卫生周期及报告期结算 | 完整研究期 | 清洗、消毒与场内热力公用工程 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_thermal_utility` | `cleaning_disinfection` | 清洗与热力过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; carrier_identity; quantity; temperature; pressure; heating_value; meter_id | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | MJ | 逐卫生周期及报告期结算 | 完整研究期 | 清洗、消毒与场内热力公用工程 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_cleaning_wastewater` | `cleaning_disinfection` | 清洗与热力过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; stream_identity; opening_reading; closing_reading; destination | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | m3 | 逐卫生周期及报告期结算 | 完整研究期 | 清洗、消毒与场内热力公用工程 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_combustion_releases` | `cleaning_disinfection` | 清洗与热力过程对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; equipment_id; fuel_identity; fuel_quantity; substance; concentration_or_factor; factor_source | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐卫生周期及报告期结算 | 完整研究期 | 清洗、消毒与场内热力公用工程 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_wwtp_inputs` | `onsite_wastewater_treatment` | 场内废水处理对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; lot_id; stream_or_substance; meter_reading; issued_mass; concentration; treated_volume | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; m3; kWh | 逐日、逐次转移及批次分摊 | 完整研究期 | 场内屠宰废水处理 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_wwtp_outputs` | `onsite_wastewater_treatment` | 场内废水处理对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; row_id; volume; wet_mass; dry_matter; quality_result; destination | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg; m3 | 逐日、逐次转移及批次分摊 | 完整研究期 | 场内屠宰废水处理 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_water_discharge` | `onsite_wastewater_treatment` | 场内废水处理对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; sample_id; effluent_volume; parameter; concentration; method; detection_limit | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐日、逐次转移及批次分摊 | 完整研究期 | 场内屠宰废水处理 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |
| `cp_wwtp_air_releases` | `onsite_wastewater_treatment` | 场内废水处理对应的逐项原子交换 | 经校准计量、场址台账、检验或去向记录 | timestamp; operating_state; exhaust_flow; substance; concentration; method; detection_limit | 按 row_id 独立采集或计算，并把时间戳、批次、设备或流量计及去向相互关联。 | kg | 逐日、逐次转移及批次分摊 | 完整研究期 | 场内屠宰废水处理 | 各 row_id 仅汇总一次；共享计量仅按有记录驱动分摊并按参考流归一化。 | 校准证书、签署台账、实验室或维修记录、去向证据及计算复核 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 用归属该批次的交换量除以放行的净合格冷冻山羊肉质量。 | 批次归属交换量；放行参考产品净重 | 每 1 kg 参考产品的交换量 | `eu-2021-2279-environmental-footprint` |
| `calc_stage_electricity` | 各阶段电力行 | 优先采用阶段分表；共用电表以可审计的设备活动或占用份额乘计量期总量。 | 电表总量；设备活动或冷库占用；批次放行质量 | 每参考流的阶段电力 | `eu-2021-2279-environmental-footprint` |
| `calc_mass_balance` | 动物、胴体、肉、共产品和废物质量行 | 核对各过程实测输入质量与分别记录的产品和废物输出；调查未解释差额，不得强制分摊。 | 实测输入质量；实测输出质量；水分或库存变化记录 | 有记录的过程质量平衡 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_refrigerant_loss` | 每种制冷剂 | 按回路和物种核对期初库存加购入量与期末库存、回收量及有记录转移量；仅在维修和泄漏证据支持时记录差额。 | 期初库存；购入；期末库存；回收；转移；维修记录 | 物种特定制冷剂损失 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_packaging_mass` | 每个包装组件 | 由领用质量减退回质量，或组件数量乘经核实单件质量计算；重复使用托盘仅按有记录的使用次数处理。 | 领用质量；退回质量；组件数量；单件质量；重复使用台账 | 每参考流的组件质量 | `eu-2021-2279-environmental-footprint` |
| `calc_thermal_energy` | 每种外购热载体和场内燃料 | 利用匹配报告期的温度、压力、密度或热值记录把实测载体数量换算成交付能量。 | 实测载体数量；载体物性记录 | 每参考流的 MJ | `eu-2021-2279-environmental-footprint` |
| `calc_combustion_release` | 每种直接燃烧物质 | 有直接实测质量流时采用实测；否则把经核实的设备特定因子用于实测燃料量，并保留因子出处。 | 实测燃料；直接浓度与流量或经核实因子 | 每参考流向空气释放的物质质量 | `eu-2021-2279-environmental-footprint` |
| `calc_wastewater_volume` | 每股废水 | 采用专用流量计；需要计算时，仅从匹配供水计量中扣除有记录的滞留、进入产品、回收或蒸发水量。 | 废水流量计或匹配水量平衡记录 | 每参考流的废水 m3 | `ec-jrc-2024-sa-bref-jrc135916` |
| `calc_water_release` | 每个直接入水排放参数 | 用最终排水实测体积乘时间匹配的实测浓度并换算单位，不得用浓度限值替代实测结果。 | 排水体积；参数浓度；单位换算 | 每参考流向地表水释放的参数质量 | `ec-jrc-2024-sa-bref-jrc135916` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_specific` | 参考产品与包装 | 对冷冻山羊肉使用产品特定净重、BoM、放行和包装记录。 | 批准的产品规格；BoM；签署的批次放行 |
| `dq_site_specific` | 前景制造 | 对报告场址运行的过程采用公司特定活动数据和直接排放。 | 计量表、秤、台账、实验室与维修记录 |
| `dq_temporal` | 全部前景行 | 覆盖有代表性的生产期，并披露停机、维护、季节性储存和缺失时段。 | 覆盖说明；缺口登记；运行日历 |
| `dq_technology` | 冻结、储存、热力公用工程和废水处理 | 识别研究期内实际使用的设备、制冷剂物种、供热路线和处理配置。 | 设备清单；管线图；维修记录；工艺流程图 |
| `dq_mass_balance` | 动物与肉转化 | 在批次或代表期层级核对活体、胴体、肉、共产品、废物和库存变化质量。 | 签署的质量平衡表及差额调查 |
| `dq_meter_reconciliation` | 公用工程与废水 | 把分表总量与场址总表核对，并记录所有分摊驱动。 | 计量层级；校准记录；分摊工作表 |
| `dq_destination` | 共产品与废物 | 保留去向、法律状态与接收证据，防止同一物理流同时作为产品和废物。 | 合同；转移单；检验或接收记录 |
| `dq_uuid` | 全部清单身份 | 仅在精确语义混合检索与公开 state=100 直读核验后使用天工 UUID；未解决时保持缺省。 | 双重核验证据或 manifest 未解决条目 |
| `dq_uncertainty` | 全部清单行 | 记录测量分辨率、校准、缺失数据处理、因子出处和分摊不确定性，不虚构类别范围。 | 不确定性登记与计算复核 |
| `dq_completeness` | 完整清单 | 证明边界内材料、能源、废物以及直接空气和水交换均已覆盖。 | 工艺流程图；row 清单；输入输出核对 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_uuid` | 参考流 | 要求 Product 流 cf1026b3-d517-4896-b54b-0ba4e919a40b、Mass 93a60a56-a3c8-11da-a746-0800200b9a66、Units of mass 93a60a57-a4c8-11da-a746-0800200c9a66 以及 kg。 | `un-cpc-3-0-structure-2025` |
| `validate_reference_amount` | 参考输出 | 要求恰好 1 kg 净合格冷冻山羊肉，且不含包装质量。 | `un-cpc-3-0-structure-2025` |
| `validate_scope` | 产品身份 | 拒绝以鲜或冷藏山羊肉、可食内脏或非山羊肉作为参考产品。 | `un-cpc-3-0-structure-2025` |
| `validate_boundary` | 过程覆盖 | 要求全部必需过程，并对场内废水处理作出有记录的纳入决定。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_atomic` | 清单行 | 每个 row_id 仅允许一个具体物理或化学交换，且说明、数量规则、协议、不确定性、适用性和来源均非空。 | `ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `validate_selector_free` | 选定流 | 拒绝在选定流中使用集合标签或指令；公用工程、燃料、制冷剂、化学品、包装组件、废物和排放必须分开。 | `eu-2021-2279-environmental-footprint` |
| `validate_uuid` | 清单 UUID | 非参考 UUID 仅在精确语义 flow-hybrid-search 与公开 state=100 直读核验后接受；否则不得填写。 | `eu-2021-2279-environmental-footprint` |
| `validate_manifest_closure` | 未解决 UUID | 要求每个 UUID 缺省 row_id 在 manifest review_metadata 中恰好出现一次，并记录候选身份与拒绝原因。 | `eu-2021-2279-environmental-footprint` |
| `validate_value_mode` | 清单数量 | 仅允许由采集记录支持的 foreground_record 或 calculated_value；拒绝无依据作者数量和类别默认范围。 | `eu-2021-2279-environmental-footprint` |
| `validate_mass_balance` | 物理输出 | 核对合格活体、胴体、肉、共产品、判废流、内容物、废水相关固体和库存变化，不得强制平衡。 | `ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `validate_heat_routes` | 热力投入 | 防止外购蒸汽、外购热水和用于生成同一热量的场内燃料重复记录。 | `eu-2021-2279-environmental-footprint` |
| `validate_refrigerants` | 冷系统 | 按物种和回路识别每种实际制冷剂；发生损失时要求独立补充行和直接释放行。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_cleaning_agents` | 清洗 | 从库存和投加记录逐一识别每种清洗或消毒物质；每增加一种实际物质就新增一张原子卡。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_packaging` | 包装 | 把每个实际包装组件及其材料特定废物与产品 BoM 对应，包装质量不计入参考产品。 | `eu-2021-2279-environmental-footprint` |
| `validate_destinations` | 共产品与废物 | 要求去向和状态证据，并禁止同一物理数量同时进入共产品行和废物行。 | `ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `validate_wastewater` | 废水 | 常规废水和高有机负荷废水保持分开；区分排入下水道、直接入地表水和场内处理。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_air_releases` | 直接空气排放 | 要求物质特定实测或计算排放及因子出处；不得报告聚合燃烧或制冷剂排放行。 | `ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `validate_water_releases` | 直接入水排放 | 直接排放时，每个排放行均要求时间匹配的排水体积和参数浓度。 | `ec-jrc-2024-sa-bref-jrc135916` |
| `validate_sources` | 证据 | 本 PCR 仅使用所列 UN CPC、EC JRC SA BREF 与委员会建议书；UUID 查询不得作为数量证据。 | `un-cpc-3-0-structure-2025`；`ec-jrc-2024-sa-bref-jrc135916`；`eu-2021-2279-environmental-footprint` |
| `validate_bilingual` | 双语记录 | 要求 en-US 与 zh-CN 的 process_id、方向、flow_type、row_id、UUID、受控词、协议 id 和来源 id 顺序完全一致。 | `eu-2021-2279-environmental-footprint` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 21136 冷冻山羊肉的场址特定前景数据包 |
| downstream_use | 构建并校验天工 flow、process、lifecyclemodel 与 dataset 投影 |
| allowed_use | 已披露场址边界、参考限定信息、实际技术和采集期的产品特定建模 |
| excluded_use | 类别默认清单；鲜或冷藏山羊肉；以可食内脏为参考产品；零售或餐食建模 |
| required_metadata | 场址地理；报告期；产量；批次定义；净重方法；屠宰与分割配置；冻结技术；冷冻储存时长；供热路线；制冷剂物种；包装 BoM；共产品和废物去向；废水路线 |
| required_quality_disclosure | 电表和秤校准；时间覆盖；缺失数据；计算输入；分配决定；质量平衡；不确定性；UUID 状态 |
| update_trigger | 产品范围、屠宰或分割配置、冻结或储存技术、能源路线、制冷剂物种、包装 BoM、共产品去向、废水路线或证据来源发生变化 |

## 11. 数据源

| source_id | type | reference | used_for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | 数据集（`dataset`） | 联合国统计司 CPC Ver. 3.0 官方页面，https://unstats.un.org/unsd/classifications/Econ/CPC；仓库保留原始结构 `classifications/systems/cpc/3.0/raw/CPC_Ver_3.0_Structure_30Jun2025.csv` | CPC 21136 精确身份和冷冻状态边界；排除 CPC 21116 鲜或冷藏山羊肉与 CPC 21156 山羊可食内脏 |
| `ec-jrc-2024-sa-bref-jrc135916` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《屠宰场、动物副产品和/或食用共产品行业最佳可行技术参考文件》，JRC135916，2024，DOI 10.2760/18199，https://publications.jrc.ec.europa.eu/repository/handle/JRC135916 | 屠宰至标准分割的边界；过程分解；冷却与冻结；清洗；公用工程；制冷剂；分别管理的动物输出；废水；污泥；直接空气与水排放 |
| `eu-2021-2279-environmental-footprint` | 官方指南（`official_guidance`） | 委员会建议（EU）2021/2279，2021 年 12 月 30 日合并文本，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BoM 与制造数据；材料、能源、产品、废物和直接排放的完整 LCI；分配层级；完整性、透明度、数据质量与核查 |
