---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48315
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 48315 子类所列货品的零件及附件

## 1. 范围与适用性

本 PCR 适用于生产商认定供 CPC 48315 产品系列中未另列明的液晶装置、激光二极管以外的激光器或未另列明的其他光学器械和仪器使用，并作为独立商品销售的零件及附件。边界涵盖从材料和组件进入工厂起，到针对所声明产品配置在场址内实施的制造、清洗、装配、性能验证和包装完成为止的工厂大门生产。

本 PCR 不涵盖完整的 CPC 48315 装置、激光二极管、作为独立商品销售的通用紧固件/电缆/电源/印制线路板及类似货品、另行分类的光学纤维/光学元件/摄影货品及其他产品、母设备的安装/使用/维护/寿命终止阶段，以及已由相连供应商或背景数据集表示的上游生产。实际物料清单、公用工程、包装、废物和直接排放中的每项交换，即使未列入下述常见行，也必须在数据集中表示为一个原子行。分类上下文是范围证据，本身并不构成方法学身份或已接受映射。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48315 |
| classification_refs | CPC 3.0:48354，48315 子类所列货品的零件及附件（精确分类上下文） |
| covered_products | 为一个已声明 CPC 48315 设备系列专门配套并独立供应的机械、电气、热控制、接口、壳体、安装、控制和子组件类零件或附件 |
| excluded_products | 完整 CPC 48315 装置；激光二极管；未认定供母设备使用的通用货品；以及在光学、摄影、电子或其他类别中另行分类的产品 |
| representative_product | 供已声明的液晶装置、非二极管激光器或其他 CPC 48315 光学器械系列使用的一件成品、可独立销售的零件或附件 |
| production_route | 接收产品特定材料和组件；适用时在场址内制造或成形；适用时清洗；装配和性能验证；工厂大门包装 |
| market_state | 在制造厂大门处已完成、合格并包装，且已声明产品系列、兼容性、材料状态、制造路线和交付配置 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一个成品零件或附件，使其在指定 CPC 48315 母设备系列中实现所声明的结构、接口、电气、热、安装、控制或其他规定功能 |
| How much | 1 kg 合格成品零件或附件的净质量，不含运输包装 |
| How well | 满足适用于所供产品的生产商声明图纸、材料牌号、尺寸公差、清洁度、接口、兼容性和功能验收准则 |
| How long or cycle | 一个工厂大门生产和放行周期；除非另有研究定义，否则不主张使用寿命 |
| reference_flow_link | 合格输出行 `reference_product` 的净质量等于 1 kg 功能单位数量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量 |
| 参考产品流 | 48315 子类所列货品的零件及附件（Tiangong UUID 未解决） |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 母设备系列（未另列明的液晶装置、激光二极管以外的激光器或未另列明的其他光学器械/仪器）；零件或附件类型和功能；型号和兼容性；材料组成和供应形态；产品净质量；制造和清洗路线；验收规范和试验；生产场址和地域；参考期；包装配置 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measurement_reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终验收后计量合格产品净质量并排除运输包装。所有交换均归一化到该净输出的恰好 1 kg。 |
| `measurement_bom_mass` | 材料、组件、包装和固体废物流 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用产品特定 BOM、领退料、采购和称重记录。声明牌号、形态、已知再生含量，以及数量是总领用量还是净消耗量。 |
| `measurement_electricity` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 归一化前保留计量电量。按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ，并披露共享电表的分配。 |
| `measurement_water_mass` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用计量或发票质量。仅可用适用状态下经记录的实测或供应商特定密度换算体积记录。 |
| `measurement_wastewater_volume` | 清洗废水 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录转移处理或排放的体积。若由质量推算，应保留密度和换算记录。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 产品特定原材料、外购组件、清洗剂、公用工程和包装进入前景制造场址，同时记录数量、供应形态、供应商地域和上游数据集链接 |
| starting_condition_role | purchased_input |
| product_classification_scope | 供一个已声明 CPC 48315 母设备系列使用的专用零件及附件；分类接受决定仍在本 PCR 之外 |
| recursive_input_rule | 同一语义类别的外购零件或附件只作为一个原子产品输入记录一次，并链接其上游数据集；不得在前景过程中展开供应商数据集或形成自引用循环 |
| upstream_dataset_requirement | 每项外购材料、组件、能源载体、供水、包装品和场外废物处理服务均应链接地域和技术代表性相符的上游数据；披露缺失或代理链接 |
| disclosure | 声明母设备系列、输出功能和兼容性、材料和组件 BOM、场址内路线、外包步骤、清洗化学品、验收试验、参考期、地域、收率、废物、直接排放和包装配置 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `system_boundary_rule_1` | foreground_gate_to_gate | 纳入所声明产品配置使用的全部场址内制造、成形、清洗、装配、性能验证、返工和包装活动，包括可归属于这些活动的辅助能源和废物处理。 | `eu-pef-method-2021` |
| `system_boundary_rule_2` | bill_of_materials_and_outputs | 使用产品特定 BOM 和企业特定制造数据。将所有已知材料、能源、水、产品、废物和直接基本流逐项记为独立交换；实际发生但未列出的流不得作为允许的截断项。 | `eu-pef-method-2021` |
| `system_boundary_rule_3` | conditional_routes | 条件交换仅在已声明产品和路线实际使用时纳入；否则应将该交换记录为不适用，而不得通过假定赋零。 |  |
| `system_boundary_rule_4` | excluded_life_cycle_stages | 本工厂大门数据集排除母设备的安装、使用、维护和寿命终止。扩展研究必须另行建模这些阶段，且不得改变本参考流。 |  |
| `system_boundary_rule_5` | solvent_cleaning | 发生溶剂清洗时，在经核对的溶剂平衡中纳入溶剂采购、库存变化、回收或回用溶剂、废溶剂、废水中的溶剂和直接 VOC 排放。 | `us-epa-industrial-cleaning-solvents-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `parts_manufacturing` | 零件及附件制造与工厂大门准备 | `required` | 始终纳入；在此聚合过程中，具体制造材料、清洗交换和包装交换仅在已声明产品 BOM 和场址路线中实际存在时适用 | 前景制造、验收与工厂大门准备 | 1 kg 合格成品零件或附件净质量 |

### 过程：零件及附件制造与工厂大门准备（`parts_manufacturing`）

#### 输入

##### 产品流

###### 用于制造壳体或安装件的变形铝合金（`wrought_aluminium_alloy`）

仅当变形铝合金在前景路线中领用并进行加工时记录；原始记录应保留合金牌号和供应形态。

- 选定流：变形铝合金（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定领料、退料和库存记录计量的净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 用于制造壳体、紧固件或安装件的不锈钢（`stainless_steel`）

仅当不锈钢列于产品特定 BOM 且跨越前景边界进行加工或装配时记录。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定领料、退料和库存记录计量的净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 用于模塑壳体或接口的 ABS 粒料（`abs_granulate`）

仅当前景路线在场址内模塑 ABS 零件时记录；应声明树脂牌号、添加剂和已知再生含量。

- 选定流：丙烯腈-丁二烯-苯乙烯共聚物（ABS），粒料 `8f1317c1-aa51-4524-8692-74079c923e2c`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定领料、退料和库存记录计量的粒料净消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 用于场址内导体制造的铜盘条（`copper_wire_rod`）

仅当铜盘条在前景路线中被拉制或以其他方式加工为电导体或热导体时记录。

- 选定流：铜盘条 `99715c69-4245-44ff-a438-0e0d68377386`
- 流属性/单位：Mass / kg
- 数量规则：根据产品特定领料、退料和库存记录计量的净消耗质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：

###### 外购电力（`electricity`）

记录交付给场址设备，用于已声明制造、清洗、装配、试验、返工、包装及可归属辅助作业的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于已声明产品和报告期的计量电量，归一化前换算为 MJ
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：

###### 水性清洗用工艺用水（`process_water`）

仅当工艺用水供已声明产品或范围内零件进行水性清洗或漂洗时记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：归属于已声明清洗路线的计量或发票工艺用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cleaning_inputs`
- 来源：

###### 精密清洗用异丙醇（`isopropanol`）

仅当异丙醇用于清洗已声明产品、生产零件或专用产品接触工装时记录；原始记录应区分新鲜、回收和回用溶剂。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：采购量加期初库存减期末库存、退货和转出量，并与回收溶剂及输出核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-industrial-cleaning-solvents-2006`

###### 工厂大门包装用瓦楞纸板（`corrugated_cardboard`）

仅当瓦楞纸板保留在工厂大门交付配置中时记录；其他实际包装材料必须分别增加为原子行。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：从产品特定运输配置分配的实测包装质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging`
- 来源：

##### 废物流

本 PCR 不预设废物输入。作为废物流进入的任何二次材料必须用其自身原子身份和路线特定证据表示。

##### 基本流

本 PCR 不预设基本流输入。任何直接开采的资源必须另行增加为原子基本流。

#### 输出

##### 产品流

###### 合格成品零件或附件（`reference_product`）

本行为验收试验后、装运前的已声明参考输出；数量不含运输包装。

- 选定流：48315 子类所列货品的零件及附件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：根据参考流定义，合格成品净质量恰好为 1 kg
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：方法公式（`method_formula`）
- 采集协议：`cp_product_output`
- 来源：`eu-pef-method-2021`

##### 废物流

###### 前景制造产生的铝废料（`aluminium_scrap`）

记录离开前景过程的分流铝切屑、碎屑、边角料和报废铝件；声明合金、污染情况、回收路线和目的地。

- 选定流：铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位：Mass / kg
- 数量规则：从前景过程转移至回收或处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 前景制造产生的不锈钢机加工废料（`stainless_steel_machining_scrap`）

不锈钢切屑、碎屑、边角料和报废不锈钢件应与碳钢废物分开记录，并保留合金牌号和目的地。

- 选定流：不锈钢机加工废料（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：从前景过程转移至回收或处理的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

###### 废异丙醇清洗溶剂（`spent_isopropanol`）

将收集供场内回收、场外回收或处置的废异丙醇与废水和废润滑油分开记录。

- 选定流：废异丙醇清洗溶剂（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：废物联单、回收记录和期末废物库存中的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-industrial-cleaning-solvents-2006`

###### 水性精密清洗产生的废水（`cleaning_wastewater`）

记录离开前景过程、送往处理或排放的水性清洗废水，并保留处理状态和污染物特征作为限定信息。

- 选定流：废水 `ba1c2ea5-0ea3-4981-a893-45a0650fea62`
- 流属性/单位：Volume / m3
- 数量规则：转移处理或排放的实测出水体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_outputs`
- 来源：

##### 基本流

###### 排放到空气的异丙醇（`isopropanol_to_air`）

记录清洗、储存、转移和干燥产生并扣除捕集或削减后的直接异丙醇排放；不得计入上游溶剂生产排放。

- 选定流：异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测排放量，或从有记录的场址溶剂质量平衡中扣除回收溶剂、废溶剂、废水含量和残留溶剂后的剩余量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格成品零件或附件净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集记录计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_balance`
- 来源：`us-epa-industrial-cleaning-solvents-2006`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_rule_1` | independently_meterable_operations | 在可行情况下，通过过程细分并直接计量产品特定材料、能源、水、溶剂、包装、废物和排放记录来避免分配。 | `eu-pef-method-2021` |
| `allocation_rule_2` | shared_manufacturing_inputs | 无法直接计量时，采用能反映因果关系且有记录的物理驱动因素分配共享流，依次选用机器或过程时间、实测吞吐量或合格产品净质量；除非证明物理驱动因素不可用，否则不得按收入分配。 | `eu-pef-method-2021` |
| `allocation_rule_3` | scrap_recovery_and_waste_treatment | 报告每项废物流离开的全部质量并链接实际回收或处理路线。不得在前景清单内扣减避免负荷收益；任何下游再循环约定应另行披露。 |  |
| `allocation_rule_4` | rework_and_rejects | 使用产品特定记录或与原始作业相同的因果驱动因素，将返工能源和材料以及未回收报废品负荷分配给产生它们的产品配置。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `parts_manufacturing` | 产品特定材料输入 | BOM、领退料事务、采购收货和库存记录 | 材料身份；牌号；供应形态；供应商；批次；总领料质量；退料质量；库存变化；再生含量；产品型号；合格输出质量 | 将批准 BOM 与 ERP 和仓储事务核对，并保留批次级例外 | kg | 每批，按报告期汇总 | 一个有代表性的生产年度或一个完整的已声明生产活动期 | 已声明制造场址的全部前景作业 | 按原子材料身份汇总净消耗质量，并除以合格输出净质量 | 批准的 BOM 版本、事务导出、供应商规范、秤校准和核对签字 |
| `cp_electricity` | `parts_manufacturing` | 外购电力 | 电表、分表、设备日志和生产记录 | 电表标识；期初和期末读数；kWh；设备；过程时间；产品型号；报告期；合格输出质量 | 优先直接分表计量；否则按有记录的设备时间或吞吐量分配经核对的场址总表 | kWh 和 MJ | 每月或每生产活动期 | 与产品输出相同，通常连续 12 个月 | 已声明场址和全部可归属范围内作业 | 将 kWh 换算为 MJ，扣除有记录的范围外负荷，分配共享负荷，再除以合格输出净质量 | 电表校准或发票核对、分配工作表和生产日志 |
| `cp_cleaning_inputs` | `parts_manufacturing` | 水性清洗输入 | 水表、发票、批次单和清洗设备日志 | 水量；来源；清洗线；批次；产品型号；回用体积或质量；日期；合格输出质量 | 将水表或发票总量与批次和设备记录核对 | kg | 每批或每月 | 与产品输出相同 | 已声明场址清洗作业 | 汇总扣除有记录内部回用后的净供水量，并除以合格输出净质量 | 水表或发票、批次单、换算时所用密度记录和核对 |
| `cp_solvent_balance` | `parts_manufacturing` | 异丙醇输入、废物和直接空气排放 | 采购、储罐或容器库存、领退料、回收、废物联单、废水分析和排放测量 | 期初库存；采购；转移；期末库存；回收质量；回用质量；废溶剂质量；废水中的溶剂；产品残留；实测空气排放；削减捕集；产品型号；输出质量 | 建立封闭报告期的溶剂质量平衡并调查未解释残差 | kg | 每批，并按月或生产活动期闭合 | 与产品输出对齐的完整报告期 | 场址内所有异丙醇储存、转移、清洗、干燥、回收和废物点 | 核对输入、库存变化、回收、废物、残留溶剂和直接排放；将各结果归一化到合格输出净质量 | 库存表、校准的秤或流量计、回收日志、废物联单、分析结果、排放记录和已签署平衡表 |
| `cp_packaging` | `parts_manufacturing` | 工厂大门包装输入 | 包装 BOM、采购规范、包装作业指导书和抽样称重记录 | 包装品身份；材料；单位质量；每批装运用量；每批装运产品数；经验证的重复使用次数；产品型号 | 称量每个包装组件，或采用经定期抽样称重核实的供应商质量 | kg | 每种包装配置及其变更时 | 报告期内现行运输配置 | 工厂大门前施加的包装 | 经验证单位质量乘以用量并按每批装运产品数分配，再除以产品净质量 | 批准的包装作业指导书、供应商规范、抽样秤记录和变更控制 |
| `cp_waste_outputs` | `parts_manufacturing` | 材料废料和清洗废水 | 分流料箱称重单、废物联单、出水流量计、排放记录和处理转移记录 | 废物身份；材料或污染物；质量或体积；日期；产品型号或生产线；处理状态；回收或处理目的地；输出质量 | 保持材料特定废物流分开，并将内部日志与运输商或处理记录核对 | kg 或 m3 | 每次转移，按月汇总 | 与产品输出相同 | 所有范围内前景作业和场址内收集点 | 汇总各原子废物流，使用有记录的因果驱动因素分配共享流，再除以合格输出净质量 | 校准的秤或流量计、联单、处理回执、相关分析特征和核对 |
| `cp_product_output` | `parts_manufacturing` | 合格参考产品 | 生产、最终检验和装运放行记录 | 产品身份；母设备系列；型号；兼容性；序列号或批号；净质量；合格数量；报废数量；试验结果；日期 | 仅在最终验收后称量或计算经验证的净质量，并与已放行产量核对 | kg | 每批 | 与全部前景输入和输出相同 | 已声明制造场址 | 汇总合格产品净质量，并作为所有归一化交换的分母 | 校准的秤、最终检验记录、试验记录、放行授权和生产核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calculation_rule_1` | normalized inventory rows | 归一化数量 = 可归属报告期流数量 / 报告期合格输出净质量 | 原子流数量；合格输出净质量 | 每 1 kg 参考产品的流数量 | `eu-pef-method-2021` |
| `calculation_rule_2` | electricity | 电力（MJ/kg）= 可归属电量（kWh）× 3.6 / 合格输出净质量（kg） | 计量或分配的 kWh；合格输出质量 | 每 1 kg 参考产品的 MJ |  |
| `calculation_rule_3` | net material consumption | 净消耗质量 = 期初库存 + 收货 + 转入 − 期末库存 − 退货 − 转出；将结果与 BOM 领料和实测废物核对 | 库存和事务字段；BOM；废物质量 | 每 1 kg 参考产品的各原子输入 kg 数 |  |
| `calculation_rule_4` | isopropanol mass balance | 直接未计量释放 = 期初库存 + 采购 + 转入 − 期末库存 − 转出 − 回收溶剂 − 废溶剂 − 废水中的异丙醇 − 经验证的产品残留；有直接测量时用其替换残差，且不得报告负值 | 溶剂库存、采购、转移、回收、废物、废水分析、残留和测量记录 | 每 1 kg 参考产品排放到空气的异丙醇 kg 数，并披露核对残差 | `us-epa-industrial-cleaning-solvents-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `data_quality_1` | 产品和流身份 | 每行仅命名一个物理、化学、能源、废物或基本交换，并包含其适用形态、牌号、环境区室、处理状态和供应商或目的地限定信息。 | 批准 BOM、规范、联单、UUID 直读审核和原子流审查 |
| `data_quality_2` | 完整性 | 将产品特定 BOM 和全部已知输入输出与生产、库存、公用工程、废物和排放记录核对。解释每项被排除或未链接的实际交换。 | 完整性清单、平衡表、核对签字和例外日志 |
| `data_quality_3` | 时间代表性 | 连续生产采用一个有代表性的 12 个月期间，间歇生产采用一个完整的已声明生产活动期；全部分子和分母记录应保持期间对齐。 | 带日期的源数据导出、活动期定义和期间对齐检查 |
| `data_quality_4` | 技术和地域代表性 | 匹配场址技术、材料牌号、清洗路线、电力地域、供应商地域和废物目的地；披露代理及其对解释的影响。 | 过程说明、供应商记录、数据集元数据和代理登记表 |
| `data_quality_5` | 计量和不确定性 | 保留校准状态、测量分辨率、分配依据、缺失数据处理，以及材料或溶剂平衡残差；放行前调查材料残差。 | 校准证书、分配工作表、不确定性记录和审查签字 |
| `data_quality_6` | 数据验证 | 由独立于数据编制的审查员检查参考流归一化、UUID 语义、条件路线适用性、平衡、来源链接和双语一致性。 | 已完成的验证记录和已关闭的问题 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validation_rule_1` | reference_flow | 确认 `reference_product` 是供已声明 CPC 48315 母设备系列使用的合格 CPC 48354 零件或附件，其净输出恰好为 1 kg 且不含运输包装。 | `un-cpc-3-0-structure-2025`; `eu-pef-method-2021` |
| `validation_rule_2` | required_qualifiers | 拒绝缺失母设备系列、零件/附件功能、兼容性、组成、制造路线、验收规范、场址、期间或包装配置的数据集。 |  |
| `validation_rule_3` | atomic_inventory | 确认每项实际 BOM、公用工程、包装、废物和直接排放均由一个原子交换表示，且方向、流类型、属性、单位和路线条件正确。 | `eu-pef-method-2021` |
| `validation_rule_4` | tiangong_uuid_identity | 通过公开 state-100 直读核对每个已填写 Tiangong UUID 的英文和中文 baseName、流类型、分类、属性、单位组、产品状态、地域、技术和 generalComment；未解决行保持空白，不得替换为代理。 |  |
| `validation_rule_5` | conditional_routes | 确认铝、不锈钢、ABS、铜、水性清洗、异丙醇清洗和瓦楞纸板行仅在已声明 BOM 和场址路线实际使用时纳入；不同的实际材料或过程流应另增原子行。 |  |
| `validation_rule_6` | mass_and_solvent_balance | 核对材料输入、合格输出、材料特定废料、其他实际输出和库存变化；使用异丙醇时，另行核对溶剂输入、回收、废物、废水含量、残留和空气排放。 | `us-epa-industrial-cleaning-solvents-2006` |
| `validation_rule_7` | data_quality_and_sources | 数据集放行前确认期间对齐、校准、产品特定企业数据、上游数据集链接、代理披露、计算可复现性和 source id 解析。 | `eu-pef-method-2021` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset |
| downstream_use | 用于已命名的未另列明液晶装置、激光二极管以外的激光器或未另列明其他光学器械/仪器生产的 background_dataset；也可支持产品特定前景装配模型 |
| allowed_use | 当母设备系列、兼容性、组成、路线、地域、技术、期间和包装与研究匹配时，用于已声明零件/附件配置的工厂大门建模 |
| excluded_use | 直接比较功能或母设备系列不同的零件；替代完整 CPC 48315 装置；用于使用阶段、维护、使用寿命或寿命终止主张；或应用于未报告材料和路线 |
| required_metadata | PCR id 和状态；产品和母设备身份；功能和兼容性；参考净质量；BOM 和供应形态；制造、清洗、试验、返工和包装路线；场址和地域；报告期；分配；上游数据集；废物目的地；未解决 UUID 和代理 |
| required_quality_disclosure | 初级数据占比；期间覆盖；校准和核对状态；分配驱动因素；材料和溶剂平衡残差；缺失流；代理数据集；UUID 审核状态；数据质量审查发现 |
| update_trigger | 产品功能或兼容性、材料或组件 BOM、制造或清洗技术、场址或电力地域、分配驱动因素、供应商组合、废物路线、包装配置、验收试验发生变化，或实测归一化交换发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（访问日期：2026-09-07） | CPC 48354 正式标题、层级及其与 CPC 48315 的关系 |
| `un-cpc-1-1-chinese-2004` | official_guidance | 联合国统计司，《产品总分类》1.1 版中文版，https://unstats.un.org/unsd/publication/SeriesM/M_77ver1_1c.pdf（访问日期：2026-09-07） | “零件和附件”及 CPC 48315 产品系列的专业中文术语 |
| `eu-pef-method-2021` | official_guidance | 欧盟委员会，关于产品环境足迹方法的建议（EU）2021/2279，https://eur-lex.europa.eu/eli/reco/2021/2279/2021-12-30/eng（访问日期：2026-09-07） | 功能单位和参考流框架；产品特定 BOM；企业特定制造数据；完整性；分配；数据质量；验证 |
| `us-epa-industrial-cleaning-solvents-2006` | official_guidance | 美国环境保护署，《工业清洗溶剂控制技术指南》，EPA453/R-06-001，2006 年 9 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1009NYV.TXT（访问日期：2026-09-07） | 零件、激光硬件和精密光学件的条件清洗；溶剂核算；废溶剂处理；直接 VOC 排放 |
