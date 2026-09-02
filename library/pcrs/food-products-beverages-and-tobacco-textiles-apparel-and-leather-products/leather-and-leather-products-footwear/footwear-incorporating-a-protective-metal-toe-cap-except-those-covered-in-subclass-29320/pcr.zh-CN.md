---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-incorporating-a-protective-metal-toe-cap-except-those-covered-in-subclass-29320
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 装有防护金属包头的鞋类（29320 子类所涵盖者除外）

## 1. 范围与适用性

本 PCR 适用于防护功能依赖内置金属包头、且归入 CPC 3.0 代码 29510 的成品鞋类。它支持从外购鞋面、里料、内底、防护件、鞋底、紧固件和包装组件开始，经过裁切、鞋帮装配、绷楦与鞋底结合、整理、检验和包装，形成工厂门前景数据包。

本 PCR 不包括 CPC 29320 子类鞋类、不带防护金属包头的鞋类、仅使用非金属包头的防护鞋、单独鞋类零件、使用阶段养护、分销和寿命终止。上游皮革、纺织品、钢材、聚合物、胶黏剂、化学品、能源和包装生产应使用可追溯上游数据集表示，不在鞋类装配边界内重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.leather-and-leather-products-footwear.footwear-incorporating-a-protective-metal-toe-cap-except-those-covered-in-subclass-29320 |
| classification_refs | CPC 3.0：29510，精确范围参考 |
| covered_products | 装有防护金属包头且不归入 CPC 29320 子类的职业或防护成品鞋类 |
| excluded_products | CPC 29320 鞋类；不带防护金属包头的鞋类；仅以复合材料或塑料包头提供防护的鞋类；单独鞋类零件；非鞋类防护装备 |
| representative_product | 一个指定型号、在工厂门完成检验和包装的防护金属包头成品鞋 |
| production_route | 组件接收；裁切与准备；鞋帮缝制与粘接；金属包头集成；绷楦；按声明路线进行鞋底粘接、模塑或硫化；整理；检验；包装 |
| market_state | 工厂门成品鞋，已包装并准备进入分销 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为指定型号提供所声明的足部防护、合脚、支撑和行走功能，且内置防护金属包头 |
| How much | 工厂门 1 kg 防护成品鞋 |
| How well | 符合所声明的型号规范、包头材料与防护性能、尺码范围、结构路线和质量等级 |
| How long or cycle | 声明的预期使用寿命或使用周期基准；无产品特定证据时不规定默认寿命 |
| reference_flow_link | 实现所声明功能所需的合格成品鞋净质量；本工厂门声明单位 PCR 采用 1 kg |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 装有保护性金属趾盖的鞋类，但第 29320 小类所列者除外 `7c000468-f61e-4e05-8509-52da9fd77874` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 鞋型及预期防护用途；针对 29320 的 CPC 排除核查；金属包头材料与规范；鞋面材料；里料；内底和中底结构；外底材料；鞋底结合路线；尺码范围；产品净质量；按质量计的物料清单；胶黏剂和清洗剂配方；包装配置；工厂门地理位置；生产期 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 报告不含运输包装的合格成品鞋净质量；每个包装组件单独记录。 |
| `pair_to_mass` | 按双或件记录的数据 | Mass | kg | 使用相同型号和尺码组合的实测质量转换双数或件数，并保留计数、样本质量和抽样基准。 |
| `bom_mass_consistency` | 材料和组件输入 | Mass | kg | 对生产批次的 BOM 数量、领用、退回、报废和装入质量进行核对。 |
| `energy_conversion` | 电力、蒸汽、热水和天然气 | Energy | kWh 或 MJ | 保留计量原单位并记录每个换算因子；不得将不同能源载体合并成一个交换。 |

## 5. 系统边界

前景边界始于外购材料和组件进入制鞋场址，止于合格鞋类及单独记录的包装离开工厂门。边界包括组件准备、鞋帮装配、金属包头集成、绷楦、鞋底粘接或模塑、路线特定的加热与冷却、整理、检验、返工和包装。跨越边界的每种材料、载体、化学品、废物和直接排放均单独记录。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品特定的鞋面、里料、防护金属包头、内底、外底、紧固件、化学品和包装组件进入场址，并具有供应商、组成、质量和批次记录。 |
| starting_condition_role | 外购组件是上游产品输入；前景系统实施鞋类转化和装配，而非原生材料生产。 |
| product_classification_scope | CPC 3.0 代码 29510 下装有防护金属包头的成品鞋类，并明确排除 CPC 29320 子类产品。 |
| recursive_input_rule | 外购的本类别成品或半成品鞋类作为一个带独立数据集的上游产品输入记录，不在当前前景数据包内递归拆解。 |
| upstream_dataset_requirement | 对皮革、纺织品、钢包头、内底板、外底、勾心、缝线、胶黏剂、溶剂、电力、热载体、燃料、制冷剂、水和包装使用可追溯上游数据集，并披露代理。 |
| disclosure | 声明型号、防护用途、分类排除核查、完整 BOM、包头规范、结构和鞋底路线、纳入的场址和分包方、能源与化学品路线、废物、直接排放、包装、地理位置和生产期。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景生产 | 纳入从组件接收到工厂门包装合格鞋类的所有企业控制和分包操作。 | `eu-pef-2021`; `af-pefcr-3-1` |
| `boundary_upstream_materials` | 外购产品 | 使用上游数据集表示材料和组件生产，并在前景清单中保留产品特定 BOM 数量。 | `eu-pef-2021`; `af-pefcr-3-1` |
| `boundary_scope_exclusion` | 产品身份 | 排除 CPC 29320 子类及所有未内置防护金属包头的鞋类。 | `un-cpc-3-2025` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_preparation` | 组件接收、裁切与准备 | `required` | 始终纳入 | 前景材料准备 | 每批次准备组件 kg |
| `upper_assembly` | 鞋帮缝制、粘接与包头集成 | `required` | 始终纳入 | 前景鞋帮装配 | 每批次防护鞋帮 kg |
| `sole_attachment` | 绷楦、鞋底结合、模塑或硫化 | `required` | 始终纳入；路线特定载体仅在使用时适用 | 前景底部装配 | 每批次未整理防护鞋 kg |
| `finishing_packaging` | 整理、检验与包装 | `required` | 始终纳入 | 前景完工 | 1 kg 合格成品鞋 |

### 过程：组件接收、裁切与准备（`component_preparation`）

#### 输入

##### 产品流

###### 成品牛鞋面革（`upper_leather`）

发往裁切的鞋面革按供应商批次、涂饰、厚度、面积和实测质量记录。

- 选定流：Finished bovine upper leather
- 流属性/单位：Mass / kg
- 数量规则：发往裁切的验收实测质量减去有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

###### 聚酯鞋里织物（`lining_fabric`）

聚酯里料与鞋面革及其他纺织组件分开，依据领用和退回记录计量。

- 选定流：Polyester footwear lining fabric
- 流属性/单位：Mass / kg
- 数量规则：里料实测领用质量减去有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

###### 防护钢包头（`protective_steel_toe_cap`）

内置防护钢包头与其他钢制零件分开记录，并与型号 BOM 核对。

- 选定流：Protective steel toe cap
- 流属性/单位：Mass / kg
- 数量规则：生产批次装入包头的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`un-cpc-3-2025`; `af-pefcr-3-1`

###### 纤维素内底板（`cellulose_insole_board`）

内底板作为独立组件跟踪，以便核对裁切损耗和装入量。

- 选定流：Cellulose insole board
- 流属性/单位：Mass / kg
- 数量规则：内底板实测领用质量减去有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

###### 组件裁切电力（`electricity_cutting`）

裁切、削薄、片皮、抽排和准备设备用电仅记录在本阶段。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或设备功率乘运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 裁切鞋面革件（`cut_leather_upper_pieces`）

验收合格的牛皮鞋面裁片在裁切后称重，并与里料和内底裁片分开转移。

- 选定流：Cut bovine-leather upper pieces
- 流属性/单位：Mass / kg
- 数量规则：转移至鞋帮装配的合格鞋面革裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：

###### 裁切聚酯里料件（`cut_lining_pieces`）

验收合格的聚酯里料裁片作为单独的中间交换称重。

- 选定流：Cut polyester footwear-lining pieces
- 流属性/单位：Mass / kg
- 数量规则：转移至鞋帮装配的合格里料裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：

###### 经检验防护钢包头（`prepared_steel_toe_cap`）

验收合格的防护钢包头在转移至鞋帮装配前单独计数并称重。

- 选定流：Inspected protective steel toe cap
- 流属性/单位：Mass / kg
- 数量规则：转移至鞋帮装配的合格包头实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：

###### 裁切纤维素内底板（`cut_insole_board`）

验收合格的内底板裁片单独称重并转移至鞋底结合，不与鞋帮组件聚合。

- 选定流：Cut cellulose insole board
- 流属性/单位：Mass / kg
- 数量规则：转移至鞋底结合的合格内底板裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每准备批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：

##### 废物流

###### 鞋面革裁切边角料（`leather_cutting_offcuts`）

离开裁切的皮革边角料与留在库存中的可复用片料分开称重。

- 选定流：Upper-leather cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处置路线的边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

###### 聚酯里料裁切边角料（`lining_cutting_offcuts`）

聚酯里料边角料作为独立纺织废物流计量，不与皮革废物合并。

- 选定流：Polyester lining cutting offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处置路线的边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

###### 纤维素内底板边角料（`insole_board_offcuts`）

内底板边角料单独称重，使板材质量平衡可审计。

- 选定流：Cellulose insole-board offcuts
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处置路线的边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 准备组件产出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_component_preparation`
- 来源：`af-pefcr-3-1`

##### 基本流

### 过程：鞋帮缝制、粘接与包头集成（`upper_assembly`）

#### 输入

##### 产品流

###### 裁切鞋面革件输入（`cut_leather_upper_input`）

来自准备过程的鞋面革裁片保留同一批次身份，以防遗失或重复计算。

- 选定流：Cut bovine-leather upper pieces
- 流属性/单位：Mass / kg
- 数量规则：从组件准备接收的鞋面革裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：

###### 裁切聚酯里料件输入（`cut_lining_input`）

聚酯里料裁片与鞋面革裁片分开接收和核对。

- 选定流：Cut polyester footwear-lining pieces
- 流属性/单位：Mass / kg
- 数量规则：从组件准备接收的里料裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：

###### 经检验防护钢包头输入（`prepared_steel_toe_cap_input`）

经检验钢包头按批次物料清单接收，并与其他钢制零件保持分离。

- 选定流：Inspected protective steel toe cap
- 流属性/单位：Mass / kg
- 数量规则：从组件准备接收的包头实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：

###### 聚酯缝纫线（`polyester_sewing_thread`）

装入鞋帮的聚酯线依据领退记录或线轴消耗实测。

- 选定流：聚酯缝纫线
- 流属性/单位：Mass / kg
- 数量规则：缝线实测领用量减退回量和单独计量的废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：`af-pefcr-3-1`

###### 聚氨酯鞋帮装配胶黏剂（`polyurethane_assembly_adhesive`）

用于鞋帮粘接和包头定位的聚氨酯胶按配方产品质量记录。

- 选定流：Polyurethane footwear adhesive
- 流属性/单位：Mass / kg
- 数量规则：配方胶黏剂实测领用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：`af-pefcr-3-1`

###### 乙酸乙酯清洗剂（`ethyl_acetate_cleaner`）

仅在使用该具体化学品清洁或活化粘接表面时记录乙酸乙酯。

- 选定流：Ethyl acetate
- 流属性/单位：Mass / kg
- 数量规则：依据采购和库存核对得到的化学品实测输入
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：`af-pefcr-3-1`

###### 鞋帮装配电力（`electricity_upper_assembly`）

缝制、粘接、抽排和包头集成用电与其他阶段分开记录。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或设备功率乘运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 装配防护鞋帮（`assembled_protective_upper`）

内置金属包头的装配鞋帮在绷楦和鞋底结合前称重。

- 选定流：Assembled protective footwear upper
- 流属性/单位：Mass / kg
- 数量规则：转移至鞋底结合的合格鞋帮实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每装配批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：

##### 废物流

###### 固化聚氨酯胶残渣（`cured_adhesive_residue`）

从工具或不合格粘接件清除的固化胶残渣与液态化学废物分开称重。

- 选定流：Cured polyurethane adhesive residue
- 流属性/单位：Mass / kg
- 数量规则：送往声明处置路线的残渣实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：`af-pefcr-3-1`

###### 带残留物的空钢制胶黏剂容器（`empty_adhesive_container`）

残留胶黏剂的空钢容器作为独立危险或受控废物流计量。

- 选定流：Empty steel adhesive container with residue
- 流属性/单位：Mass / kg
- 数量规则：转移出场址的容器实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_upper_assembly`
- 来源：

##### 基本流

###### 排放到空气的乙酸乙酯（`ethyl_acetate_to_air`）

乙酸乙酯直接损失依据经核对的场址化学品平衡或排放监测计算。

- 选定流：Ethyl acetate to air
- 流属性/单位：Mass / kg
- 数量规则：监测排放，或化学品输入减回收、留存、退回和废物量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 装配防护鞋帮
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_upper_assembly`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

### 过程：绷楦、鞋底结合、模塑或硫化（`sole_attachment`）

#### 输入

##### 产品流

###### 装配防护鞋帮输入（`assembled_upper_input`）

装配防护鞋帮以同一生产批次身份进入底部装配。

- 选定流：Assembled protective footwear upper
- 流属性/单位：Mass / kg
- 数量规则：从鞋帮装配接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每鞋底结合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：

###### 裁切纤维素内底板输入（`cut_insole_board_input`）

从准备过程接收的内底板裁片与装配鞋帮和鞋底部件分开称重。

- 选定流：Cut cellulose insole board
- 流属性/单位：Mass / kg
- 数量规则：从组件准备接收的内底板裁片实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每鞋底结合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：

###### 硫化橡胶外底（`vulcanized_rubber_outsole`）

声明型号使用硫化橡胶外底时单独记录，不与聚氨酯外底合并。

- 选定流：Vulcanized rubber footwear outsole
- 流属性/单位：Mass / kg
- 数量规则：批次装入外底的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`af-pefcr-3-1`

###### 聚氨酯外底（`polyurethane_outsole`）

仅对使用该鞋底材料的型号记录聚氨酯外底，不与橡胶外底合并。

- 选定流：Polyurethane footwear outsole
- 流属性/单位：Mass / kg
- 数量规则：批次装入外底的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`af-pefcr-3-1`

###### 钢制鞋勾心（`steel_shank`）

声明型号装入钢勾心时，该部件与防护包头分开记录。

- 选定流：Steel footwear shank
- 流属性/单位：Mass / kg
- 数量规则：批次装入勾心的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`af-pefcr-3-1`

###### 聚氨酯鞋底粘接胶（`polyurethane_sole_adhesive`）

胶粘结构路线的鞋底粘接胶作为独立配方化学品记录。

- 选定流：Polyurethane sole-attaching adhesive
- 流属性/单位：Mass / kg
- 数量规则：配方胶黏剂实测领用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`af-pefcr-3-1`

###### 鞋底结合电力（`electricity_sole_attachment`）

绷楦、压合、模塑、硫化控制、抽排和输送用电仅归入本阶段。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或设备功率乘运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

###### 外购蒸汽（`purchased_steam`）

仅在路线特定加热或硫化使用跨场址边界供应的蒸汽时记录。

- 选定流：外购蒸汽
- 流属性/单位：Energy / MJ
- 数量规则：使用蒸汽质量、压力和焓基准计算的计量蒸汽能量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

###### 工艺热水（`process_hot_water`）

供应至过程的热水与蒸汽和生活用水分开记录。

- 选定流：Process hot water
- 流属性/单位：Energy / MJ
- 数量规则：根据实测水质量、入口温度、出口温度和有记录的比热计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`

###### 天然气（`natural_gas`）

场内热力设备燃烧的天然气与外购热力分开记录。

- 选定流：天然气
- 流属性/单位：Energy / MJ
- 数量规则：计量燃料量按账单记录的热值换算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

###### R-134a 制冷剂补充（`refrigerant_r134a`）

仅对含该具体制冷剂的工艺冷却设备记录 R-134a 补充量。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a)
- 流属性/单位：Mass / kg
- 数量规则：依据维修记录和钢瓶库存得到的制冷剂实测充注量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 未整理防护金属包头鞋（`unfinished_protective_footwear`）

完成底部装配的鞋在整理、检验和包装前称重。

- 选定流：Unfinished protective metal-toe footwear
- 流属性/单位：Mass / kg
- 数量规则：转移至整理的合格产出实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每鞋底结合批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：

##### 废物流

###### 硫化橡胶外底修边料（`rubber_outsole_trimmings`）

鞋底整理产生的橡胶修边废物与皮革、纺织和聚氨酯废物分开称重。

- 选定流：Vulcanized-rubber outsole trimmings
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处置路线的修边料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_sole_attachment`
- 来源：`af-pefcr-3-1`

##### 基本流

###### 排放到空气的化石二氧化碳（`carbon_dioxide_fossil_to_air`）

场内天然气燃烧产生的直接化石二氧化碳依据燃料计量和适用的有记录因子计算。

- 选定流：化石源二氧化碳，排入空气
- 流属性/单位：Mass / kg
- 数量规则：天然气能量乘场址或法域有记录的因子
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`

###### 排放到空气的 R-134a（`r134a_to_air`）

R-134a 直接损失依据制冷剂库存和维修记录计算，不与其他制冷剂合并。

- 选定流：1,1,1,2-Tetrafluoroethane (R-134a) to air
- 流属性/单位：Mass / kg
- 数量规则：期初库存加采购减期末库存、回收量和场外转移量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 未整理防护鞋
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_sole_attachment`
- 来源：`eu-pef-2021`

### 过程：整理、检验与包装（`finishing_packaging`）

#### 输入

##### 产品流

###### 未整理鞋输入（`unfinished_footwear_input`）

未整理防护鞋以鞋底结合阶段的同一批次身份进入整理。

- 选定流：Unfinished protective metal-toe footwear
- 流属性/单位：Mass / kg
- 数量规则：从鞋底结合接收的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每整理批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：

###### 整理电力（`electricity_finishing`）

清洁、抛光、检验、测试和包装用电仅记录在本阶段。

- 选定流：低压电力
- 流属性/单位：Energy / kWh
- 数量规则：分表计量，或设备功率乘运行时间计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

###### 整理工艺水（`process_water_finishing`）

仅对水基清洁或整理记录工艺水，并与生活用水分开。

- 选定流：过程用水
- 流属性/单位：Volume / m3
- 数量规则：跨越前景过程边界的计量或批次投加工艺水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

###### 水性鞋油（`water_based_shoe_polish`）

声明鞋型使用水性鞋油时，按配方产品质量记录。

- 选定流：Water-based shoe polish
- 流属性/单位：Mass / kg
- 数量规则：鞋油实测领用量减有记录的退回量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1`

###### 瓦楞纸板鞋盒（`corrugated_carton`）

随鞋出厂的瓦楞纸盒与塑料包装分开称重。

- 选定流：Corrugated paperboard footwear carton
- 流属性/单位：Mass / kg
- 数量规则：分配至出货批次的纸盒实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1`

###### 低密度聚乙烯鞋袋（`ldpe_packaging_bag`）

随产品出厂的 LDPE 袋作为独立包装组件记录。

- 选定流：Low-density polyethylene footwear bag
- 流属性/单位：Mass / kg
- 数量规则：分配至出货批次的袋实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 防护金属包头成品鞋（`finished_protective_footwear`）

这是工厂门检验合格的鞋类，按运输包装前的产品净质量计量。

- 选定流：装有保护性金属趾盖的鞋类，但第 29320 小类所列者除外 `7c000468-f61e-4e05-8509-52da9fd77874`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份参考（`identity_reference`）
- 来源：

##### 废物流

###### 不合格防护金属包头鞋（`rejected_protective_footwear`）

离开前景系统的不合格成品鞋与可返工在制品分开称重。

- 选定流：Rejected protective metal-toe footwear
- 流属性/单位：Mass / kg
- 数量规则：送往声明回收或处置路线的不合格品实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`af-pefcr-3-1`

###### 鞋类整理废水（`finishing_wastewater`）

水基整理废水与生活污水分开计量，并关联其处理路线。

- 选定流：Footwear finishing wastewater
- 流属性/单位：Volume / m3
- 数量规则：水基整理的计量排水量或水量平衡结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品鞋
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_packaging`
- 来源：`eu-pef-2021`; `af-pefcr-3-1`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用前景操作 | 应优先按型号或批次拆分或计量组件准备、装配、鞋底结合、整理和包装，再采用分配。 | `eu-pef-2021`; `af-pefcr-3-1` |
| `allocation_physical_mass` | 无法避免的共用负荷 | 无法拆分且产品接受可比加工时，按合格产品净质量分配共用负荷，并说明物理关系。 | `eu-pef-2021` |
| `allocation_rework_rejects` | 返工和不合格品 | 将返工负荷保留在产生返工的批次；从合格产出中排除不合格质量并报告回收或处置路线。 | `af-pefcr-3-1` |
| `allocation_recovered_scrap` | 销售或内部回收的废料 | 将回收材料作为单独输出定量并披露下游处理；除非下游方法要求，不在前景清单内计入避免生产信用。 | `eu-pef-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_preparation` | `component_preparation` | 材料输入、电力、四种准备组件产出和三种裁切废物流 | 接收、领退、BOM、称重、计量和废物转移记录 | batch_id; model; material_id; supplier_lot; issued_kg; returned_kg; cut_leather_output_kg; cut_lining_output_kg; inspected_toe_cap_output_kg; cut_insole_board_output_kg; electricity_kWh; leather_offcut_kg; lining_offcut_kg; board_offcut_kg; treatment_route | 用校准秤、仪表和批次谱系核对产品特定领退记录 | kg; kWh | 每批次，按月汇总 | 经论证并披露缺口的代表性生产期或完整生产期 | 所有纳入的裁切场址和分包方 | 汇总关联批次并除以合格成品产出；留存可复用库存不计为废物 | 秤和仪表校准；采购和领用记录；BOM 修订；废物转移记录；批次谱系 |
| `cp_upper_assembly` | `upper_assembly` | 鞋面革裁片、里料裁片、钢包头、缝线、胶黏剂、清洗剂、电力、产出、废物和乙酸乙酯排放 | 批次流转卡、领退日志、化学品库存、仪表、秤、废物联单及排放或平衡记录 | batch_id; cut_leather_input_kg; cut_lining_input_kg; inspected_toe_cap_input_kg; thread_kg; adhesive_input_kg; adhesive_return_kg; ethyl_acetate_input_kg; electricity_kWh; upper_output_kg; cured_residue_kg; container_waste_kg; ethyl_acetate_air_kg | 将所有材料和化学品流动与装配鞋帮产出及化学品平衡核对 | kg; kWh | 材料每批次；能源和排放按月 | 经论证并披露缺口的代表性生产期或完整生产期 | 所有纳入的鞋帮装配场址和分包方 | 汇总关联记录，仅根据经核对项计算化学品损失，并按产出归一化 | BOM；秤和仪表校准；化学品库存；废物联单；监测或签署平衡 |
| `cp_sole_attachment` | `sole_attachment` | 鞋帮、内底板、外底与勾心组件、胶黏剂、能源载体、制冷剂、产出、废物和直接排放 | 批次记录、领退日志、公用工程仪表、燃料账单、维修日志、秤和废物记录 | batch_id; upper_input_kg; insole_board_input_kg; outsole_type; outsole_kg; shank_kg; adhesive_kg; electricity_kWh; steam_kg; steam_pressure; hot_water_kg; inlet_temperature; outlet_temperature; natural_gas_quantity; calorific_value; r134a_charge_kg; r134a_recovered_kg; output_kg; rubber_waste_kg | 分别计量或计算各载体，并核对材料、燃料和制冷剂记录 | kg; kWh; MJ | 材料每批次；公用工程和排放按月 | 经论证并披露缺口的代表性生产期或完整生产期 | 所有纳入的绷楦和鞋底结合场址 | 将关联批次总量按产出归一化；保留载体特定数量和换算 | 仪表校准；账单；设备日志；维修记录；秤校准；排放计算 |
| `cp_finishing_packaging` | `finishing_packaging` | 中间品输入、电力、水、鞋油、包装、产品、不合格品和废水 | 批次记录、仪表、领退日志、包装规范、秤、检验日志、排水记录和废物联单 | batch_id; unfinished_input_kg; electricity_kWh; process_water_m3; polish_input_kg; polish_return_kg; carton_kg; ldpe_bag_kg; finished_output_kg; rejected_kg; wastewater_m3 | 计量公用工程、核对材料、称量产品和废物，并将检验处置与批次关联 | kg; kWh; m3 | 材料每批次；公用工程按月 | 经论证并披露缺口的代表性生产期或完整生产期 | 所有纳入的整理和包装场址 | 汇总关联记录并除以合格成品净质量 | 仪表和秤校准；包装规范；检验日志；排水记录；废物联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有前景交换 | 归一化交换量 = 关联批次交换量 / 合格成品鞋净质量 | batch exchange; finished_output_kg | 每 1 kg 成品鞋的交换量 | `eu-pef-2021`; `af-pefcr-3-1` |
| `calc_pair_to_mass` | 基于双数的记录 | 换算质量 = 双数 × 相同型号和有记录尺码组合的实测平均质量 | pair count; sampled mass; sampled count; size mix | 指定组件或产品 kg | `af-pefcr-3-1` |
| `calc_material_balance` | 各准备和装配阶段 | 输入 + 期初库存 = 产出 + 退回 + 废物 + 期末库存 + 有记录残差；调查而非强制抹平未解释残差 | stage-specific mass records | 质量平衡残差 | `eu-pef-2021`; `af-pefcr-3-1` |
| `calc_hot_water_energy` | 工艺热水 | 能量 = 实测水质量 × 有记录比热 × 温升 | water mass; inlet and outlet temperature; heat capacity | 热水能量 MJ | `eu-pef-2021` |
| `calc_refrigerant_loss` | R-134a 冷却系统 | 损失 = 期初库存 + 采购 − 期末库存 − 回收制冷剂 − 场外转移 | refrigerant inventory and service records | 排放到空气的 R-134a kg | `eu-pef-2021` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明精确 CPC 29510 范围、内置防护金属包头及不属于 CPC 29320 子类。 | 产品规范、包头技术记录、照片或技术说明及分类审查 |
| `dq_product_bom` | 物料清单 | 使用型号和修订特定 BOM，并核对材料领用、退回、装入质量和损耗。 | 批准 BOM、采购与领用记录、秤及质量平衡 |
| `dq_primary_data` | 前景操作 | 对所有纳入场址和分包方的材料、能源、化学品、产品、废物和直接排放使用企业特定记录。 | 仪表、秤、账单、日志、联单、监测和分包方声明 |
| `dq_temporal` | 声明期间或生产期数据集 | 使用经论证的代表性生产期或完整生产期，并披露停产、异常生产和缺口。 | 生产日历、期间完整性报告和缺口日志 |
| `dq_transparency` | 数据缺口和代理 | 披露每个缺失 UUID、代理数据集、分配、换算、排除项和重大不确定性。 | 数据缺口登记和数据集元数据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求 UUID `7c000468-f61e-4e05-8509-52da9fd77874`、Product 流类型、CPC 29510 身份、Mass 属性，并明确排除 CPC 29320。 | `un-cpc-3-2025` |
| `validate_reference_amount` | 参考流 | 要求恰好 1 kg 合格成品鞋净质量，并单独记录包装交换。 | `eu-pef-2021`; `af-pefcr-3-1` |
| `validate_qualifiers` | 数据集元数据 | 要求所有列出的限定信息，或明确且技术上有依据的不适用声明。 | `af-pefcr-3-1` |
| `validate_atomic_inventory` | 清单 | 拒绝合并材料、部件、能源载体、燃料、化学品、包装、废物流、制冷剂或排放。 | `eu-pef-2021` |
| `validate_bom_and_loss` | 制造清单 | 要求产品特定 BOM、由记录得出的阶段产率或损耗，并按类型核对材料废物。 | `af-pefcr-3-1` |
| `validate_company_specific_data` | 前景制造 | 要求每个纳入或分包生产阶段的企业特定制造数据。 | `eu-pef-2021`; `af-pefcr-3-1` |
| `validate_completeness_transparency` | 完整数据包 | 要求所有环境相关原材料、能源、产品、废物以及空气、水和土壤排放，并透明披露缺口和排除项。 | `eu-pef-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | CPC 29510 防护金属包头鞋产品特定前景生产数据集 |
| downstream_use | 型号、防护、结构、地理、技术和时期兼容时，可用作 `secondary_dataset` 或 `background_dataset` |
| allowed_use | 声明防护鞋的工厂门建模，以及使用透明上游数据集汇总到更广的生命周期模型 |
| excluded_use | CPC 29320 鞋类；无金属包头的鞋类；仅复合材料包头防护；单独零件；使用、分销或寿命终止；未经调整的重大不同结构 |
| required_metadata | PCR id 和版本；产品型号；CPC 审查；包头规范；尺码组合；净质量；BOM 修订；材料组成；鞋底路线；纳入场址和分包方；地理位置；时期；分配；上游数据集；数据缺口 |
| required_quality_disclosure | 原始数据占比；时间与场址覆盖；BOM 与损耗核对；校准；载体换算；燃料和制冷剂平衡；代理数据集；缺失 UUID；不确定性；异常操作；审查状态 |
| update_trigger | 型号、包头、材料组成、BOM、供应商、场址、分包方、鞋底路线、胶黏剂或清洗剂、能源或制冷系统、包装、分配、上游数据集或生产期发生变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-2025` | `official_guidance` | 联合国统计司，CPC Ver. 3.0 官方资源和解释性说明，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/CPC；仓库保留原始结构 `CPC_Ver_3.0_Structure_30Jun2025.csv` | CPC 29510 官方身份及 CPC 29320 排除范围 |
| `eu-pef-2021` | `official_guidance` | 欧盟委员会建议 (EU) 2021/2279，产品环境足迹方法，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng | 产品特定 BOM 和企业数据、制造 LCI、原材料、能源、产品、废物、空气/水/土壤排放、完整性和透明度 |
| `af-pefcr-3-1` | `standard` | 服装与鞋类产品环境足迹类别规则（PEFCR），v3.1，2025-04-29，所提供证据包 | 鞋类制造 BOM、损耗、包装、过程数据结构和企业特定制造要求 |
