---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.norway-lobsters-frozen-dried-salted-or-in-brine
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 冷冻、干制、盐腌或盐水浸泡的挪威龙虾

## 1. 范围与适用性

本 PCR 支持为生鲜状态的挪威龙虾（*Nephrops norvegicus*）建立前景数据包；产品可带壳或去壳，并采用一种已声明的保藏路线：冷冻、干制、盐腌或盐水浸泡。前景范围从加工厂接收符合条件的活鲜、鲜品或冷藏原料开始，覆盖准备、已声明的保藏路线、包装以及出厂前实际发生的场内储存。捕捞、养殖、上岸和进厂运输作为上游数据集输入；配送、零售、烹饪、消费和生命末期不在前景边界内。

本 PCR 不包括熟制、烟熏、罐藏或其他加工的挪威龙虾、其他龙虾物种，以及无法拆分成路线特定清单的多路线混合。除非分别建模各路线并披露汇总目的和加权记录，前景数据包不得平均冷冻、干制、盐腌和盐水浸泡生产。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.meat-fish-fruits-vegetables-oils-and-fats.norway-lobsters-frozen-dried-salted-or-in-brine |
| classification_refs | CPC 3.0: 21254（exact） |
| covered_products | 生鲜状态的 *Nephrops norvegicus*，带壳或去壳，冷冻、干制、盐腌或盐水浸泡 |
| excluded_products | 未进行已声明保藏步骤而以活鲜、鲜品或冷藏状态出售的产品；熟制、烟熏、罐藏或其他加工产品；其他龙虾物种；不可拆分的多路线平均清单 |
| representative_product | 按前景数据包所声明的单一路线保藏的生鲜状态挪威龙虾 |
| production_route | 接收和准备；冷冻、干制、盐腌或盐水浸泡中恰好一种；包装；适用时的场内储存 |
| market_state | 加工厂门口已包装保藏产品，并声明路线、带壳/呈现状态和储存条件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 适合已声明市场呈现形式的保藏生鲜状态挪威龙虾 |
| How much | 1 kg 产品净质量 |
| How well | *Nephrops norvegicus*；声明冷冻、干制、盐腌或盐水浸泡路线；声明带壳或去壳呈现形式；生鲜状态；满足食品安全放行准则 |
| How long or cycle | 一个生产批次直至加工厂门口发运，包括实际声明的场内储存时长 |
| reference_flow_link | `norway_lobster_preserved_net_mass` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 产品净质量 |
| 参考产品流 | 挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | species: *Nephrops norvegicus*；preservation route: frozen, dried, salted or brined；presentation: in shell or shell-off；raw state；net-mass method；free brine or glaze exclusion；packaging format；production geography and period；storage temperature and duration when applicable |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将全部清单结果归一化到加工厂门口发运的 1 kg 产品净质量。参考质量不包括包装、游离保藏盐水以及外部冰或冰衣；对包冰冷冻产品，按照 CXS 95-1981 一致地确定脱冰衣净质量。 |
| `mass_state` | 原料投入、准备后中间产品、产品、残余物和废水 | Mass | kg | 按批次记录称量质量和测量状态。声明是否包含外壳、表面水、吸收盐分、冰衣和游离盐水；不得混合湿基、沥干、脱冰衣和干物质基准。 |
| `energy_units` | 电力和热能 | Energy | kWh or MJ | 保留计量单位和换算因子。仅使用有记录的因子换算，并将电力与燃料或外购热分开。 |
| `storage_basis` | 制冷和储存投入 | Energy or Mass | kWh, MJ or kg | 记录实际储存时长、温度制度、设备范围和产品吞吐量；共享储存按第 7 节规则分配。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在加工厂门口接收活鲜、鲜品或冷藏的生鲜状态 *Nephrops norvegicus*，并记录来源、捕捞方式、呈现形式、温度和进料质量 |
| starting_condition_role | 前景加工系统的上游产品投入 |
| product_classification_scope | 对应 CPC 3.0 代码 21254 的保藏生鲜状态挪威龙虾；分类不能替代物种、路线和呈现形式的语义限定信息 |
| recursive_input_rule | 如果投入已属于本 PCR 范围内的产品，则将其记录为带上游数据集的外购保藏产品投入，不重复创建其保藏操作；披露数量和原因 |
| upstream_dataset_requirement | 对捕捞或养殖、上岸、冰/冷藏以及进厂运输使用与已声明原料来源相符的代表性上游数据集 |
| disclosure | 报告原料来源、野生或养殖来源、已知时的捕捞方式、进料状态、保藏路线、产品呈现形式、设施地理位置、生产期、储存制度以及任何排除或外包的操作 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route_separation` | 所有前景操作 | 纳入接收/准备、恰好一种已声明保藏路线、包装和适用的场内储存。保持路线特定投入和产出分开；不得建立无条件合并冷冻/干制/盐腌/盐水浸泡的清单。 | `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `boundary_upstream_inputs` | 生鲜状态龙虾、包装、盐、水、能源和辅助材料 | 将跨越加工厂门口的投入建模为连接代表性上游数据集的产品流。捕捞或养殖以及进厂运输保持为上游，除非研究明确扩展前景边界并披露该扩展。 | `eu-pef-2021-2279` |
| `boundary_food_safety` | 接收、准备、保藏、包装和储存 | 纳入设施前提方案和基于 HACCP 的食品安全体系所需的测量及控制记录；食品安全合规是放行条件，不是环境抵扣。 | `codex-cxc-52-2003`; `codex-cxs-95-1981` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `receive_prepare` | 原料接收和准备 | `required` | 始终纳入；仅记录实际执行的准备动作 | 建立批次身份、质量和卫生起始条件 | kg 准备后生鲜状态挪威龙虾 |
| `route_preservation` | 已声明保藏路线 | `required` | 恰好执行一种已声明路线：冷冻、干制、盐腌或盐水浸泡 | 在不混合路线清单的情况下形成保藏产品状态 | kg 包装前保藏产品 |
| `pack_product` | 包装和最终净质量确定 | `required` | 始终纳入 | 形成已包装加工厂门口产品和参考质量 | kg 不含包装、游离盐水和外部冰衣的净包装产品 |
| `store_dispatch` | 场内储存至发运 | `conditional` | 冷冻产品必须纳入，且任一路线在发运前发生储存时纳入 | 保持已声明产品状态直至加工厂门口发运 | kg 发运产品和储存时长记录 |

### 过程：原料接收和准备（`receive_prepare`）

#### 输入

##### 产品流

###### 符合条件的生鲜状态挪威龙虾（`raw_lobster_input`）

活鲜、鲜品或冷藏的生鲜状态 *Nephrops norvegicus* 携带上游数据集跨越加工厂门口边界。

- 选定流：Raw Norway lobster，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：按批次称量接收质量，并保留来源、温度、呈现形式和野生/养殖状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后生鲜状态挪威龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`unsd-cpc-3-0`; `codex-cxc-52-2003`

###### 准备用水和冰（`preparation_water_ice`）

记录为清洗、漂洗或冷却而跨越前景边界的饮用水或其他符合食品安全要求的水和冰。

- 选定流：Process water and ice，精确 Tiangong 流待审
- 流属性/单位：Volume or Mass / m3 or kg
- 数量规则：计量表、罐体差值或采购记录数量；分别报告水和冰并记录来源
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后生鲜状态挪威龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_records`
- 来源：`codex-cxc-52-2003`; `codex-cxs-95-1981`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 准备后生鲜状态挪威龙虾（`prepared_lobster`）

准备后龙虾是传递到已声明保藏路线的计量中间产品。

- 选定流：Prepared raw Norway lobster，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：按批次称量准备后质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后生鲜状态挪威龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxc-52-2003`

##### 废物流

###### 拒收龙虾和移除材料（`preparation_residuals`）

按去向及法定废物或共产品状态记录拒收物、外壳或其他移除材料。

- 选定流：Seafood preparation residual，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：按去向称量或根据质量平衡计算；仅在所有组成质量均有记录时允许计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后生鲜状态挪威龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxc-52-2003`

###### 准备废水（`preparation_wastewater`）

记录离开准备过程的废水，包括去向以及数量是计量还是由水平衡计算。

- 选定流：Seafood-processing wastewater，精确 Tiangong 流待审
- 流属性/单位：Volume / m3
- 数量规则：计量排放量，或保留投入与损失的水平衡计算量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备后生鲜状态挪威龙虾产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`codex-cxc-52-2003`

##### 基本流

### 过程：已声明保藏路线（`route_preservation`）

#### 输入

##### 产品流

###### 准备后龙虾投入（`preservation_lobster_input`）

记录投入单一已声明路线的准备后龙虾计量质量。

- 选定流：Prepared raw Norway lobster，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：按批次称量路线投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxc-52-2003`

###### 路线用水、冰或盐水用水（`route_water_ice`）

仅记录已声明路线使用的水或冰，包括冷冻产品包冰用水和盐水浸泡产品的盐水用水；未发生该投入时省略本行。

- 选定流：Process water or ice，精确 Tiangong 流待审
- 流属性/单位：Volume or Mass / m3 or kg
- 数量规则：按用途和路线分开的计量或批次记录数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_records`
- 来源：`codex-cxc-52-2003`; `codex-cxs-95-1981`

###### 盐投入（`preservation_salt`）

仅对盐腌或盐水浸泡生产记录食品级盐，并区分初始投料、补充量和可回收结转量。

- 选定流：Food-grade salt，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：称量批次领用量减去有记录的回收结转量；冷冻和未盐腌干制路线为零或省略
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_records`
- 来源：`codex-cxc-52-2003`

###### 电力和热能（`preservation_energy`）

记录冷冻、干燥、盐水循环或已声明路线实际运行的其他设备所用计量电力以及任何燃料或外购热。

- 选定流：Electricity, fuel or purchased heat，精确 Tiangong 流待审
- 流属性/单位：Energy / kWh or MJ
- 数量规则：路线分表用量；否则依 `allocation_shared_resources` 按有记录的设备时间、负荷和额定需求分配共享计量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_energy_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 路线特定保藏挪威龙虾（`preserved_lobster`）

记录产品质量和路线终点。冷冻产品应达到并维持适用产品规范要求的路线温度；干制、盐腌和盐水浸泡产品应保留路线特定终点和食品安全记录。

- 选定流：挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：包装前称量保藏产品，并声明路线和测量状态
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxc-52-2003`; `codex-cxs-95-1981`

##### 废物流

###### 保藏残余物和废盐水（`preservation_residuals`）

按去向分别记录不合格产品、细屑、废盐或废盐水以及其他路线残余物；不得将游离盐水合并进产品质量。

- 选定流：Route-specific food-processing residual or spent brine，精确 Tiangong 流待审
- 流属性/单位：Mass or Volume / kg or m3
- 数量规则：按残余物类型和去向计量批次排放量或记录完整的质量平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`codex-cxc-52-2003`

###### 保藏废水（`preservation_wastewater`）

记录离开过程边界的清洗、解冻、漂洗或盐水管理废水。

- 选定流：Seafood-processing wastewater，精确 Tiangong 流待审
- 流属性/单位：Volume / m3
- 数量规则：计量排放量或水平衡计算量；去向不同时与废盐水分开
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_emissions`
- 来源：`codex-cxc-52-2003`

##### 基本流

###### 保藏过程中释放的制冷剂（`preservation_refrigerant_loss`）

仅在制冷设备属于前景运行边界时纳入路线设备的制冷剂损失。

- 选定流：Refrigerant emission to air by actual substance，精确 Tiangong 基本流待审
- 流属性/单位：Mass / kg
- 数量规则：按物质区分、依据维修记录计算并分配到设备和报告期的损失；不得采用无来源的默认泄漏率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：报告期内每 kg 保藏产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`

### 过程：包装和最终净质量确定（`pack_product`）

#### 输入

##### 产品流

###### 保藏龙虾投入（`packaging_product_input`）

记录进入包装且不改变已声明路线的路线特定保藏产品。

- 选定流：挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次称量包装线投入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxs-95-1981`

###### 初级和次级包装（`packaging_materials`）

分别记录每种包装材料和采购部件，并在声称重复使用时记录可重复使用包装循环次数。

- 选定流：Packaging material by actual material and component，精确 Tiangong 流待审
- 流属性/单位：Mass or Items / kg or item
- 数量规则：将采购、领用或物料清单数量与包装件数核对；用有记录的单件质量换算件数
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 净包装产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 净包装参考产品（`norway_lobster_preserved_net_mass`）

这是参考流。产品净质量不包括包装、游离保藏盐水以及外部冰或冰衣，并保留已声明的带壳/呈现状态。

- 选定流：挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：应用 `calc_net_product_mass` 后的 1 kg 产品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：不适用（`not_applicable`）
- 归一化基准：1 kg 参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_lot_mass_route`
- 来源：`codex-cxs-95-1981`

##### 废物流

###### 包装废料（`packaging_scrap`）

按材料和去向分别记录生产线废料和拒收包装。

- 选定流：Packaging waste by material，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：计量废料或包装材料平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 净包装产品产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`eu-pef-2021-2279`

##### 基本流

### 过程：场内储存至发运（`store_dispatch`）

#### 输入

##### 产品流

###### 进入储存的已包装保藏产品（`stored_product_input`）

记录进入场内储存的已包装产品。本过程对冷冻产品为强制，对其他路线为有条件纳入。

- 选定流：挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量或核对进入储存的已包装产品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：`codex-cxs-95-1981`

###### 储存电力和热能（`storage_energy`）

记录维持已声明储存条件所用的实际电力和任何热能。

- 选定流：Electricity or purchased heat，精确 Tiangong 流待审
- 流属性/单位：Energy / kWh or MJ
- 数量规则：分表用量，或使用储存时间、占用容量和监控负荷进行有记录的共享仓库分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：声明储存时长内每 kg 发运产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：`codex-cxs-95-1981`; `eu-pef-2021-2279`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 发运保藏产品（`dispatched_product`）

记录发运质量、储存时长和条件。冷冻产品在本过程中应维持 -18 °C 或更低。

- 选定流：挪威龙虾，冷冻、干制、盐腌或盐水浸泡 `0906636d-b63a-40c2-b99a-d3df121fcac6`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按批次称量或核对发运质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 发运产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：`codex-cxs-95-1981`

##### 废物流

###### 储存损失（`storage_product_loss`）

按去向记录损坏、温度失控或其他原因拒收的产品。

- 选定流：Off-specification Norway lobster product，精确 Tiangong 流待审
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向称量储存损失
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 发运产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_storage_records`
- 来源：`codex-cxc-52-2003`; `codex-cxs-95-1981`

##### 基本流

###### 储存过程中释放的制冷剂（`storage_refrigerant_loss`）

按实际物质纳入范围内冷库的制冷剂损失。

- 选定流：Refrigerant emission to air by actual substance，精确 Tiangong 基本流待审
- 流属性/单位：Mass / kg
- 数量规则：按物质区分、依据维修记录计算并分配到冷库和报告期的损失；不得采用无来源的默认泄漏率
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：报告期内每 kg 发运产品
- 基准类型：储存时长（`storage_duration`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_refrigerant_records`
- 来源：`eu-pef-2021-2279`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_route_separation` | 多种保藏路线或实质不同的呈现形式 | 通过细分路线、生产线、批次和呈现形式避免分配。当可取得路线特定记录时，不得将合并的多路线清单分配给参考产品。 | `eu-pef-2021-2279` |
| `allocation_co_products` | 有市场价值的外壳、肉、残余物或其他共产品 | 首先寻求过程细分或有记录的物理因果关系。若不可行，则根据同期净收入使用经济关系，并报告价格、期间和敏感性；不得仅因产出为次要产出而分配零负荷。 | `eu-pef-2021-2279` |
| `allocation_shared_resources` | 共享水、能源、包装设备和储存 | 优先直接计量。否则使用有记录的物理驱动因子，例如设备时间和负荷、生产线吞吐量、占用冷库容量和储存时长；披露驱动因子并检验其是否实质改变结果。 | `eu-pef-2021-2279` |
| `allocation_waste_treatment` | 拒收物、废水、废盐水、包装废料和制冷剂损失 | 除非存在有记录的市场功能，不得将废物视为共产品。纳入边界内收集或处理操作和排放，并披露任何下游废物处理数据集以及回收或再生惯例。 | `eu-pef-2021-2279` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_lot_mass_route` | `receive_prepare`; `route_preservation`; `pack_product` | 批次身份、路线和质量平衡 | 地磅、秤、批次和放行记录 | lot_id; species; source; wild_or_farmed; incoming_state; route; presentation; raw_mass; prepared_mass; preserved_mass; packed_net_mass; free_brine_or_glaze_mass; residual_mass | 使用校准称量并以批次关联；在每次转移时记录路线和呈现形式 | kg | 每批次 | 代表性生产期，通常至少连续 12 个月或涵盖全部季节性生产期 | 所有范围内生产线和场址 | 按批次和路线求和；仅在质量状态核对后归一化 | 校准、批次追溯、放行记录和核对说明 |
| `cp_material_energy_records` | `receive_prepare`; `route_preservation` | 水、冰、盐、电力、燃料和热能 | 计量表、发票、储罐、批次领用和设备记录 | timestamp; meter_or_record_id; material_or_energy; quantity; unit; route; line; lot_or_period; allocation_driver | 优先直接分表或批次领用；将共享总量与发票核对 | 原始单位及换算后的 m3、kg、kWh 或 MJ | 每批次或计量间隔 | 与生产数据相同期间 | 所有范围内公用工程和路线设备 | 按路线和批次/期间求和；仅依 `allocation_shared_resources` 分配 | 计量校准、发票、换算因子和核对 |
| `cp_packaging_records` | `pack_product` | 包装投入和废料 | 物料清单、采购、领用和废料记录 | component_id; material; item_mass; items_issued; reusable_cycles; scrap_mass; packed_units; lot_id | 核对领用部件、包装件数、库存变化和废料 | kg and item | 每次包装生产 | 与生产数据相同期间 | 范围内所有初级和次级包装 | 使用实测单件质量换算件数；分别报告每种材料 | 供应商规格、单件质量抽样和库存核对 |
| `cp_storage_records` | `store_dispatch` | 储存质量、时间、温度和能源 | 仓库管理、温度记录仪和计量表记录 | lot_id; mass_in; mass_out; loss_mass; entry_time; exit_time; temperature_series; meter_use; occupied_capacity | 将发运批次关联到储存区间和监控条件 | kg; h or day; °C; kWh or MJ | 连续温度；每次入库/发运；每个计量间隔 | 与生产数据相同期间 | 所有范围内储存间 | 以产品时间和容量加权汇总；保留路线和温度制度 | 记录仪校准、报警、纠正措施和计量核对 |
| `cp_waste_and_emissions` | `receive_prepare`; `route_preservation`; `pack_product`; `store_dispatch` | 残余物、废水和去向 | 秤、流量计、联单和处理记录 | waste_id; type; mass_or_volume; unit; route; lot_or_period; destination; treatment; co_product_status | 按材料和去向分别测量；仅在无计量表时使用水平衡 | kg or m3 | 每批次、每次转运或报告间隔 | 与生产数据相同期间 | 所有范围内排放和废物点 | 按类型和去向求和；与质量和水平衡核对 | 联单、计量记录、处理发票和核对 |
| `cp_refrigerant_records` | `route_preservation`; `store_dispatch` | 制冷剂库存和维修平衡 | 设备台账、采购、充注、回收和维修记录 | equipment_id; refrigerant; opening_stock; purchases; charged; recovered; closing_stock; service_date; operating_scope | 按物质进行库存/维修平衡；排除前景边界外设备 | kg | 每次维修事件和年度核对 | 与生产数据相同期间 | 所有范围内制冷设备 | 按 `calc_refrigerant_loss` 计算损失，再分配到范围内吞吐量 | 维修证明、库存核对和设备台账 |
| `cp_food_safety_route` | `receive_prepare`; `route_preservation`; `pack_product`; `store_dispatch` | 路线终点和放行控制 | 适用的 HACCP、卫生、温度、盐度、水分和放行记录 | lot_id; route; control_point; limit; result; timestamp; corrective_action; release_status | 使用设施已验证的路线特定食品安全计划和适用 Codex 控制 | 路线特定 | 每个控制点和批次 | 与生产数据相同期间 | 每条已声明路线和生产线 | 不得将失败批次与放行批次平均；将异常关联到纠正措施 | HACCP 验证、监控、核查和放行授权 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_product_mass` | 已包装参考产品 | 产品净质量 = 装填容器毛质量 - 包装皮重 - 游离保藏盐水 - 外部冰或冰衣。使用法律适用的沥干或脱冰衣方法，并保留带壳/呈现状态。 | gross mass; packaging tare; free brine mass; external ice/glaze mass | kg 产品净质量 | `codex-cxs-95-1981` |
| `calc_route_yield` | 接收、准备和保藏 | 产率 = 同一批次和路线的保藏产品净质量 / 符合条件的生鲜状态龙虾投入质量。报告残余物去向并解释未核对质量；不得使用无来源默认产率。 | eligible raw mass; net preserved mass; residual and discharge records | 路线特定 kg/kg 产率和核对 | `codex-cxc-52-2003` |
| `calc_inventory_normalization` | 所有清单行 | 归一化数量 = 同一路线、场址和期间的已分配前景数量 / 发运产品净质量。 | foreground amount; allocation record; dispatched net product mass | 每 1 kg 参考流的数量 | `eu-pef-2021-2279` |
| `calc_refrigerant_loss` | 制冷设备 | 制冷剂损失 = 期初库存 + 采购量 + 充注量 - 回收量 - 期末库存；与维修记录核对并仅限范围内设备。 | substance-specific stock and service fields | 分配前按物质区分的 kg 制冷剂排放 | `eu-pef-2021-2279` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_traceability` | 原料投入和参考产品 | 证明 *Nephrops norvegicus* 身份、批次追溯、路线、生鲜状态、呈现形式和加工厂门口净质量基准。 | 供应商/上岸记录、物种识别、批次记录、标签和放行记录；`unsd-cpc-3-0`; `codex-cxs-95-1981` |
| `dq_temporal_geographic_technology` | 所有前景数据 | 使用代表已声明场址、技术、季节性生产和报告期的数据；披露缺口、外包操作和替代项。 | 场址清单、设备台账、生产日历和代表性评估；`eu-pef-2021-2279` |
| `dq_completeness_reconciliation` | 质量、水、能源、包装、废物和制冷剂记录 | 在路线和报告期层级核对投入与产出。调查而不是静默填补实质缺口；报告数据覆盖率和估算占比。 | 质量/水/能源平衡、发票、计量覆盖和缺口日志；`eu-pef-2021-2279` |
| `dq_measurement_quality` | 计量和称量记录 | 保留单位、校准状态、抽样频率、换算因子和责任数据所有者。 | 校准证书、原始导出、秤记录和计算工作簿 |
| `dq_food_safety_records` | 所有已声明路线 | 保留已验证的路线特定控制、监控、纠正措施和放行证据。冷冻产品记录应证明适用的冷冻和储存条件。 | HACCP 和放行记录；`codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `dq_provisional_values` | 缺失的前景数量 | 未经评审证据不得引入数值默认值或 QA 范围。任何临时估计应标记为 `reasoned_estimate`、记录为可替换并在数据质量披露中报告。 | 数据缺口登记和评审决定 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 产品流 UUID、Mass 属性 UUID、单位组 UUID、1 kg 数量、物种、生鲜状态、路线、呈现形式或净质量限定信息缺失或不一致时失败。 | `unsd-cpc-3-0`; `codex-cxs-95-1981` |
| `validate_single_route` | 过程图和清单 | 未声明保藏路线、在无独立清单时合并多条路线，或将路线特定投入无条件应用到其他路线时失败。 | `unsd-cpc-3-0`; `codex-cxc-52-2003` |
| `validate_mass_and_units` | 批次和归一化清单 | 参考质量包含包装、游离盐水或外部冰衣，质量状态未经换算即混合，或批次投入、产品和残余物无记录核对时失败。 | `codex-cxs-95-1981` |
| `validate_route_controls` | 保藏和储存 | 缺失适用食品安全放行记录时失败。对于冷冻产品，稳定后热中心未达到 -18 °C 或更低，或储存未维持 -18 °C 或更低时失败。 | `codex-cxc-52-2003`; `codex-cxs-95-1981` |
| `validate_allocation` | 共产品和共享资源 | 仍存在可避免的路线汇总、分配驱动因子缺少记录、有市场价值的共产品无理由分配零负荷，或未披露废物惯例时失败。 | `eu-pef-2021-2279` |
| `validate_data_completeness` | 前景数据包 | 必需协议遗漏路线/场址/期间覆盖、隐藏实质数据缺口，或任何数值临时值未标记为 `reasoned_estimate` 并披露为可替换时失败。 | `eu-pef-2021-2279` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 挪威龙虾保藏生鲜状态产品在加工厂门口的前景产品系统数据集 |
| downstream_use | `secondary_dataset`；在范围、代表性和数据质量评审后可作 `background_dataset` |
| allowed_use | 与物种、生鲜状态、呈现形式、地理、技术、期间和加工厂门口边界相符的路线特定过程或生命周期建模 |
| excluded_use | 活鲜/鲜品/冷藏、熟制、烟熏、罐藏或其他龙虾产品；其他物种；未披露的多路线平均；未由所连接上游数据集支持的捕捞/养殖声明 |
| required_metadata | PCR id；CPC reference；product-flow UUID；species；raw state；preservation route；presentation；net-mass method；site and geography；technology；reporting period；raw-material source；allocation method；storage temperature and duration；upstream datasets |
| required_quality_disclosure | 协议覆盖；计量/称量占比；估算占比；质量/水/能源核对；代表性；路线控制；分配驱动因子；非参考 UUID 缺口；临时 `reasoned_estimate` 值及替换计划 |
| update_trigger | 物种/范围、保藏路线、生产线技术、能源或制冷剂系统、包装、共产品市场、分配驱动因子、上游来源、场址组合、法规或食品安全规范发生变化；或获得新的已评审定量证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0` | `official_guidance` | United Nations Statistics Division, Central Product Classification Version 3.0, official structure and explanatory notes, https://unstats.un.org/unsd/classifications/Econ/cpc（检索于 2026-08-11） | 产品类别范围、*Nephrops norvegicus* 身份和保藏路线排除项 |
| `codex-cxc-52-2003` | `standard` | Codex Alimentarius, CXC 52-2003, Code of Practice for Fish and Fishery Products, https://www.fao.org/4/a1553e/a1553e00.pdf（检索于 2026-08-11） | 过程分解、前提方案、基于 HACCP 的控制、卫生操作、路线和储存记录 |
| `codex-cxs-95-1981` | `standard` | Codex Alimentarius, CXS 95-1981, Standard for Quick-Frozen Lobsters, amended 2024, https://openknowledge.fao.org/handle/20.500.14283/ce0070en（检索于 2026-08-11） | 挪威龙虾物种和冷冻路线定义、-18 °C 终点/储存、包冰用水、脱冰衣净质量、标签和放行检查 |
| `eu-pef-2021-2279` | `official_guidance` | European Commission, Recommendation (EU) 2021/2279 on the use of Environmental Footprint methods, CELEX 32021H2279, https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32021H2279（检索于 2026-08-11） | 边界一致性、分配层级、共享资源分配、包装、数据质量、完整性和披露 |
