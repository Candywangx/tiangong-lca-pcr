---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-wool-or-fine-animal-hair-containing-less-than-85-by-weight-of-wool-or-56d3e175
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 含羊毛或动物细毛重量少于85%的羊毛或动物细毛机织织物

## 1. 范围与适用性

本 PCR 适用于羊毛和/或动物细毛质量含量低于 85% 的机织织物工厂门生产。边界从外购纱线开始，包括纱线准备和织造；仅当现场对所报告生产批次实施湿加工、后整理和发运包装时，才纳入这些工序。

本 PCR 不适用于羊毛或动物细毛含量达到或超过 85% 的织物、针织或钩编织物、非织造布、地毯、纱线生产、纤维生产、服装制造、分销、使用和报废阶段。外购纱线、水、能源、化学品和包装的上游生产应使用链接的上游数据集表示，不在前景过程中重复建模。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.yarn-and-thread-woven-and-tufted-textile-fabrics.woven-fabrics-of-wool-or-fine-animal-hair-containing-less-than-85-by-weight-of-wool-or-56d3e175 |
| classification_refs | CPC 3.0: 26540（exact） |
| covered_products | 羊毛和/或动物细毛质量含量低于 85% 的机织织物，包括与其他已声明纤维的混纺织物 |
| excluded_products | 羊毛或动物细毛含量达到或超过 85% 的机织织物；针织、钩编、非织造、簇绒、地毯、纱线、纤维和成衣产品 |
| representative_product | 在报告工厂门、具有特定生产批次属性的羊毛或动物细毛混纺机织织物卷 |
| production_route | 外购纱线准备与织造，以及批次适用的现场湿加工、后整理、检验和卷装包装 |
| market_state | 工厂门机织织物，处于已声明的坯布、染色或整理状态，并以卷装或其他已声明发运形式供应 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 满足已声明纤维组成、织物结构和整理规格的工厂门机织织物 |
| How much | 1 kg 织物净质量 |
| How well | 合格产出，羊毛/动物细毛质量占比低于 85%，并声明混纺组成、组织、幅宽、单位面积质量、颜色和整理状态 |
| How long or cycle | 工厂门的一个报告生产批次；不设定使用寿命 |
| reference_flow_link | `integrated_woven_fabric_manufacturing` 的 1 kg 合格参考产品产出 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 含羊毛或动物细毛重量少于85%的羊毛或动物细毛机织织物 `89be6289-db50-45f3-9a41-389357845e7f` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 纤维质量组成；羊毛和动物细毛质量占比；其他纤维组分；织物组织；幅宽；单位面积质量；坯布/染色/整理状态；颜色或色号；整理和处理路线；生产地域；生产期间；发运和包装状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量合格织物净质量，不含卷芯和其他发运包装；声明调湿或含湿状态。保留实测状态，不得采用无记录依据的干质量修正。 |
| `lot_normalization` | 前景交换 | 行特定属性 | 行特定单位 | 以计量或交易单位记录每项交换，并按同一生产批次和边界的 1 kg 合格参考产品净产出来归一化。 |
| `packaging_separation` | 发运包装 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将每种包装组件分别记录为输入；包装质量不得计入参考产品质量。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景制造 | 纳入外购纱线接收与准备、织造、过程检验和工厂门发运；若现场对报告批次实施湿加工、后整理和包装，则同时纳入。 | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `boundary_upstream_links` | 外购输入 | 纱线、水、电力、蒸汽、过程化学品和包装的上游生产采用链接上游数据集表示；不得在前景清单中重复这些上游过程。 |  |
| `boundary_route_disclosure` | 路线依赖工序 | 声明湿加工、染色、后整理和包装是在现场实施、作为外购服务还是不存在；仅纳入跨越所选前景边界的交换，并防止与链接数据集重复计算。 | `eu-bat-textiles-2022` |
| `boundary_atomic_inventory` | 全部前景交换 | 将实际使用的每种材料、过程化学品、能源载体、包装组件、废物流和基本流分别记录为具有精确身份的独立交换；不得使用集合流或选择器流。 | `eu-bat-textiles-2022` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购纱线到达报告场址时具有已声明的纤维组成、纱线形态、质量、供应商和上游数据集引用 |
| starting_condition_role | 织物制造前景边界入口 |
| product_classification_scope | 羊毛和/或动物细毛质量含量低于 85% 的机织织物 |
| recursive_input_rule | 若输入本身已经属于同一机织织物类别，则仅将其作为链接的上游产品数据集记录一次，并将其内部制造排除在本前景过程之外。 |
| upstream_dataset_requirement | 将每种外购纱线、公用工程、化学品、包装组件和外包处理链接至地域与时间适宜的上游数据集，或披露尚未解决的缺口。 |
| disclosure | 声明纱线组成、供应状态、纳入的现场工序、外包工序、分配选择、包装状态、生产期间、地域及任何排除的交换。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `integrated_woven_fabric_manufacturing` | 综合机织织物制造 | required | 适用于每个报告生产批次；仅当路线特定的湿加工、蒸汽使用和包装输入发生在报告场址边界内时才记录。 | 前景生产 | 1 kg 合格机织织物净产出 |

### 过程：综合机织织物制造（`integrated_woven_fabric_manufacturing`）

#### 输入

##### 产品流

###### 羊毛混纺织造纱线输入（`wool_blend_yarn_input`）

当含羊毛纱线为所报告批次跨越工厂边界时，应单独记录羊毛混纺织造纱线。

- 选定流：Wool-blend weaving yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于报告生产批次的前景记录接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_inputs`
- 来源：

###### 动物细毛混纺织造纱线输入（`fine_animal_hair_blend_yarn_input`）

当动物细毛混纺纱线为所报告批次跨越工厂边界时，应单独记录该织造纱线。

- 选定流：Fine-animal-hair-blend weaving yarn
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于报告生产批次的前景记录接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_yarn_inputs`
- 来源：

###### 工艺水输入（`process_water_input`）

当工艺水供应给现场浆纱、洗涤、染色、后整理、清洗或其他可归属于批次的制造工序时予以记录。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于报告生产批次的前景记录工艺水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_water`
- 来源：`eu-bat-textiles-2022`

###### 中压电力输入（`electricity_medium_voltage_input`）

记录供应给纱线准备、织造、现场后整理、检验和发运工序且归属于报告批次的中压电力。

- 选定流：中压电力
- 流属性/单位：Energy / kWh
- 数量规则：归属于报告生产批次的前景计量或分配电力用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_electricity`
- 来源：`eu-bat-textiles-2022`

###### 外购蒸汽输入（`steam_input`）

当外购蒸汽跨越场址边界用于可归属于批次的湿加工、干燥、热定型或后整理时予以记录。

- 选定流：蒸汽 `293f9fd9-5182-4d35-8aa5-ce73d4f322b7`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于报告生产批次的前景记录外购蒸汽质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_steam`
- 来源：`eu-bat-textiles-2022`

###### 纸板卷芯输入（`paperboard_core_input`）

当纸板卷芯随织物卷一同发运时予以记录。

- 选定流：Paperboard roll core
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：随报告批次供应的纸板卷芯前景记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_packaging`
- 来源：

###### 低密度聚乙烯包装膜输入（`ldpe_packaging_film_input`）

当低密度聚乙烯薄膜用于包裹或保护发运织物时予以记录。

- 选定流：低密度聚乙烯包装膜
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：随报告批次供应的低密度聚乙烯包装膜前景记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dispatch_packaging`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 参考机织织物产出（`reference_fabric_output`）

合格工厂门机织织物是所有按批次归一化交换的定量参考。

- 选定流：含羊毛或动物细毛重量少于85%的羊毛或动物细毛机织织物 `89be6289-db50-45f3-9a41-389357845e7f`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：在已声明调湿或含湿状态下的前景记录合格织物净质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_reference_product`
- 来源：`unsd-cpc-v3-26540`

##### 废物流

###### 机织织物边角料产出（`textile_offcuts_output`）

仅当边部裁条、废次片和其他与报告织物批次一致的固体边角料构成物理上统一管理且处理路线相同的一个废物流时，方可合并记录。

- 选定流：Woven-fabric offcuts matching the reference-product composition
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：作为这一具体边角料废物流离开前景过程的前景记录质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_textile_offcuts`
- 来源：

###### 湿加工废水产出（`wet_processing_wastewater_output`）

当纺织湿加工废水离开现场湿加工工序，进入处理、排入下水道、在过程外回收或前往其他已声明去向时予以记录。

- 选定流：废水，纺织品湿法加工，至水体 `a60031a7-ea29-49ef-b578-90de910fcf8e`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：归属于报告生产批次的前景记录废水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 合格参考产品净产出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wet_processing_wastewater`
- 来源：`eu-bat-textiles-2022`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共用前景工序 | 只要记录允许，就通过分别计量或细分纱线准备、织造、湿加工、后整理和包装来避免分配。 |  |
| `allocation_lot_linkage` | 多个织物批次 | 在采用任何分配前，使用机器、批次、配方、计量和发运记录将输入和输出直接归属到生产批次。 |  |
| `allocation_residual` | 无法避免的共用输入输出 | 当无法细分和直接归属时，披露所选物理关系和计算方法；除非废物作为具有预期功能并有单独文件记录的产品离开，否则不得将其视为共产品。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_yarn_inputs` | `integrated_woven_fabric_manufacturing` | 羊毛混纺和动物细毛混纺纱线输入 | 收货记录、领料记录和纤维组成证明 | 纱线身份；供应商；批次；纤维质量组成；接收质量；领用质量；退回质量 | 将采购/收货和生产领料记录与报告织物批次核对 | kg | 每次收货和批次领料 | 完整报告期和报告批次 | 报告工厂 | 按精确纱线身份汇总归属于批次的净纱线质量 | 经校准秤记录；供应商证明；批次追溯 |
| `cp_process_water` | `integrated_woven_fabric_manufacturing` | 工艺水输入 | 流量计、批次记录或储罐平衡 | 仪表起止值；批次体积或质量；由体积换算质量时的密度；回用量；批次链接 | 读取过程级仪表或有文件支持的批次平衡，并避免对内部回用水重复计算边界输入 | kg | 每批次或仪表区间 | 完整报告期和报告批次 | 报告工厂 | 汇总归属于批次的净边界输入 | 仪表校准；水平衡；批次日志 |
| `cp_electricity` | `integrated_woven_fabric_manufacturing` | 中压电力输入 | 电表和机器运行记录 | 仪表起止值；机器生产线；运行时间；批次；分配驱动因素 | 优先使用分表用量，并记录任何共用电力分配 | kWh | 每个仪表区间或生产批次 | 完整报告期和报告批次 | 报告工厂 | 汇总归属于批次的电力，不计上游发电损失 | 仪表校准；能源审计；运行日志 |
| `cp_steam` | `integrated_woven_fabric_manufacturing` | 外购蒸汽输入 | 蒸汽表和批次记录 | 蒸汽表起止值；供应方；压力或状态；凝结水回流；批次链接 | 使用边界蒸汽表读数，并仅向批次归属净外购量 | kg | 每个仪表区间或批次 | 完整报告期和报告批次 | 报告工厂 | 汇总归属于批次的外购蒸汽 | 仪表校准；供应方发票；批次日志 |
| `cp_dispatch_packaging` | `integrated_woven_fabric_manufacturing` | 纸板卷芯和 LDPE 薄膜输入 | 包装领用和发运记录 | 组件身份；材料；组件质量；领用数量；退回数量；批次链接 | 将包装库领用与发运织物卷核对 | kg | 每个发运批次 | 完整报告期和报告批次 | 报告工厂 | 分别汇总每种包装组件；包装不计入产品质量 | 秤记录；包装规格；发运记录 |
| `cp_reference_product` | `integrated_woven_fabric_manufacturing` | 参考机织织物产出 | 生产和质量放行记录 | 产品身份；批次；毛质量；皮重；净质量；纤维组成；幅宽；单位面积质量；整理；含湿或调湿状态；合格和不合格质量 | 使用经校准的净质量测量记录质量放行产出 | kg | 每个生产批次 | 完整报告期和报告批次 | 报告工厂 | 仅汇总合格织物净质量 | 经校准秤；质量放行；组成检测或供应链追溯 |
| `cp_textile_offcuts` | `integrated_woven_fabric_manufacturing` | 机织织物边角料产出 | 废物称重和转移记录 | 废物身份；来源生产线；批次；质量；库存变化；去向 | 称量具体边角料流，并核对转移量和库存变化 | kg | 每次转移和报告期末 | 完整报告期和报告批次 | 报告工厂 | 汇总作为已声明边角料流离开的净质量 | 经校准秤；废物转移单；库存核对 |
| `cp_wet_processing_wastewater` | `integrated_woven_fabric_manufacturing` | 湿加工废水产出 | 排水流量计和处理/排放记录 | 流量或质量；换算使用的密度；批次或生产线；去向；回用量；批次链接 | 计量废水边界流，并排除同一前景过程内部回用的水 | kg | 每个排放区间或批次 | 完整报告期和报告批次 | 报告工厂 | 汇总离开过程边界的净废水 | 仪表校准；水平衡；处理或排放记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_lot_normalization` | 每项前景交换 | 将前景记录批次数量除以同一批次和边界的合格参考产品净质量；保留该交换的声明单位。 | 批次交换数量；批次合格织物净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_textile_mass_reconciliation` | 纱线输入、参考织物和纺织边角料 | 核对净纱线输入与合格织物产出、边角料产出、其他分别识别的纺织输出及已记录库存变化；对残差进行调查，不得隐藏。 | 净纱线输入；合格织物产出；每项纺织废物/输出；在制品变化 | 已披露的纺织质量平衡核对结果 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 证明精确产品名称、Product flow 类型、CPC 26540 分类、Mass 属性、kg 参考单位，以及该批次羊毛和/或动物细毛质量占比低于 85%。 | state_code 100 Tiangong 身份直接读取；产品规格；组成证明或检测 |
| `dq_temporal_linkage` | 全部交换 | 使用覆盖同一生产期间的记录，并将批次、机器、仪表、材料、废物和发运记录链接至报告批次，或披露分配依据。 | 带日期的一手记录和批次追溯 |
| `dq_input_output_inventory` | 综合过程 | 维护经审查的纺织材料、过程化学品、水、能源、废水、废气和固体废物输入输出清单，识别数量和相关特性。 | `eu-bat-textiles-2022`；场址输入输出清单 |
| `dq_atomic_chemical_records` | 过程化学品 | 将每种实际使用的化学品制剂作为单独产品流交换记录，包含精确商业或化学身份及实测批次数量；聚合化学品类别不完整。 | 化学品清单；安全数据表；批次配方；领用记录 |
| `dq_route_completeness` | 湿加工和后整理 | 声明现场湿加工或后整理时，应保留同一路线和期间的水与能源平衡、精确化学品记录、废水记录及处理/排放去向。 | `jrc-textiles-bref-2023`；`eu-bat-textiles-2022`；仪表和批次记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求精确参考产品 UUID、Product flow 类型、CPC 26540 身份、Mass 流属性 UUID、kg 单位及全部必需限定信息。 | `unsd-cpc-v3-26540` |
| `validate_composition_threshold` | 参考产品 | 若未声明羊毛和动物细毛质量占比，或该占比不低于织物质量的 85%，则拒绝数据集。 | `unsd-cpc-v3-26540` |
| `validate_reference_mass` | 参考数量 | 确认分母为已声明调湿或含湿状态下的 1 kg 合格织物净质量，且不含发运包装。 |  |
| `validate_process_boundary` | 前景过程 | 确认纳入织造、声明全部现场路线工序、采用链接数据集而非重复建模外购输入上游生产，并披露外包工序。 | `jrc-textiles-bref-2023`; `eu-bat-textiles-2022` |
| `validate_atomic_exchanges` | 过程清单 | 拒绝集合、复数、选择器或占位交换；每种材料、化学品、能源供应、包装组件、废物流和基本流必须具有单独行和精确身份。 | `eu-bat-textiles-2022` |
| `validate_foreground_evidence` | 清单数量 | 每个报告数量均须具有前景仪表、交易、批次、质量平衡或发运证据；不得使用 AI 编写的数量或范围替代。 |  |
| `validate_wet_route` | 现场湿加工 | 若存在湿加工，要求工艺水和废水记录、精确化学品行、能源记录、处理去向，并防止回用水重复计算。 | `eu-bat-textiles-2022` |
| `validate_mass_reconciliation` | 纺织材料 | 要求对纱线输入、合格织物产出、每项纺织废物/输出和库存变化进行书面核对，并调查和披露任何残差。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 羊毛或动物细毛混纺机织织物工厂门前景产品数据集 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 产品足迹、过程和 lifecyclemodel 研究，且产品组成、路线、地域、期间和整理状态与已声明数据集相匹配 |
| excluded_use | 羊毛/动物细毛含量达到或超过 85% 的织物、非织造或针织产品、纱线生产、服装，或跨显著不同湿加工和后整理路线的未披露外推 |
| required_metadata | canonical PCR id；参考产品 UUID；纤维组成；羊毛/动物细毛质量占比；组织；幅宽；单位面积质量；颜色；整理；调湿或含湿状态；地域；期间；技术；现场与外包工序；分配；包装状态 |
| required_quality_disclosure | 一手记录覆盖率；仪表和秤状态；批次链接；精确化学品清单；适用时的水和能源平衡；废水去向；质量平衡残差；未解析 UUID 和上游数据集缺口 |
| update_trigger | 纤维混纺、纱线路线、织造技术、湿加工或后整理配方、场址能源/水系统、包装规格、分配方法、地域或报告期间发生足以显著改变清单的变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-v3-26540` | official_guidance | 联合国统计司，CPC 3.0 版解释性说明，代码 26540，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（访问日期：2026-08-12） | 产品类别名称、层级和低于 85% 的组成边界 |
| `jrc-textiles-bref-2023` | official_guidance | 欧盟委员会联合研究中心，《纺织工业最佳可行技术参考文件》，2023 年 1 月，https://eippcb.jrc.ec.europa.eu/reference/textiles-industry（访问日期：2026-08-12） | 纺织过程分解、湿加工适用性、输入输出清单、水、能源、化学品和废物控制 |
| `eu-bat-textiles-2022` | official_guidance | 欧盟委员会实施决定 (EU) 2022/2508（纺织工业 BAT 结论），https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022D2508（访问日期：2026-08-12） | 前景输入输出清单、织造能源、水平衡、化学品清单、废水、路线披露和校验规则 |
