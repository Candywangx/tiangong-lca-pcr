---
pcr_id: pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-parts-non-electrical-n-e-c
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 未另分类的非电气机械零件

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 子类 43949 剩余产品边界内的通用机械成品非电气零件。边界涵盖一个已声明零件从外购材料或外购近净成形坯料进入场址起，经实际执行的成形或切割、机加工、连接、热处理、清洗、表面处理、检验和最终验收，直至制造商工厂大门。

数据包必须识别一个具体零件和一条实际制造路线。代表性路线为非合金钢机加工零件；这不允许用笼统材料流替代实际合金、形态、耗材、废物或排放。电气零件、整机、CPC 43941-43944 已具体列名的零件、专用机械零件、安装和维修服务、包装、出厂后的配送、使用及生命末期均不在本 PCR 范围内。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.general-purpose-machinery.machinery-parts-non-electrical-n-e-c |
| classification_refs | CPC 3.0：43949，未另分类的非电气机械零件 |
| covered_products | CPC 4391-4393 类商品所用、且未在 CPC 43941-43944 中具体列名的非电气成品零件；声明具体产品和路线后，标准件与定制件均可覆盖。 |
| excluded_products | 电气机械零件；CPC 43941-43944 零件；专用机械零件；整机；维修服务；包装；使用阶段和生命末期活动。 |
| representative_product | 一个通过质量验收的非合金钢机加工机械零件，并声明图样、牌号、尺寸、公差和表面状态。 |
| production_route | 外购具体材料或近净成形坯料；按实际工艺开展成形/切割、机加工、连接、热处理、清洗或表面处理；检验和验收。未实施工序应排除并披露。 |
| market_state | 在制造商工厂大门交付的已完成、已清洁、质量验收合格且未包装零件。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在通用机械中提供已声明配合、支承、运动传递、密封、壳体或承载功能的成品非电气机械零件。 |
| How much | 1 kg 验收合格成品零件净质量，不含包装。 |
| How well | 满足所声明图样或采购规范中的材料牌号、几何形状、公差、热处理状态、表面状态和验收准则。 |
| How long or cycle | 一个出厂交付零件；除非研究另行说明并提供证据，否则不主张使用寿命性能。 |
| reference_flow_link | finished_machinery_part |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 标准机械部件 `823b5c17-40c2-4039-91ac-0a648ef9b910` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件名称和图样/版次；CPC 适用性；材料牌号和投入形态；零件净质量；尺寸和公差等级；制造工序；热处理状态；表面处理状态；合格/拒收数量；出厂地理范围；参考期；分配方法 |

构建前景数据包时，每项必需限定信息都必须在元数据、过程说明、参考流备注、产品描述或等效字段中声明。缺失任何一项都表示参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 成品参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所有已声明制造和清洗工序完成后、包装前测量合格零件质量；排除夹具、可重复使用载具、临时保护介质和包装。 |
| `material_mass_basis` | 固体材料投入和固体废物 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在一致的收货状态基准上使用批次领料、退料、库存变化和废物记录；另行记录合金牌号和物理形态。 |
| `electricity_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表读数，并按 1 kWh = 3.6 MJ 将 kWh 转换为 MJ；披露共享电表向零件路线的分配。 |
| `gas_volume_conditions` | 氧气、二氧化碳产品气和天然气 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 各气体分别记录，并声明参考温度、压力、组成或等级及计量或供应商基准；不得合并不同气体。 |
| `batch_normalization` | 所有清单交换 | 各行规定属性 | 各行规定单位 | 批次总量按合格成品零件质量归一化；保留未归一化批次数量、合格质量、拒收质量和计算轨迹。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_gate_to_gate` | 前景制造 | 边界始于具体外购材料或近净成形坯料进入制造场址，止于已完成、清洁、验收合格、未包装零件离开工厂大门。仅纳入实际实施的工序，并在源记录中分别识别成形/切割、机加工、连接、热处理、清洗、表面处理、检验和内部搬运。 | `un-cpc-3-0-structure-2025`; `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_direct_exchanges` | 前景清单 | 纳入归属于所声明路线的每项直接材料、电力、燃料、工艺用水、工艺化学品、气体、废物、废水和基本流排放。共享公用工程仅可按第 7 节分配。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_upstream_links` | 外购投入 | 每项外购投入应链接与材料或化学品身份、牌号或浓度、产品状态、地理、技术和交付边界匹配的上游数据集；不得以未指定笼统流替代具体投入。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `boundary_exclusions` | 下游和资本活动 | 排除包装、出厂后的配送、使用、维护、生命末期、员工出行和资本设备；若研究目标明确扩展边界，应单独报告该扩展。 | `un-cpc-3-0-structure-2025` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 制造场址收到的具体外购材料或外购近净成形坯料，并声明供应商身份、牌号、形态、质量和交付边界。 |
| starting_condition_role | 链接上游数据集的前景制造单元过程产品投入。 |
| product_classification_scope | CPC 3.0 子类 43949 的剩余非电气机械零件；每个数据包建模一个具体零件。 |
| recursive_input_rule | 已属于同一产品类别的外购投入仍作为显式产品投入，并具有自己的供应商数据集和起始状态；不得递归应用本 PCR 或将其吸收到参考产品输出。 |
| upstream_dataset_requirement | 使用与具体材料或零件身份、牌号、状态、地理、技术和供应商大门相匹配的上游数据集。代理数据需明确说明理由和不确定性。 |
| disclosure | 声明零件图样/版次、材料和坯料状态、纳入或未实施的工序、设施和期间、供应商数据覆盖、共享计量分配、废物去向及每项边界扩展。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| part_manufacturing | 非电气机械零件制造和验收 | required | 始终纳入；单元过程只包含实际实施的路线工序，且披露每个未实施工序。 | 将具体材料或近净成形坯料转化为验收合格的出厂零件。 | 1 kg 验收合格成品未包装零件 |

### 过程：非电气机械零件制造和验收（`part_manufacturing`）

#### 输入

##### 产品流

###### 代表性机加工路线用冷拉非合金钢棒（`steel_bar_stock`）

仅当零件由冷拉非合金钢棒制造时记录本行。其他材料路线必须为每种具体材料和形态新增单独卡片；本行不得代表混合或未指定材料。

- 选定流：冷拉非合金钢棒
- 流属性/单位：Mass / kg
- 数量规则：批次领用钢棒实测质量减去退回受控库存的未使用钢棒质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_mass`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 外购电能（`electricity`）

记录所声明路线的计量电能，包括可归属的机床、泵、抽排、压缩空气制备、清洗和检验设备；共享计量按第 7 节分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：计量或合理分配的电力，由 kWh 转为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 工艺用水（`process_water`）

记录用于金属加工液配制、清洗、漂洗或已声明表面处理且跨越边界的工艺用水。闭路循环量不得重复计作投入；补水和排放应分开披露。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：已声明工序使用的计量或罐体平衡补水量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 水混溶性金属加工液浓缩液（`metalworking_fluid_concentrate`）

仅在切削、磨削或成形中使用时记录具体浓缩液。声明产品名称、供应商、浓度、密度，以及数量指浓缩液还是配制乳化液。

- 选定流：水混溶性金属加工液浓缩液
- 流属性/单位：Mass / kg
- 数量规则：经库存变化和退料修正的采购或领用浓缩液质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 切割或连接用工业氧气（`industrial_oxygen`）

仅在所声明热切割或连接工序消耗时记录工业氧气。声明纯度、供应状态、压力、参考条件和现场制气边界。

- 选定流：工业氧气 `bd4b0f96-2090-4806-a648-335ab20ff401`
- 流属性/单位：Volume / m3
- 数量规则：在所声明参考条件下计量的交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 二氧化碳保护气（`carbon_dioxide_shielding_gas`）

仅在焊接中作为保护气使用时记录二氧化碳产品气。声明等级、供应商、压力、参考条件和化石或生物来源。

- 选定流：二氧化碳 `27f41c1c-535e-4d2a-bce9-2c7f4de11549`
- 流属性/单位：Mass / kg
- 数量规则：可归属于所声明连接工序的供应商交付质量或钢瓶库存变化
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_gases`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 热工序用气态天然气（`natural_gas`）

仅当天然气在所声明炉窑、烘箱、干燥器或其他直接控制热工序中燃烧时记录。声明组成、净热值、计量参考条件和交付边界。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：在所声明参考条件下计量的交付体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fuel_gas`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 碱性清洗或表面处理用氢氧化钠（`sodium_hydroxide`）

仅当所声明碱性清洗或表面处理槽消耗氢氧化钠时记录。报告纯 NaOH 当量质量，并保留溶液浓度和供应质量。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：供应溶液质量乘以实测或供应商认证的 NaOH 质量分数，并按库存变化修正
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_process_chemicals`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 验收合格成品非电气机械零件（`finished_machinery_part`）

该参考产品已完成所声明制造、清洗、检验和验收工序，且尚未包装。

- 选定流：标准机械部件 `823b5c17-40c2-4039-91ac-0a648ef9b910`
- 流属性/单位：Mass / kg
- 数量规则：将验收合格产品净质量归一化为恰好 1 kg；保留实测批次输出和拒收质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_product_output`
- 来源：`un-cpc-3-0-structure-2025`

##### 废物流

###### 机加工分流钢切屑（`steel_swarf`）

将机加工去除的钢切屑记录为废物输出。声明合金类别、冷却液或油夹带、称量基准、储存水分和接收处理或回收路线。

- 选定流：钢切屑 `6a16eab5-8097-4e37-8d28-aa1e81b8bb5c`
- 流属性/单位：Mass / kg
- 数量规则：在已记录沥液状态下离开过程的切屑净质量实测值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 送往处理的废金属加工液（`waste_metalworking_fluid`）

仅当废金属加工液离开前景过程送往处理或处置时记录。声明液体类别、水和油含量、污染物、沥液基准和去向。

- 选定流：废金属加工液 `2468f4c0-46fa-4a8b-8075-686cf7391b00`
- 流属性/单位：Mass / kg
- 数量规则：转移质量实测值，经容器皮重和保留复用液修正
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_mass`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

###### 金属表面处理废水（`surface_treatment_wastewater`）

仅当水洗或表面处理产生单独管理的排水时记录本废水。声明来源工序、pH、主要溶解金属或处理化学品、悬浮物、水分和去向。

- 选定流：金属表面处理废水
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的计量排放或罐体平衡质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

##### 基本流

###### 直接排入空气的化石源二氧化碳（`fossil_carbon_dioxide`）

仅记录前景燃料燃烧或化石源二氧化碳保护气排放产生的直接化石源二氧化碳。本行不含上游电力排放，上游排放应属于电力供应数据集。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：直接排放实测值，或由前景燃料/气体数量、已记录碳含量、氧化率和化石比例计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 验收合格成品机械零件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_co2`
- 来源：`eu-commission-2021-2053-fabricated-metal-products`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 可分离产品、路线、批次和工序 | 通过采集产品、批次、路线和工序特定记录，或细分可独立计量过程来避免分配。 | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_physical` | 无法避免的共享投入和排放 | 无法细分时，使用能代表共享交换驱动因素的、已记录的因果物理关系，例如计量能耗、机器时间、处理面积、气体用量或槽负荷；不得仅因参考流按质量计量就默认采用质量分配。 | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_other` | 无可辩护的物理关系 | 只有在说明无法细分且无法采用因果物理分配后，才可使用其他关系（包括经济分配）；保留产品特定数量、价格、期间、币种和敏感性结果。 | `eu-recommendation-2021-2279-environmental-footprint` |
| `allocation_waste` | 钢切屑、废金属加工液和废水 | 在前景大门处将这些输出保留为废物流。除非所声明下游方法明确要求且透明报告替代结果，否则不得在本单元过程中扣除避免产品信用。 | `eu-recommendation-2021-2279-environmental-footprint` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_mass` | part_manufacturing | 具体固体材料投入 | 采购、领料、退料和库存记录 | 材料身份；牌号；形态；供应商；批次；领用质量；退回质量；期初和期末库存 | 校准秤和库存核对 | kg | 每批，并每月核对 | 有代表性的连续 12 个月或已披露生产期 | 所有纳入生产线 | 领用减退回材料，按合格产品质量归一化 | 秤校准；库存核对；供应商证书；批次追溯 |
| `cp_electricity` | part_manufacturing | 外购电力 | 电表和机器日志 | 电表编号；始末读数；机器状态；工序；批次；共享负荷基准 | 优先专用计量，否则采用已记录分表或工程分配 | kWh 和 MJ | 每批或不长于一个月的区间 | 与产品输出相同期间 | 所有纳入机器和可归属辅助设备 | 汇总可归属 kWh，转为 MJ，按合格产品质量归一化 | 电表校准；账单核对；分配轨迹 |
| `cp_process_water` | part_manufacturing | 工艺补水 | 计量、罐体和批次记录 | 来源；表读数；罐体变化；工序；循环；排放；批次 | 专用计量或罐体平衡 | kg 或带密度的 m3 | 每批或每月 | 与产品输出相同期间 | 所有纳入用水工序 | 仅计一次跨边界补水，按合格产品质量归一化 | 计量校准；罐体平衡；密度基准 |
| `cp_process_chemicals` | part_manufacturing | 金属加工液和氢氧化钠 | 采购、领用、浓度和库存记录 | 产品；供应商；批号；供应质量；浓度；密度；期初/期末库存；退回质量；工序 | 称量领用和库存核对；实验室或供应商浓度 | kg | 每批，并每月核对 | 与产品输出相同期间 | 所有纳入化学品使用工序 | 计算具体产品或纯物质质量，按合格产品质量归一化 | 秤校准；分析证书；浓度测试；库存核对 |
| `cp_process_gases` | part_manufacturing | 氧气和二氧化碳工艺气 | 流量计或钢瓶库存 | 气体身份；等级；供应商；压力；温度；钢瓶始末质量或体积；工序；批次 | 校准流量计或钢瓶质量平衡 | m3 或 kg | 每批 | 与产品输出相同期间 | 所有纳入切割和连接工序 | 各气体按所声明参考条件分别汇总，再按合格产品质量归一化 | 计量校准；供应商证书；钢瓶核对 |
| `cp_fuel_gas` | part_manufacturing | 气态天然气 | 计量和供应商记录 | 表读数；温度；压力；组成；净热值；工序；批次 | 校准专用表或已记录场址总表分配 | m3 | 每批或每月 | 与产品输出相同期间 | 所有纳入热工序 | 参考条件体积按合格产品质量归一化 | 计量校准；供应商声明；分配轨迹 |
| `cp_product_output` | part_manufacturing | 验收合格参考产品 | 生产和质量记录 | 零件编号；图样版次；批次；生产件数；合格件数；拒收件数；净质量；返工状态 | 与质量验收关联的校准秤 | kg 和件 | 每批 | 与所有投入相同期间 | 所有纳入产品和拒收品 | 汇总合格净质量；将清单归一化为 1 kg | 秤校准；检验记录；批次谱系 |
| `cp_waste_mass` | part_manufacturing | 钢切屑和废金属加工液 | 废物转移和称量记录 | 废物身份；来源工序；毛重/皮重/净重；水分或水/油含量；去向；日期；批次 | 校准秤或经核实的废物承包商票据 | kg | 每次转移，并分配到批次或期间 | 与产品输出相同期间 | 所有纳入废物收集点 | 扣除皮重和保留复用材料，按合格产品质量归一化 | 秤校准；转移单；组成或沥液记录 |
| `cp_wastewater` | part_manufacturing | 金属表面处理废水 | 排放计量、罐体和分析记录 | 来源工序；体积或质量；密度；pH；主要溶解金属；悬浮物；处理；去向；批次 | 校准计量或罐体平衡及代表性分析 | kg 或带密度的 m3 | 每次排放及代表性分析 | 与产品输出相同期间 | 所有纳入水相处理排放 | 仅汇总具体废水流，按合格产品质量归一化 | 计量校准；实验室报告；排放或转移记录 |
| `cp_direct_co2` | part_manufacturing | 直接化石源二氧化碳 | 烟道测量或燃料/气体计算记录 | 来源工序；实测 CO2；燃料/气体量；碳含量；氧化率；化石比例；计算版本 | 优先直接测量，否则由前景记录透明开展化学计量计算 | kg | 每批或每月 | 与产品输出相同期间 | 所有直接燃烧和保护气排放 | 仅汇总直接化石源 CO2，按合格产品质量归一化 | 仪器校准或供应商组成；计算审计 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_normalization` | 每个清单行 | 归一化交换量 = 可归属批次交换量 / 批次合格产品净质量 | 可归属交换量；合格产品净质量 | 每 1 kg 验收合格成品零件的行数量 | `eu-commission-2021-2053-fabricated-metal-products` |
| `calc_naoh_pure_mass` | sodium_hydroxide | 纯 NaOH 当量质量 = 供应溶液质量 × 实测或供应商认证的 NaOH 质量分数 | 溶液质量；NaOH 质量分数 | kg 氢氧化钠 |  |
| `calc_fossil_co2` | fossil_carbon_dioxide | 直接化石源 CO2 = 直接化石源 CO2 实测值；若计算，则对含碳前景气体或燃料量 × 已记录碳含量 × 氧化比例 × 化石比例 × 44/12 求和，并使用一致质量单位 | 气体/燃料量；碳含量；氧化比例；化石比例；可用时的直接测量 | kg 二氧化碳（化石源） |  |
| `calc_material_balance` | 固体材料路线 | 核对具体固体材料投入与合格产品、拒收品、切屑、其他逐一命名固体废物、库存变化和实测过程损失；调查并披露残差，不得创建未指定废物流 | 领用/退回材料；合格产品；拒收品；各固体废物；库存变化 | 材料平衡残差和完整性发现 | `eu-commission-2021-2053-fabricated-metal-products` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料投入 | 每个材料、耗材、废物和排放使用一个具体零件身份和一个具体流；保留图样版次、材料证书、供应商和批次追溯。 | 产品规范；材料证书；UUID 审计或已记录未解决身份 |
| `dq_measurement` | 所有实测交换 | 使用校准计量或秤，保留原始读数、单位、换算、分配键、零值/负值解释以及与账单或转移记录的核对。 | 校准证书；原始日志；核对和计算文件 |
| `dq_temporal` | 前景数据集 | 可用时使用有代表性的连续 12 个月；较短生产期应说明日期、产量、运行模式、异常事件和代表性限制。 | 带日期的生产、计量、库存和废物记录 |
| `dq_completeness` | 所声明制造路线 | 覆盖每个实际实施工序和每项直接原子交换；最小清单未表示的附加材料、化学品、燃料、废物、废水和基本流排放应逐一命名。 | 路线图；质量和能量核对；完整性审查 |
| `dq_supplier_data` | 链接上游的投入 | 记录供应商数据集身份、地理、技术、产品状态、期间、交付边界、替代和不确定性。 | 供应商声明；数据集元数据；代理理由 |
| `dq_range_gap` | 所有重要流 | 因没有外推经验范围满足两个独立来源要求，前景记录仍为必需。不得把缺少范围解释为可使用默认量。 | manifest 中的范围证据需求；采集协议记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 产品类别和参考流 | 确认适用 CPC 43949、排除电气和已单独分类零件、规范 PCR id 精确、输出为 1 kg 合格未包装零件，并具备全部必需产品限定信息。 | `un-cpc-3-0-structure-2025` |
| `validate_route` | 过程图和边界 | 确认披露每个已实施工序，排除每个未实施工序，并且每项外购投入有匹配上游数据集或已说明代理。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_atomic_inventory` | 过程清单 | 拒绝笼统或组合选定流。电力、水、每种气体、每种化学品、每项废物、每项废水和每种基本流排放应作为带路线条件的独立原子行。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_normalization` | 数量和单位 | 由保留的批次数据重算每一归一化行；核实 kWh-MJ 换算、气体参考条件、浓度计算、合格输出质量，并确认循环水或循环液未重复计算。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_mass_balance` | 固体材料路线 | 核对具体材料投入、合格产品、拒收品、切屑、其他每项固体废物、库存变化和实测损失；未解决残差是发现项，不得作为未命名废物流。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_emissions` | 直接化石源二氧化碳 | 确认只记录直接前景化石源 CO2，保留测量或计算基准，声明化石比例，并排除上游电力排放。 | `eu-commission-2021-2053-fabricated-metal-products` |
| `validate_allocation` | 共享和多功能工序 | 确认首先尝试细分，剩余分配键均遵循已记录因果物理关系，或采用有理由的最后关系并提供敏感性信息。 | `eu-recommendation-2021-2279-environmental-footprint` |
| `validate_uuid_status` | 清单身份 | 通过公开 state-100 直读确认每个已存 UUID。未解决行保持 UUID 空白并可见；不得替代为已拒绝、过窄、过宽、状态错误、分类错误或中英文冲突的候选。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 一个已声明非电气机械零件制造和验收的前景单元过程数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 对图样、材料、路线、地理、技术、期间、边界和分配均匹配的通用机械成品非电气零件开展归因型从摇篮到工厂大门建模。 |
| excluded_use | 电气零件；CPC 43941-43944 零件；专用机械零件；整机；缺少功能等效性的寿命比较；已包装产品；下游配送、使用、维护和生命末期。 |
| required_metadata | 规范 PCR id；CPC 适用性；零件和图样/版次；材料牌号和形态；净质量；路线工序；热处理和表面状态；设施地理；期间；计量和分配覆盖；合格/拒收质量；上游数据集；废物去向；未解决 UUID |
| required_quality_disclosure | 原始数据比例；计量和称量覆盖；校准；时间代表性；供应商数据质量；代理使用；材料平衡残差；共享计量分配；直接排放方法；缺失范围证据；不确定性和数据缺口 |
| update_trigger | 零件图样或材料牌号、路线、机器、热处理或表面处理、供应商组合、能源或气体来源、设施或地理、分配方法、直接排放方法、废物去向发生变化，或新确认 UUID 或兼容独立范围证据出现。 |

## 11. 数据源

| 来源 id | 类型 | 文献 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-06） | 产品类别身份、剩余层级和分类排除项。 |
| `eu-commission-2021-2053-fabricated-metal-products` | official_guidance | 欧盟委员会决定 (EU) 2021/2053，2021-11-08，金属制品制造业部门参考文件。https://publications.europa.eu/resource/cellar/1b58f2a1-4d96-11ec-91ac-01aa75ed71a1.0006.03/DOC_1（检索日期：2026-09-06） | 随工序变化的制造过程分解；能源、材料、金属加工液、水、废物及相关环境绩效监测。 |
| `eu-recommendation-2021-2279-environmental-footprint` | official_guidance | 欧盟委员会建议 (EU) 2021/2279，2021-12-15，环境足迹方法。https://publications.europa.eu/resource/cellar/af96b549-6912-11ec-9136-01aa75ed71a1.0006.01/DOC_1（检索日期：2026-09-06） | 多功能处理层级：细分或系统扩展、物理关系、再到其他有理由关系。 |
