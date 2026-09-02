---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-sports-footwear-except-skating-boots
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他运动鞋，滑冰鞋除外

## 1. 范围与适用性

本 PCR 规定其他运动鞋（滑冰鞋除外）制造的工厂门前景清单规则，覆盖产品特定的鞋面备料、现场鞋底部件成型（如适用）、绷帮与最终装配、整理以及销售包装。外购材料和部件作为产品流进入，相关上游生产通过单独连接的背景数据集表示。配送、零售、使用、维护和寿命终止不在前景边界内。

规则适用于实际生产路线和申报期。数据集不得以通用鞋类配方替代实际物料清单、能源载体、化学品、包装、排放或废物。每个交换均须原子化报告；条件交换不存在时，除非有直接证据证明为零，否则记为不适用而非零。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.other-sports-footwear-except-skating-boots |
| classification_refs | CPC 3.0：29490 — 其他运动鞋，滑冰鞋除外 |
| covered_products | CPC 29490 下的成品运动鞋，包括未归入滑雪靴、越野滑雪鞋、滑雪板靴、网球鞋、篮球鞋、体操鞋、训练鞋或相似专门类别的运动鞋 |
| excluded_products | 滑冰鞋；滑雪靴、越野滑雪鞋和滑雪板靴；归入 CPC 2942 的网球鞋、篮球鞋、体操鞋、训练鞋及类似鞋；非运动鞋；单独销售的未完成鞋类部件 |
| representative_product | 已申报产品质量、结构、尺码组合、材料组成和制造路线的可销售一双或一批其他运动鞋 |
| production_route | 外购材料和部件；鞋面裁切与缝制；条件性现场鞋底部件成型；绷帮、施胶、贴底、压合和整理；销售包装 |
| market_state | 制造完成的成品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 已申报实际产品结构和尺码组合的成品其他运动鞋，滑冰鞋除外 |
| How much | 1 kg 验收成品鞋净质量，不含销售与运输包装 |
| How well | 符合生产者可销售产品规范；制造废品与返工计入制造清单，不计入参考输出 |
| How long or cycle | 申报期内一次完整制造输出，不包含使用寿命主张 |
| reference_flow_link | 定量参考为下列 state-100 Tiangong 产品流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 其他运动鞋，滑冰鞋除外 `a372c679-9693-4957-aad9-98b6d6b5e435` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 产品型号或产品族；结构；鞋面材料体系；鞋底材料体系；鞋码范围及产量加权尺码组合；双数到质量换算；生产场址；申报期；纳入的现场过程；包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 验收成品鞋 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅称量或计算验收鞋净质量；所有过程结果均归一化至 1 kg 参考输出。 |
| `packaging_exclusion` | 销售与运输包装 | Mass | kg | 包装质量不计入参考产品质量，每种包装材料分别报告为产品输入和废物输出。 |
| `count_to_mass` | 按双、件、鞋眼、鞋带或部件计数的项目 | Mass | kg | 使用有记录的同期产品特定平均样本质量换算，保留计数和样本观测。 |
| `electricity_measurement` | 外购或自发电力 | Energy | kWh | 每种电力供应与蒸汽、热和燃料分开记录；共享电表仅可依据子计量或有因果关系的运行驱动量分配。 |
| `steam_and_hot_water` | 外购蒸汽和外购热水 | Energy | MJ | 根据实测质量流和进出口状态或供应商能源记录计算有用能，蒸汽和热水不得合并。 |
| `fuel_lhv` | 天然气和液化石油气 | Energy | MJ LHV | 使用供应商申报期低位热值换算实测燃料量，并保留原始数量和因子。 |
| `solvent_mass_balance` | 丙酮和乙酸乙酯 | Mass | kg | 每种溶剂分别按采购、库存变化、产品/废物留存、回收和排放闭合平衡。 |
| `refrigerant_mass_balance` | 现场冷却设备使用的每种制冷剂 | Mass | kg | 每种化学品分别报告，并由充注、补充、回收和期末存量计算泄漏；不得使用通用制冷剂流。 |

## 5. 系统边界

前景边界从外购原料、混炼料、部件、化学品、包装、电力、蒸汽、热水和燃料进入制造场址开始，到验收鞋及其单独计量的销售包装离开最终包装为止。边界包括内部返工、废品、直接空气排放和纳入工序产生的废物。资本品、员工通勤、配送、零售、使用和寿命终止不纳入，除非研究另行扩展并清楚标示。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址门口的外购鞋面材料、鞋底材料或部件、辅件、工艺化学品和包装 |
| starting_condition_role | 连接适当供应商或背景数据集的前景产品输入 |
| product_classification_scope | 仅 CPC 3.0 代码 29490 |
| recursive_input_rule | 若成品 CPC 29490 鞋异常地作为输入，记录该直接输入并连接供应商数据集，不在本数据集中递归复制其制造清单。 |
| upstream_dataset_requirement | 每种外购材料、部件、电力供应、燃料、蒸汽或热水输入须连接地理、时间和技术适宜的背景数据集。 |
| disclosure | 申报外购与现场部件制造、外包工序、截断决定、数据缺口及任何边界扩展。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 所有前景过程 | 从输入接收到包装产品，纳入鞋面备料、适用的现场鞋底部件成型、绷帮与装配、整理、包装、内部返工、废品、直接排放和废物。 | `af-pefcr-2025`; `krug-2021-footwear-manufacturing` |
| `boundary_actual_route` | 外购和现场工序 | 建模实际路线；仅当相应部件外购且已连接供应商数据集时，才可省略现场成型过程。 | `af-pefcr-2025` |
| `boundary_atomic_exchanges` | 所有清单交换 | 每种材料、包装部件、电力供应、热载体、燃料、制冷剂、排放和废物分别记录。 | `eu-pef-2021` |
| `boundary_no_downstream_claim` | 发布数据集 | 不得由本工厂门数据集推断配送、使用寿命、维护或寿命终止绩效。 | `epd-footwear-2024` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `upper_preparation` | 鞋面裁切与缝制 | required | 所有路线均纳入；按实际结构调整材料卡，不得聚合不同材料。 | 将鞋面材料和辅件转化为缝制鞋面。 | kg 验收缝制鞋面输出 |
| `sole_forming` | 现场鞋底部件成型 | conditional | 仅当中底、外底或其他底部件在现场成型时纳入。 | 由具名混炼料形成申报的鞋底部件。 | kg 验收鞋底部件输出 |
| `lasting_assembly` | 绷帮、粘合与整理 | required | 纳入实际绷帮、胶黏剂配制/施涂、活化、贴合、压合和整理工序。 | 将鞋面和底部件转化为验收未装盒鞋。 | kg 验收未装盒鞋输出 |
| `final_packaging` | 最终检验与包装 | required | 纳入场址实际使用的全部零售与运输包装。 | 产生参考鞋并单独核算包装。 | kg 验收参考产品净质量 |

### 过程：鞋面裁切与缝制（`upper_preparation`）

#### 输入

##### 产品流

###### 成品牛皮鞋面材料（`upper_bovine_leather`）

记录用于鞋面部件并跨越过程边界的成品牛皮，以领退料和库存变化确定质量。

- 选定流：成品牛皮
- 流属性/单位：Mass / kg
- 数量规则：领用质量减退回可用材料，并与裁切边角料和缝制鞋面嵌入量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_materials`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

###### 聚酯鞋面织物（`upper_polyester_textile`）

实际用于鞋面、里料或增强的聚酯织物与皮革及泡沫分开记录。

- 选定流：聚酯织物
- 流属性/单位：Mass / kg
- 数量规则：领用质量减退回可用材料，并与裁切边角料和缝制鞋面嵌入量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_materials`
- 来源：`af-pefcr-2025`

###### 聚氨酯泡沫填充料（`upper_pu_foam`）

鞋面填充用软质聚氨酯泡沫作为独立材料输入记录。

- 选定流：软质聚氨酯泡沫
- 流属性/单位：Mass / kg
- 数量规则：领用质量减退回可用材料，并与泡沫边角料核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_materials`
- 来源：`af-pefcr-2025`

###### 聚酯缝纫线（`upper_thread`）

聚酯缝纫线与鞋面织物和鞋带分开记录。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除退回线轴和期末存量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_accessories`
- 来源：`af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### 聚酯鞋带（`upper_shoelace`）

按实测质量记录聚酯鞋带，并保留双数和件数用于核对。

- 选定流：聚酯鞋带
- 流属性/单位：Mass / kg
- 数量规则：验收件数乘产品特定抽样平均质量，再加记录的废品
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_upper_accessories`
- 来源：`af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### 钢制鞋眼（`upper_steel_eyelet`）

钢制鞋眼与其他金属辅件分开记录，并由计数换算为产品特定实测质量。

- 选定流：钢制鞋眼
- 流属性/单位：Mass / kg
- 数量规则：安装及报废鞋眼件数乘抽样平均质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_upper_accessories`
- 来源：`af-pefcr-2025`; `krug-2021-footwear-manufacturing`

###### 裁切与缝制用电力（`upper_electricity`）

裁切、缝纫及相关局部抽排用电作为独立能源输入记录。

- 选定流：制造场址中压电力
- 流属性/单位：Energy / kWh
- 数量规则：申报期分表用量，或按因果驱动量分配的共享电表用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_electricity`
- 来源：`eu-pef-2021`; `ccote-2024-footwear-lca`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收缝制鞋面（`stitched_upper_output`）

记录转入绷帮与装配的验收缝制鞋面。

- 选定流：缝制运动鞋鞋面
- 流属性/单位：Mass / kg
- 数量规则：验收鞋面的实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_output_waste`
- 来源：`krug-2021-footwear-manufacturing`

##### 废物流

###### 牛皮裁切边角料（`waste_leather_offcuts`）

废弃牛皮裁切边角料与织物和泡沫废物分开记录。

- 选定流：废成品牛皮边角料
- 流属性/单位：Mass / kg
- 数量规则：按申报处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_output_waste`
- 来源：`af-pefcr-2025`

###### 聚酯织物裁切边角料（`waste_polyester_offcuts`）

废弃聚酯织物裁切边角料作为独立废物记录。

- 选定流：废聚酯织物边角料
- 流属性/单位：Mass / kg
- 数量规则：按申报处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_output_waste`
- 来源：`af-pefcr-2025`

###### 聚氨酯泡沫边角料（`waste_pu_foam_offcuts`）

聚氨酯泡沫裁切废料与其他鞋面废物分开记录。

- 选定流：废软质聚氨酯泡沫边角料
- 流属性/单位：Mass / kg
- 数量规则：按申报处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收缝制鞋面输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_output_waste`
- 来源：`af-pefcr-2025`

##### 基本流

### 过程：现场鞋底部件成型（`sole_forming`）

#### 输入

##### 产品流

###### 乙烯-醋酸乙烯酯混炼料（`sole_eva_compound`）

现场成型 EVA 部件时，将具名 EVA 混炼料与橡胶及 TPU 分开记录。

- 选定流：鞋用乙烯-醋酸乙烯酯混炼料
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除库存变化和退回可复用混炼料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_materials`
- 来源：`af-pefcr-2025`

###### 天然橡胶混炼料（`sole_natural_rubber`）

现场外底成型使用的天然橡胶混炼料与合成橡胶分开记录。

- 选定流：鞋用天然橡胶混炼料
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除库存变化和退回可复用混炼料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_materials`
- 来源：`af-pefcr-2025`

###### 丁苯橡胶混炼料（`sole_sbr_compound`）

现场鞋底使用 SBR 时，将其作为独立材料输入。

- 选定流：鞋用丁苯橡胶混炼料
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除库存变化和退回可复用混炼料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_materials`
- 来源：`af-pefcr-2025`

###### 热塑性聚氨酯颗粒（`sole_tpu_granules`）

TPU 颗粒与 EVA 及橡胶混炼料分开记录。

- 选定流：热塑性聚氨酯颗粒
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除库存变化和退回可复用颗粒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_materials`
- 来源：`af-pefcr-2025`

###### 鞋底成型用电力（`sole_electricity`）

记录成型、模压、修边及局部辅助设备用电。

- 选定流：制造场址中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或按因果驱动量分配的申报期用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_energy`
- 来源：`eu-pef-2021`; `af-pefcr-2025`

###### 鞋底成型用外购蒸汽（`sole_steam`）

仅在蒸汽实际供应鞋底成型设备时记录，并与热水和燃料分开。

- 选定流：制造场址外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：供应商能源记录或质量-焓差计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sole_energy`
- 来源：`eu-pef-2021`

###### 鞋底成型用天然气（`sole_natural_gas`）

现场消耗的天然气与 LPG 和外购热载体分开记录。

- 选定流：工业设备燃烧天然气
- 流属性/单位：Energy / MJ LHV
- 数量规则：实测燃料量乘供应商申报期低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sole_energy`
- 来源：`eu-pef-2021`

###### R-134a 制冷剂补充量（`sole_r134a_makeup`）

作为明确的路线核查项，当 R-134a 冷却设备服务于现场鞋底成型时，单独记录 R-134a 补充量；否则本卡标记为不适用。任何其他制冷剂均须另建化学品特定卡片。

- 选定流：1,1,1,2-四氟乙烷
- 流属性/单位：Mass / kg
- 数量规则：申报期实测制冷剂补充量，并按因果关系归入纳入的冷却设备
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_refrigerant`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收 EVA 中底（`eva_midsole_output`）

现场成型的验收 EVA 中底与外底产品分开记录。

- 选定流：乙烯-醋酸乙烯酯鞋中底
- 流属性/单位：Mass / kg
- 数量规则：验收转移质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

###### 验收橡胶外底（`rubber_outsole_output`）

现场成型的验收橡胶外底作为独立产品输出记录。

- 选定流：橡胶鞋外底
- 流属性/单位：Mass / kg
- 数量规则：验收转移质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

##### 废物流

###### EVA 成型废料（`waste_eva_scrap`）

按实际处理去向记录未回用的 EVA 浇口、飞边和废品。

- 选定流：废鞋用乙烯-醋酸乙烯酯混炼料
- 流属性/单位：Mass / kg
- 数量规则：称量未回用废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

###### 天然橡胶成型废料（`waste_natural_rubber_scrap`）

未回用天然橡胶成型废料与 SBR 和 TPU 废料分开记录。

- 选定流：废鞋用天然橡胶混炼料
- 流属性/单位：Mass / kg
- 数量规则：称量未回用废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

###### SBR 成型废料（`waste_sbr_scrap`）

未回用 SBR 成型废料作为原子废物流记录。

- 选定流：废鞋用丁苯橡胶混炼料
- 流属性/单位：Mass / kg
- 数量规则：称量未回用废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

###### TPU 成型废料（`waste_tpu_scrap`）

未回用 TPU 成型废料与橡胶和 EVA 废料分开记录。

- 选定流：废热塑性聚氨酯颗粒
- 流属性/单位：Mass / kg
- 数量规则：称量未回用废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_output_waste`
- 来源：`af-pefcr-2025`

##### 基本流

###### 天然气燃烧化石二氧化碳（`sole_co2_natural_gas`）

用已披露的辖区因子由实测天然气输入计算直接化石二氧化碳。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：天然气能量乘已披露化石二氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sole_energy`
- 来源：`eu-pef-2021`

###### 排放到空气的 R-134a（`sole_r134a_to_air`）

对同一条件性 R-134a 路线，由设备质量平衡计算化学品特定的空气泄漏量，不得与其他制冷剂合并。

- 选定流：1,1,1,2-四氟乙烷，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：期初充注量加补充量减期末充注量、回收量和封存转移量，并归入纳入设备
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收鞋底部件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_sole_refrigerant`

### 过程：绷帮、粘合与整理（`lasting_assembly`）

#### 输入

##### 产品流

###### 缝制运动鞋鞋面（`assembly_upper`）

按实际质量记录转入或外购的缝制鞋面。

- 选定流：缝制运动鞋鞋面
- 流属性/单位：Mass / kg
- 数量规则：进入绷帮与装配的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_components`
- 来源：`krug-2021-footwear-manufacturing`

###### 乙烯-醋酸乙烯酯鞋中底（`assembly_eva_midsole`）

EVA 中底与橡胶外底及其他底部件分开记录。

- 选定流：乙烯-醋酸乙烯酯鞋中底
- 流属性/单位：Mass / kg
- 数量规则：安装和报废部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_components`
- 来源：`af-pefcr-2025`

###### 橡胶鞋外底（`assembly_rubber_outsole`）

橡胶外底与中底和鞋垫分开记录。

- 选定流：橡胶鞋外底
- 流属性/单位：Mass / kg
- 数量规则：安装和报废部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_components`
- 来源：`af-pefcr-2025`

###### 聚氨酯泡沫鞋垫（`assembly_pu_sockliner`）

聚氨酯泡沫鞋垫作为独立部件记录。

- 选定流：聚氨酯泡沫鞋垫
- 流属性/单位：Mass / kg
- 数量规则：安装和报废部件质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_components`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

###### 水性聚氨酯分散体鞋用胶黏剂（`assembly_waterborne_pu_adhesive`）

水性聚氨酯分散体胶黏剂与溶剂型胶黏剂和清洗溶剂分开记录。

- 选定流：水性聚氨酯分散体鞋用胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：采购加期初库存减期末库存和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_chemicals`
- 来源：`simoes-2024-footwear-adhesive`

###### 溶剂型聚氨酯鞋用胶黏剂（`assembly_solvent_pu_adhesive`）

溶剂型聚氨酯胶黏剂作为独立配制产品输入记录。

- 选定流：溶剂型聚氨酯鞋用胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：采购加期初库存减期末库存和退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_chemicals`
- 来源：`simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### 丙酮清洗溶剂（`assembly_acetone`）

丙酮与胶黏剂配方及其他溶剂分开记录。

- 选定流：丙酮
- 流属性/单位：Mass / kg
- 数量规则：采购加期初库存减期末库存、回收溶剂和外运废溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### 乙酸乙酯清洗或底涂溶剂（`assembly_ethyl_acetate`）

清洗、底涂或胶接使用乙酸乙酯时单独记录。

- 选定流：乙酸乙酯
- 流属性/单位：Mass / kg
- 数量规则：采购加期初库存减期末库存、回收溶剂和外运废溶剂
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`unido-footwear-environment`

###### 绷帮与装配用电力（`assembly_electricity`）

记录绷帮、胶黏剂活化、压合、抽排和整理设备用电。

- 选定流：制造场址中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或按因果驱动量分配的申报期用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-pef-2021`; `krug-2021-footwear-manufacturing`; `simoes-2024-footwear-adhesive`

###### 装配用外购热水（`assembly_hot_water`）

清洗或工艺加热使用外购热水时，与蒸汽和燃料分开记录。

- 选定流：制造场址外购热水
- 流属性/单位：Energy / MJ
- 数量规则：实测质量流乘实测温差和比热容
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-pef-2021`

###### 装配加热用液化石油气（`assembly_lpg`）

LPG 与天然气、电力和外购热载体分开记录。

- 选定流：工业设备燃烧液化石油气
- 流属性/单位：Energy / MJ LHV
- 数量规则：实测 LPG 量乘供应商申报期低位热值
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收未装盒鞋（`unboxed_footwear_output`）

记录转入包装的验收鞋，不含废品和包装质量。

- 选定流：其他运动鞋，滑冰鞋除外，未装盒
- 流属性/单位：Mass / kg
- 数量规则：验收未装盒鞋净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_waste`
- 来源：`af-pefcr-2025`; `krug-2021-footwear-manufacturing`

##### 废物流

###### 废聚氨酯胶黏剂（`waste_pu_adhesive`）

未固化和固化聚氨酯胶黏剂废物与溶剂废物分开记录。

- 选定流：废聚氨酯鞋用胶黏剂
- 流属性/单位：Mass / kg
- 数量规则：按实际处理去向称量废弃胶黏剂
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_waste`
- 来源：`simoes-2024-footwear-adhesive`

###### 废丙酮（`waste_acetone`）

以液态废物外运的丙酮与排放到空气的丙酮分开记录。

- 选定流：废丙酮
- 流属性/单位：Mass / kg
- 数量规则：称量，或由容器体积并按浓度修正计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`simoes-2024-footwear-adhesive`

###### 废乙酸乙酯（`waste_ethyl_acetate`）

以液态废物外运的乙酸乙酯作为原子废物流记录。

- 选定流：废乙酸乙酯
- 流属性/单位：Mass / kg
- 数量规则：称量，或由容器体积并按浓度修正计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`unido-footwear-environment`

###### 废弃成品鞋（`waste_rejected_footwear`）

按实测质量和处理去向记录未进入内部返工的废弃鞋。

- 选定流：废弃运动鞋
- 流属性/单位：Mass / kg
- 数量规则：离开内部返工循环的废品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_output_waste`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

##### 基本流

###### 排放到空气的丙酮（`acetone_to_air`）

扣除回收、废物和留存量后，计算或测量排放到空气的丙酮。

- 选定流：丙酮，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：化学品特定质量平衡或经校准排放测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`simoes-2024-footwear-adhesive`; `unido-footwear-environment`

###### 排放到空气的乙酸乙酯（`ethyl_acetate_to_air`）

排放到空气的乙酸乙酯与丙酮分开计算或测量。

- 选定流：乙酸乙酯，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：化学品特定质量平衡或经校准排放测量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_solvents`
- 来源：`unido-footwear-environment`

###### LPG 燃烧化石二氧化碳（`assembly_co2_lpg`）

使用已披露的辖区因子由实测 LPG 消耗计算直接化石二氧化碳。

- 选定流：化石二氧化碳，排放至空气
- 流属性/单位：Mass / kg
- 数量规则：LPG 能量乘已披露化石二氧化碳因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收未装盒鞋输出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_assembly_energy`
- 来源：`eu-pef-2021`

### 过程：最终检验与包装（`final_packaging`）

#### 输入

##### 产品流

###### 验收未装盒鞋（`packaging_unboxed_footwear`）

记录进入最终检验和包装的验收未装盒鞋。

- 选定流：其他运动鞋，滑冰鞋除外，未装盒
- 流属性/单位：Mass / kg
- 数量规则：输入净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_output`
- 来源：`af-pefcr-2025`

###### 薄页纸包装（`packaging_tissue_paper`）

薄页纸与鞋盒、纸箱、标签和塑料膜分开记录。

- 选定流：鞋类包装用薄页纸
- 流属性/单位：Mass / kg
- 数量规则：领用质量扣除库存变化和未用退料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_materials`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

###### 纸板零售鞋盒（`packaging_retail_box`）

零售纸板鞋盒作为独立包装输入记录。

- 选定流：纸板零售鞋盒
- 流属性/单位：Mass / kg
- 数量规则：鞋盒数量乘产品特定抽样平均质量，包括损坏鞋盒
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

###### 瓦楞运输纸箱（`packaging_corrugated_carton`）

瓦楞纸箱与零售鞋盒分开记录。

- 选定流：瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：纸箱数量乘抽样平均质量，包括损坏纸箱
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`af-pefcr-2025`; `ccote-2024-footwear-lca`

###### 低密度聚乙烯包装袋（`packaging_ldpe_bag`）

每个 LDPE 袋或膜包与纸质包装分开记录。

- 选定流：低密度聚乙烯鞋类包装袋
- 流属性/单位：Mass / kg
- 数量规则：包装袋数量乘抽样平均质量，包括损坏包装袋
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`af-pefcr-2025`

###### 纸质产品标签（`packaging_paper_label`）

纸质标签与薄页纸和鞋盒分开记录。

- 选定流：纸质鞋类产品标签
- 流属性/单位：Mass / kg
- 数量规则：标签数量乘抽样平均质量，包括损坏标签
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`af-pefcr-2025`

###### 最终检验与包装用电力（`packaging_electricity`）

记录最终检验、贴标、包装和局部输送机用电。

- 选定流：制造场址中压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量或按因果驱动量分配的申报期用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_energy`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考其他运动鞋（`reference_footwear_output`）

验收鞋净质量作为定量参考，包装质量保持单独核算。

- 选定流：其他运动鞋，滑冰鞋除外 `a372c679-9693-4957-aad9-98b6d6b5e435`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由验收产品净质量归一化后恰为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_reference_output`

##### 废物流

###### 废薄页纸包装（`waste_tissue_paper`）

废弃薄页纸与其他包装废物分开记录。

- 选定流：废薄页纸包装
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`af-pefcr-2025`

###### 废纸板零售鞋盒（`waste_retail_box`）

损坏或废弃零售鞋盒与瓦楞纸箱分开记录。

- 选定流：废纸板零售鞋盒
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`af-pefcr-2025`

###### 废瓦楞运输纸箱（`waste_corrugated_carton`）

废弃瓦楞纸箱作为原子包装废物记录。

- 选定流：废瓦楞纸板运输箱
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`af-pefcr-2025`

###### 废低密度聚乙烯包装膜（`waste_ldpe_film`）

废弃 LDPE 袋和薄膜与纸类废物分开记录。

- 选定流：废低密度聚乙烯包装膜
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`af-pefcr-2025`

###### 废纸质产品标签（`waste_paper_label`）

废弃纸质标签与其他纸质包装分开记录。

- 选定流：废纸质鞋类产品标签
- 流属性/单位：Mass / kg
- 数量规则：按处理去向称量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收参考产品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_waste`
- 来源：`af-pefcr-2025`

##### 基本流

## 7. 分配与共产品处理

分配前必须优先采用过程细分和直接计量。内部返工保持在产生它的过程中，不作为共产品。离开系统的废物或边料不得获得抵扣，除非有文件证明其去向及具有经济价值的次级产品功能；此时须披露数量、去向、替代功能和分配方法。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 所有共享工序 | 首先通过过程细分、直接计量和产品特定领料记录避免分配。 | `eu-pef-2021`; `af-pefcr-2025` |
| `allocation_causal` | 共享电力、热、燃料、化学品和废物 | 无法细分时，每个原子交换须使用设备时间、计量能量、材料吞吐量或验收质量等有文件依据的物理因果驱动量分配，不得对全部交换使用一个未区分因子。 | `eu-pef-2021` |
| `allocation_scrap` | 可销售边料或次级输出 | 默认将边料视为废物；若其具有有文件证明的共产品功能和经济价值，须披露并一致采用适用研究层级，且不得重复抵扣。 | `eu-pef-2021` |
| `allocation_rework` | 内部返工 | 返工投入、能耗和损失归回产生它的过程，并纳入验收输出分母。 | `af-pefcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_upper_materials` | `upper_preparation` | 鞋面片材和织物 | 领退料/库存记录 | 材料身份；供应商；批次；期初库存；领用；退回；期末库存；边角料 | 核对仓库和裁切间记录 | kg | 每批，按月汇总 | 有代表性的连续 12 个月或完整生产周期 | 每个纳入场址 | 按具名材料和产品路线求和 | 库存核对和签署领料记录 |
| `cp_upper_accessories` | `upper_preparation` | 缝纫线、鞋带和鞋眼 | 领料记录和质量样本 | 身份；数量；领用质量；退回；样本量；样本质量 | 核对领用并由有记录样本换算计数 | kg 和件数 | 每批 | 与参考产品生产相同 | 每个纳入场址 | 按具名辅件求和 | 抽样表和校准天平记录 |
| `cp_upper_electricity` | `upper_preparation` | 电力 | 电表记录 | 电表编号；起止读数；设备小时；加工产品 | 子计量或按因果关系分配共享电表 | kWh | 每班或每批 | 与参考产品生产相同 | 每个纳入场址 | 仅在按路线分配后求和 | 电表校准或公用工程核对 |
| `cp_upper_output_waste` | `upper_preparation` | 缝制鞋面和具名废物 | 转移单和废物票据 | 输出质量；废品质量；废物身份；去向 | 称量转移品和每种废物流 | kg | 每批 | 与参考产品生产相同 | 每个纳入场址 | 按输出或废物身份及去向求和 | 质量平衡核对 |
| `cp_sole_materials` | `sole_forming` | 具名鞋底混炼料 | 领退料/库存记录 | 混炼料身份；批次；期初库存；领用；退回；期末库存 | 核对仓库和成型记录 | kg | 每批 | 与参考产品生产相同 | 每条现场成型线 | 按具名混炼料求和 | 配方和库存核对 |
| `cp_sole_energy` | `sole_forming` | 电力、蒸汽和天然气 | 计量和供应商记录 | 载体身份；表计；数量；LHV；蒸汽状态 | 直接计量或因果分配；用已披露因子计算能量 | kWh 或 MJ | 每班或每批 | 与参考产品生产相同 | 每条现场成型线 | 按载体分别求和 | 表计、发票和因子出处 |
| `cp_sole_refrigerant` | `sole_forming` | R-134a 补充和泄漏 | 维修和充注记录 | 化学品身份；设备编号；期初充注；补充；回收；期末充注 | 设备特定制冷剂质量平衡 | kg | 每次维修及年度结算 | 与参考产品生产相同 | 每台纳入冷却设备 | 仅对 R-134a 在设备分配后求和 | 维修发票和签字充注台账 |
| `cp_sole_output_waste` | `sole_forming` | 鞋底部件及混炼料特定废料 | 转移单和废物票据 | 部件身份；验收质量；回用料；废弃质量；去向 | 称量验收部件和未回用废料 | kg | 每批 | 与参考产品生产相同 | 每条现场成型线 | 按部件或混炼料分别求和 | 成型质量平衡 |
| `cp_assembly_components` | `lasting_assembly` | 鞋面、中底、外底和鞋垫 | 领料和转移记录 | 部件身份；数量；质量；废品 | 称量或按产品特定质量换算计数 | kg 和件数 | 每批 | 与参考产品生产相同 | 每条装配线 | 按具名部件求和 | BOM 和转移核对 |
| `cp_assembly_chemicals` | `lasting_assembly` | 具名胶黏剂 | 采购和库存记录 | 配方；供应商；期初库存；采购；退回；期末库存；废物 | 化学品特定库存平衡 | kg | 每批及每月核对 | 与参考产品生产相同 | 每条装配线 | 按准确配方求和 | SDS 和库存核对 |
| `cp_assembly_solvents` | `lasting_assembly` | 丙酮和乙酸乙酯的输入、废物和空气排放 | 采购、库存、废物和排放记录 | 化学品；采购；库存；回收；废物质量；浓度；实测排放 | 各化学品分别平衡或校准测量 | kg | 每月 | 与参考产品生产相同 | 每个纳入场址 | 每种化学品分别求和 | 闭合质量平衡和测量报告 |
| `cp_assembly_energy` | `lasting_assembly` | 电力、热水和 LPG | 计量和供应商记录 | 载体；表计；数量；温度；LHV；运行驱动量 | 直接计量或因果分配 | kWh 或 MJ | 每班或每批 | 与参考产品生产相同 | 每条装配线 | 按载体分别求和 | 表计、发票和计算表 |
| `cp_assembly_output_waste` | `lasting_assembly` | 未装盒鞋、胶黏剂废物和废鞋 | 检验、转移和废物记录 | 验收质量；返工；废品质量；废物身份；去向 | 称量输出和废物，闭合装配质量平衡 | kg | 每批 | 与参考产品生产相同 | 每条装配线 | 按产品和具名废物求和 | 生产与处置记录 |
| `cp_packaging_materials` | `final_packaging` | 具名包装部件 | 领料记录和质量样本 | 包装身份；数量；领用；退回；样本量；样本质量 | 核对领用并将计数换算为质量 | kg 和件数 | 每批 | 与参考产品生产相同 | 每条包装线 | 按具名包装部件求和 | 包装规范和抽样表 |
| `cp_packaging_energy` | `final_packaging` | 电力 | 电表记录 | 表计；读数；线体小时；包装产品 | 子计量或按线体小时因果分配 | kWh | 每班 | 与参考产品生产相同 | 每条包装线 | 按产品路线分配后求和 | 电表核对 |
| `cp_packaging_waste` | `final_packaging` | 每种包装废物 | 废物票据 | 材料身份；质量；去向 | 称量每种分开的废物流 | kg | 每批或每班 | 与参考产品生产相同 | 每条包装线 | 按材料和去向求和 | 处置或回收凭据 |
| `cp_reference_output` | `final_packaging` | 验收参考鞋 | 生产和质量样本 | 型号；尺码；双数；样本质量；废品数；验收净质量 | 称量验收产量，或由分层尺码特定质量样本计算 | kg 和双 | 每批 | 与参考产品生产相同 | 所有纳入线体和场址 | 产量加权尺码组合；归一化至 1 kg | 校准天平、抽样设计和验收记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_material_consumption` | 每种具名材料和化学品 | 期初库存 + 收入 - 期末库存 - 有记录退回 = 消耗质量；按适用情况与产品、废物、回收和排放核对 | 库存、收入、退回、产品、废物和排放记录 | 每过程输出的 kg 消耗量 | `eu-pef-2021`; `af-pefcr-2025` |
| `calc_count_to_mass` | 按件计数的部件和包装 | 总件数 × 产品特定抽样平均质量；质量明显随尺码或规格变化时分层 | 件数和质量样本 | 每过程输出的 kg 输入 | `af-pefcr-2025` |
| `calc_shared_energy` | 共享电力和燃料 | 共享实测量 × 有文件依据的因果驱动量份额；保留分母和全部产品份额 | 表计量和因果驱动量 | 按过程和产品分配的 kWh 或 MJ | `eu-pef-2021` |
| `calc_steam_energy` | 外购蒸汽 | 实测蒸汽质量 × 交付焓差；独立计量时使用供应商能源记录 | 质量、压力/温度或供应商记录 | MJ 蒸汽 | `eu-pef-2021` |
| `calc_hot_water_energy` | 外购热水 | 质量 × 比热容 × 实测温差 | 水质量和进出口温度 | MJ 热水能量 | `eu-pef-2021` |
| `calc_fuel_energy` | 天然气和 LPG | 实测数量 × 供应商申报期低位热值 | 燃料数量和 LHV | MJ LHV | `eu-pef-2021` |
| `calc_solvent_emission` | 每种具名溶剂 | 期初库存 + 采购 - 期末库存 - 回收质量 - 外运废物质量 - 留存质量 = 排放；经校准直接测量可替代平衡 | 化学品特定库存、回收、废物和留存 | kg 具名溶剂排放至空气 | `simoes-2024-footwear-adhesive`; `unido-footwear-environment` |
| `calc_reference_normalization` | 完整前景系统 | 每项核对交换除以验收鞋净质量并缩放至 1 kg | 核对交换和验收净质量 | 每 1 kg 参考产品的交换 | `af-pefcr-2025` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品和参考流 | 证明 CPC 29490 范围、state-100 参考 UUID、型号或产品族、结构、尺码范围和产量加权尺码组合。 | 分类记录、产品规范和生产记录 |
| `dq_bom_completeness` | 产品输入 | 核对完整实际 BOM，不得以材料族占位符替代未知成分。 | 产品 BOM、采购规范、领料记录和质量平衡 |
| `dq_route` | 所有过程 | 申报外购与现场部件生产、纳入线体、外包工序和返工循环。 | 过程图、供应商记录和现场走查 |
| `dq_temporal` | 全部前景数据 | 使用有代表性的连续 12 个月或完整生产周期，并解释异常停机或产品组合变化。 | 带日期表计、库存台账和生产总量 |
| `dq_measurement` | 质量和能源记录 | 使用校准仪器或核对供应商发票与表计；无直接测量时披露分配。 | 校准、发票、表计核对和计算表 |
| `dq_chemical` | 胶黏剂、溶剂和排放 | 保留准确配方或化学品身份，并分别闭合丙酮和乙酸乙酯质量平衡。 | SDS、库存台账、废物联单和排放报告 |
| `dq_waste_destination` | 每种废物流 | 分别报告质量和实际处理去向，不得以回收收入冲减材料输入。 | 废物票据和处理凭据 |
| `dq_background` | 连接的上游数据集 | 记录每种材料、部件和能源供应的地理、时间和技术代表性。 | 数据集元数据和缺口评估 |
| `dq_uncertainty` | 计算值或分配值 | 保留原始观测、因子出处、样本变异和分配分母。 | 计算工作簿和不确定性披露 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | PCR 和参考流 | CPC 代码必须为 29490；参考流 UUID 必须为 `a372c679-9693-4957-aad9-98b6d6b5e435`；流属性必须为 Mass，参考单位必须为 kg。 | `un-cpc-v3-2025`; `epd-footwear-2024` |
| `validate_scope` | 产品数据集 | 拒绝滑冰鞋及归入 CPC 2941 或 2942 的产品；未申报产品结构或市场状态的数据集也应拒绝。 | `un-cpc-v3-2025` |
| `validate_route` | 过程清单 | 必须纳入鞋面备料、绷帮/装配和包装；仅现场实施时要求鞋底成型，否则要求连接外购鞋底部件。 | `af-pefcr-2025`; `krug-2021-footwear-manufacturing` |
| `validate_atomic_inventory` | 所有交换 | 拒绝聚合的公用工程、能源载体、材料、包装、排放或废物行；每个交换必须命名一个可解析的物理或化学流。 | `eu-pef-2021`; `af-pefcr-2025` |
| `validate_mass_balance` | 材料和输出 | 每种具名材料须按路线与产品、退回库存、内部回用、废物和排放核对，验收输出须与 1 kg 参考量核对。 | `eu-pef-2021`; `af-pefcr-2025` |
| `validate_energy` | 电力、蒸汽、热水和燃料 | 每种载体须有单独实测或计算量及因子，拒绝合并能源行。 | `eu-pef-2021` |
| `validate_solvents` | 丙酮和乙酸乙酯 | 每种已用溶剂须分别核算输入、废物、回收和空气排放。 | `simoes-2024-footwear-adhesive`; `unido-footwear-environment` |
| `validate_refrigerants` | 现场冷却 | 若发生制冷剂补充或泄漏，须为每种化学品建立独立输入和基本流排放卡并闭合质量平衡；通用制冷剂行不合格。 | `eu-pef-2021` |
| `validate_packaging` | 最终包装 | 每个实际包装部件和每种包装废物须分别记录，包装质量不得计入参考产品。 | `af-pefcr-2025`; `ccote-2024-footwear-lca` |
| `validate_evidence` | 前景记录 | 要求连接采集协议、保留原始记录、外部支持方法具有来源 ID，并明确披露未解决 UUID 和数据缺口。 | `eu-pef-2021`; `af-pefcr-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29490 鞋工厂门制造的产品特定次级数据集或背景数据集 |
| downstream_use | 前景数据包构建及连接的 process 或 lifecyclemodel 投影 |
| allowed_use | 对已申报产品结构、尺码组合、场址、技术和申报期建模；仅在保持原子交换可追溯时汇总 |
| excluded_use | 其他鞋类主张；消费者使用寿命比较；配送或寿命终止主张；以通用配方替代未披露产品路线 |
| required_metadata | PCR id 和版本；CPC 29490；参考 UUID；型号或产品族；结构；尺码组合；产品净质量；场址和地理；申报期；纳入和外包过程；包装配置；分配和截断披露 |
| required_quality_disclosure | BOM 和质量平衡完整性；表计和库存记录覆盖；计算因子；分配驱动量；溶剂平衡；废物去向；背景数据代表性；未解决 UUID 和不确定性 |
| update_trigger | 产品结构、供应商路线、现场成型、胶黏剂或溶剂体系、能源供应、包装、场址、分配驱动量、申报期代表性、CPC 范围或 Tiangong 参考流身份发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-2025` | official_guidance | 联合国统计司，《Central Product Classification (CPC) Version 3.0, Explanatory Notes》，子类 29490。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-20）。 | 准确分类名称、层级和排除项 |
| `eu-pef-2021` | official_guidance | 欧盟委员会，Commission Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods。https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（检索日期 2026-08-20）。 | 产品特定清单、企业特定数据、分配、数据质量和报告规则 |
| `af-pefcr-2025` | official_guidance | *Apparel and Footwear Product Environmental Footprint Category Rules*，v3.1，2025-04-29。https://www.carbonfact.com/hubfs/A%26FW_PEFCR_v3.1.pdf（检索日期 2026-08-20）；欧盟委员会认可页面：https://environment.ec.europa.eu/news/new-eu-rules-measuring-environmental-impact-clothes-and-shoes-2025-06-25_en。 | 鞋类 BOM、部件制造、装配、包装、原始数据和质量要求 |
| `epd-footwear-2024` | standard | International EPD System，PCR 2024:04 Footwear，v1.0.0，有效至 2028-06-19。https://www.environdec.com/pcr-library/pcr_edf5de69-f200-455d-3a37-08dba55a27da（检索日期 2026-08-20）。 | 独立确认 CPC 2949 其他运动鞋属于鞋类 PCR 范围 |
| `ccote-2024-footwear-lca` | literature | C. C. Cote 等，“Environmental Impact of Footwear Using Life Cycle Assessment—Case Study of Professional Footwear.” *Sustainability* 16(14), 6094 (2024)。https://doi.org/10.3390/su16146094；全文：https://www.mdpi.com/2071-1050/16/14/6094/html。 | 鞋类材料、裁切、缝制、注射、包装、能源、水、排放和生产废物分解；案例数值未作为默认值或范围 |
| `krug-2021-footwear-manufacturing` | literature | S. Krug 等，“Towards footwear manufacturing 4.0: shoe sole robotic grasping in assembling operations.” *The International Journal of Advanced Manufacturing Technology* (2021)。https://doi.org/10.1007/s00170-021-06697-0；全文：https://link.springer.com/article/10.1007/s00170-021-06697-0。 | 裁切、缝制、成型、施胶、鞋底装配和压合过程序列 |
| `simoes-2024-footwear-adhesive` | literature | C. L. Simões 等，“Environmental assessment of an innovative adhesive for the footwear industry: road map for product development.” *The International Journal of Life Cycle Assessment* (2024)。https://doi.org/10.1007/s11367-024-02314-w；全文：https://link.springer.com/article/10.1007/s11367-024-02314-w。 | 水性和溶剂型聚氨酯胶黏剂体系、丙酮及产品特定胶黏剂清单；案例数值未作为默认值或范围 |
| `unido-footwear-environment` | extension_guidance | 联合国工业发展组织，*Environmental Aspects of Footwear and Leather Products Manufacture*。https://downloads.unido.org/ot/47/88/4788513/20001-_23435.PDF（检索日期 2026-08-20）。 | 工序特定溶剂使用和鞋类制造直接排放，包括丙酮和乙酸乙酯 |
