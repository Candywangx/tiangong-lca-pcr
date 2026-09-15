---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watches
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 手表

## 1. 范围与适用性

本 PCR 适用于以手表身份投放市场的完整便携式个人计时器，包括腕表、怀表以及采用机械机芯、石英机芯或其他手表机芯的其他完整手表。前景数据集覆盖截至工厂大门的最终装配、适用时的清洗、功能测试和防水测试、声明的表带安装、最终质量放行以及零售单元包装。

语义边界遵循 CPC 48410 及其与 HS 品目 9101 和 9102 的既有对应关系。钟；时间记录或时间间隔指示装置；单独销售的机芯；单独销售的表壳、金属表带、非金属表带、表玻璃及其他零件；手表维修或制造服务；以及主要产品身份并非手表的多功能互联可穿戴计算设备均不在本 PCR 范围内。零部件制造、运输、分销、使用、维护和生命末期处理不属于前景过程；当研究声称更广的生命周期边界时，必须通过所链接的上游或下游数据集予以表示。

机械路线和电池供电路线不得不加说明地平均。数据包必须注明机芯技术、供能系统、表壳和表盖材料、金属表带或非金属表带材料、防水等级、声明的走时精度或放行规范、制造地理范围、包装配置，以及是否实施清洗或湿式测试。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.watches |
| classification_refs | CPC 3.0：48410 Watches；语义边界参考 CPC 2.1 与 HS 9101 和 9102 的正式对应关系 |
| covered_products | 主要产品身份为手表的完整腕表、怀表及其他完整便携式个人计时器；包括机械、石英或其他电池供电变体 |
| excluded_products | 钟；时间记录装置；单独销售的机芯和零件；维修和制造服务；未被归类为手表的互联可穿戴计算设备 |
| representative_product | 制造工厂大门处一只已验收、完成全部功能测试并采用零售单元包装的手表 |
| production_route | 使用交付的机芯零部件、表壳零部件、声明的金属或非金属表带、路线特定电源及包装投入进行最终装配和测试 |
| market_state | 可供分销的已完成、已验收、已包装手表；机芯技术、材料配置和供能系统已声明 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一只主要产品身份为手表的完整便携式个人计时器 |
| How much | 工厂大门处一只已验收并采用零售单元包装的手表 |
| How well | 满足制造商声明的走时、功能、外观、适用时的防水及质量放行规范 |
| How long or cycle | 一次完整制造批次分摊至一只已验收手表；本工厂大门功能单位不表示使用寿命 |
| reference_flow_link | `finished_watch` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 手表（Tiangong UUID 未解决） |
| 参考流属性 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` |
| 参考单位组 | Units of items `5beb6eed-33a9-47b8-9ede-1dfe8f679159` |
| 参考单位 | Item(s) |
| 必需限定信息 | 机芯技术；供能系统；表壳材料；表盖材料；金属表带或非金属表带材料；防水等级或不适用；声明的走时精度或放行规范；制造场址和地理范围；验收批次期间；包装配置；纳入和排除的生命周期阶段 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `watch_item_reference` | 参考产品及已验收手表数量 | Number of items `01846770-4cfe-4a25-8ad9-919d8d378345` | Item(s) | 将所有前景交换归一化至一只已验收、已包装手表；废品不得增加分母。 |
| `component_mass_basis` | 零部件、表带、包装、溶剂及废物质量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录跨越过程边界的净质量，并使用批次特定的实测质量或供应商声明质量把供应商件数换算为质量。 |
| `electricity_energy_basis` | 购入电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 归一化前保留计量能量；原始记录使用 kWh 时按 1 kWh = 3.6 MJ 换算，并披露电网地理范围、电压等级和所含损耗。 |
| `water_mass_basis` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录净补水量或耗水量，不重复计入未跨越前景边界的循环水量；记录任何体积至质量换算及参考条件。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 手表装配场址大门处交付的机芯零部件、完成表面处理的表壳零部件、声明的金属或非金属表带、适用路线中使用的纽扣电池、清洗剂及零售包装材料 |
| starting_condition_role | 上游零部件和材料数据集为最终装配、测试、质量放行和包装前景过程提供投入 |
| product_classification_scope | CPC 48410 内的完整手表；单独销售的机芯、表壳、金属表带、非金属表带、表玻璃及其他零件作为上游产品而不是参考产品 |
| recursive_input_rule | 返工时重新进入前景过程的完整手表作为内部返工品跟踪，而不是新的购入同类别投入；外购完整手表必须披露并链接单独的上游数据集，且不得重复计算其生产 |
| upstream_dataset_requirement | 声称从摇篮到工厂大门或更广结果时，每种交付零部件、电源、溶剂、水、电力供应和包装投入都必须使用供应商或技术特定的从摇篮到工厂大门数据集 |
| disclosure | 披露装配场址、验收批次期间、纳入操作、手工或自动装配、机芯与供能技术、零部件材料配置、湿式测试和清洗方式、公用工程边界、废品、包装以及所有省略的上游或下游阶段 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_complete_watch` | 产品纳入 | 仅以完整手表作为参考产品；机芯、表壳、非金属表带、金属表带、表玻璃及其他单独供应的零件作为上游投入。 | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013` |
| `boundary_foreground_gate` | 前景操作 | 纳入报告场址实施的最终装配、适用时的清洗、功能和防水测试、质量放行、废品处置及零售单元包装。 | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `boundary_upstream_components` | 更广的从摇篮到工厂大门声明 | 链接机芯、表壳、非金属或金属表带、电池、溶剂、公用工程和包装的上游数据集；不得把其隐含负荷表示为前景直接排放。 | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `boundary_route_disclosure` | 变体处理 | 当物料清单或操作不同时，对机械和电池供电路线以及不同表壳、表盖和表带材料分别参数化。 | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `watch_final_assembly` | 手表最终装配、测试、质量放行和包装 | required | 完整手表始终纳入 | 前景生产 | 工厂大门处每只已验收并采用零售单元包装的手表 |

装配、测试和包装工位之间的内部转移均保留在该汇总前景过程内部，不得作为技术领域交换重复记录。场址如单独建模这些工位，其内部产品转移必须在前景系统边界上抵消。

### 过程：手表最终装配、测试、质量放行和包装（`watch_final_assembly`）

#### 输入

##### 产品流

###### 交付的手表机芯零部件组（`movement_components`）

记录用于构建所声明机械或电子手表机芯配置的交付零部件组。除非保留所声明产品组合及加权物料清单，否则不得在一个前景平均值中混合机芯技术。

- 选定流：交付的手表机芯零部件组（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：按供应商或收货质量记录已消耗质量，包括装入合格手表的零部件及可归属废品，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### 完成表面处理的手表表壳零部件（`watch_case_components`）

将表壳、底盖、表圈、表盖或表玻璃、表冠、密封件及其他表壳零部件作为声明手表配置使用的一个交付表壳零部件批次记录。该 UUID 未解决的选定流表示一个交付的表壳零部件组，而不是材料选择指令；各零部件材料和质量仍须在物料清单中明确。

- 选定流：完成表面处理的手表表壳零部件（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：所声明表壳配置的收货或物料清单消耗质量，包括可归属废品，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### 已装配金属表带（`metal_watch_band`）

仅当合格手表配有金属表带时纳入。记录跨越装配边界的一条完整金属表带及其实测质量或供应商声明质量。

- 选定流：已装配金属表带（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：金属表带消耗质量，包括可归属废品，并按采用该类表带的已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只配有金属表带的已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`casio-environmental-report-2003`

###### 成品皮革表带（`leather_watch_strap`）

仅当合格手表配有皮革表带时纳入。皮革来源、鞣制路线、表扣材料和供应商身份作为上游限定信息保留。

- 选定流：成品皮革表带（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：皮革表带消耗质量，包括可归属废品，并按采用该类表带的已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只配有皮革表带的已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`casio-environmental-report-2003`

###### 成品弹性体表带（`elastomer_watch_strap`）

仅当合格手表配有弹性体或树脂表带时纳入。记录实际成品表带材料和供应商数据集，不得以未披露的通用塑料质量替代。

- 选定流：成品弹性体表带（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：弹性体表带消耗质量，包括可归属废品，并按采用该类表带的已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只配有弹性体表带的已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：`casio-environmental-report-2003`

###### 手表纽扣电池（`watch_button_cell`）

仅当电池供电手表所用纽扣电池独立于机芯跨越装配场址边界时纳入。记录电池化学体系、型号、标称容量、是否可充电、供应商以及电池是否已经装入交付机芯。

- 选定流：手表纽扣电池（Tiangong UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：装配领用纽扣电池数量减去经核实的退库数量，并按已验收电池供电手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每只单独领用电池的已验收包装电池供电手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_component_bom`
- 来源：

###### 异丙醇（`isopropanol`）

零部件或表壳清洗消耗异丙醇时纳入。场址记录必须保留纯度、含水量、回收量以及废物或空气去向。

- 选定流：异丙醇 `a4a75541-e156-4e30-947c-ba067a682afd`
- 流属性/单位：Mass / kg
- 数量规则：期初库存加购入量减期末库存、经核实的退回量和回收再用溶剂量，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：使用异丙醇清洗时每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_records`
- 来源：

###### 购入电力（`assembly_electricity`）

记录装配工作台、自动化设备、清洗、测试、包装以及报告期内直接支持设施负荷分摊份额所消耗的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：纳入操作的计量电力加直接支持设施共用负荷的书面分摊量，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_metering`
- 来源：`hes-so-he-arc-mechanical-watch-eco-audit-2022`

###### 清洗和湿式测试用工艺用水（`test_process_water`）

清洗或防水测试导致水跨越前景边界时，纳入净补水量。闭路循环水不得重复计量。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：纳入清洗和湿式测试操作的计量或水箱平衡净工艺用水投入，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实施湿式清洗或测试时每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_water_metering`
- 来源：

###### 纸盒（`paper_box`）

记录零售单元随附的纸或纸板展示盒。非纸装饰组件必须在场址实施中另设原子流行记录。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass / kg
- 数量规则：向合格零售单元发放的纸盒净收货质量加可归属废品，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只配有纸盒的已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：

###### 印刷纸质说明书内页（`paper_instruction_insert`）

将零售包装中随附的印刷纸质说明书、保修或合规内页作为一个纸质内页交换记录。仅提供电子说明书时不分配纸投入。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass / kg
- 数量规则：向合格零售单元发放的印刷纸质内页净质量加可归属废品，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每只含印刷内页的已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_bom`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已验收成品手表（`finished_watch`）

这是完成全部功能测试、质量放行和零售单元包装后的声明参考产品。Tiangong 产品流 UUID 尚未解决；计件属性和参考单位已确认。

- 选定流：手表（Tiangong UUID 未解决）
- 流属性/单位：Number of items / Item(s)
- 数量规则：已验收、放行并采用零售单元包装的手表数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：一只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_output_and_rejects`
- 来源：`un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013`

##### 废物流

###### 报废成品手表（`rejected_finished_watch`）

记录离开前景系统送往处理且未能成功返工为合格产出的已装配废品手表。保留其实际零部件配置和废物去向。

- 选定流：报废成品手表（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：离场处理的已装配废品手表实测质量，不包括成功完成内部返工的手表
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_output_and_rejects`
- 来源：

###### 废异丙醇清洗液（`spent_isopropanol_solution`）

废异丙醇清洗液离场处理或回收时纳入。已知时记录水和污染物含量；返回过程的回收溶剂不得计入该输出。

- 选定流：废异丙醇清洗液（Tiangong UUID 未解决）
- 流属性/单位：Mass / kg
- 数量规则：作为废异丙醇清洗液运离场址的实测质量，并按已验收手表归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：实施异丙醇清洗时每只已验收包装手表
- 基准类型：参考流（`reference_flow`）
- 证据类型：依据采集计算（`calculated_from_collection`）
- 采集协议：`cp_solvent_records`
- 来源：

##### 基本流

空气、水体或土壤直接排放不得使用伞式行表示。场址实施必须针对每种通过测量或质量平衡得到并跨越环境边界的物质新增一个原子基本流行，包括适用时的溶剂排放，并对每个新增行完成 Tiangong UUID 审核。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 多产品装配和包装操作 | 应优先通过独立产品物料清单、验收与废品数量、直接人工或机器记录以及公用工程分表避免分配。 |  |
| `allocation_shared_utilities` | 共用电力、水和直接支持设施负荷 | 仅使用反映消耗的书面物理驱动量分配剩余共用量，例如实测机器小时、测试循环或设备占用时间；保留总量和核对记录。 |  |
| `allocation_rework` | 内部返工 | 将返工投入和损失归属于导致返工的产品系列，并且参考产品分母仅计成功放行的手表。 |  |
| `allocation_recycling` | 回收溶剂、可回收废品和废物处理 | 在前景边界报告回收材料和废物，不得把避免的原生材料或处理抵扣净计入前景清单；替代或回收抵扣应列入明确披露的下游情景。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_component_bom` | `watch_final_assembly` | 机芯、表壳、金属或非金属表带及纽扣电池投入 | 批准物料清单；收货和领料记录；供应商规格；废品记录 | 零部件身份；材料；供应商；批次；期初和期末库存；收货；退回；领用质量或数量；废品质量或数量；产品变体 | 将批准物料清单与批次级仓库领料及实测或供应商声明质量核对；分开互斥的表带和供能路线 | kg 和 Item(s) | 每个生产批次并每月核对 | 具有代表性的连续 12 个月或披露的完整较短生产期 | 报告装配场址控制的所有产线和外包步骤 | 净领用量加可归属废品量除以匹配变体的已验收手表数量 | 批准的 BOM 版本、校准衡器记录、仓库核对、供应商规格和差异调查 |
| `cp_solvent_records` | `watch_final_assembly` | 异丙醇投入和废清洗液输出 | 采购、库存、回收和废物联单记录 | 期初库存；收货；期末库存；退回或回收溶剂；废清洗液质量；纯度；含水量；去向 | 将每月溶剂质量平衡与清洗操作记录和废物外运记录核对 | kg | 每月及每次废物外运 | 与已验收手表产出相同期间 | 所有纳入的清洗工位和场内溶剂回收 | 净消耗投入和离场废物质量除以已验收手表数量；披露无法解释的平衡差额 | 校准库存测量、采购发票、回收日志、废物联单和质量平衡闭合 |
| `cp_electricity_metering` | `watch_final_assembly` | 装配、测试、清洗、包装及支持用电 | 结算电表、分表和设备运行记录 | 电表起止读数；倍率；设备运行时间；额定或实测负荷；停产时间；已验收手表数量；电网合同 | 优先使用分表；将纳入的分表电量和支持负荷分摊量与全厂电表核对 | kWh 和 MJ | 连续或班次读数并每月核对 | 具有代表性的连续 12 个月或披露的完整较短生产期 | 纳入的生产线和直接支持设施负荷 | 纳入的净 kWh 换算为 MJ 后除以已验收手表数量；剩余共用负荷按披露的物理驱动量分配 | 电表校准、能源账单、核对、驱动量记录和书面换算 |
| `cp_water_metering` | `watch_final_assembly` | 清洗和湿式测试工艺用水 | 水表、水箱平衡、批次日志和排水记录 | 补水量；排放体积或质量；循环库存变化；批次数；已验收手表数量；参考条件 | 尽可能计量净补水；否则执行不重复计入循环量的书面水箱平衡 | kg 或换算前 m3 | 每批或每月水表核对 | 与已验收手表产出相同期间 | 纳入的清洗和防水测试系统 | 跨越边界的净水质量除以已验收手表数量 | 水表校准、水箱尺寸、密度假设、泄漏检查和核对 |
| `cp_packaging_bom` | `watch_final_assembly` | 纸盒和印刷纸质内页 | 包装 BOM；收货和领料记录；供应商质量规格 | 包装物身份；材料；单件质量；领用数量；退回数量；废品数量；已验收手表数量 | 将包装 BOM 和领料量与合格零售单元核对；每种其他非纸组件分别记录 | kg 和 Item(s) | 每个包装规格并每月核对 | 与已验收手表产出相同期间 | 报告场址施加的所有零售单元包装 | 包装净领用质量加可归属废品除以采用该配置的已验收手表数量 | 批准的包装规格、校准抽样称量、领料记录和核对 |
| `cp_output_and_rejects` | `watch_final_assembly` | 已验收成品手表和报废已装配手表 | 质量放行、生产、返工和废物记录 | 产品型号；机芯路线；材料配置；已包装验收数量；废品数量和质量；返工进入和放行；废物去向 | 将最终质量放行与包装和发运记录核对；跟踪返工直至验收产出或废物离场 | Item(s) 和 kg | 每个批次并每月核对 | 与全部投入协议相同期间 | 所有纳入的最终装配和质量放行线 | 验收数量为分母；仅把离开系统的废品计为废物输出 | 签署的放行记录、测试日志、返工谱系、校准废品称量和发运联单 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_net_component_input` | 零部件和包装投入行 | （期初库存 + 收货 - 期末库存 - 经核实退回）/ 匹配配置的已验收手表数量；与 BOM 核对，并在领料记录不含废品时加上单独计量的可归属废品 | 库存、收货、退回、BOM、废品和验收产出记录 | 每只已验收包装手表的 kg 或 Item(s) |  |
| `calc_net_solvent_input` | `isopropanol` | （期初库存 + 收货 - 期末库存 - 经核实的离场退回 - 返回库存的回收溶剂）/ 已验收手表数量 | 溶剂库存、收货、退回、回收和验收产出记录 | 每只已验收包装手表的异丙醇投入 kg |  |
| `calc_electricity_per_watch` | `assembly_electricity` | （纳入的分表电量 + 经核对的支持共用电量）× 3.6 MJ/kWh / 已验收手表数量 | 电表、分配驱动量和验收产出记录 | 每只已验收包装手表的 MJ |  |
| `calc_net_process_water` | `test_process_water` | 净补水或跨边界水质量 / 已验收手表数量；不得加入内部循环水量 | 水表或水箱平衡和验收产出记录 | 每只已验收包装手表的 kg |  |
| `calc_waste_per_watch` | 废物输出行 | 离开前景系统的实测质量 / 已验收手表数量；排除成功内部返工和返回过程的回收溶剂 | 废物外运、回收、返工和验收产出记录 | 每只已验收包装手表的废物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 产品及所有交换 | 保留产品型号、机芯和供能技术、零部件材料配置、供应商或来源、流状态和 Tiangong UUID 状态；不得以通用公用工程、材料、废物或排放替代具体交换。 | 批准产品规格、BOM、供应商记录、UUID 直读审核和未解决流登记表 |
| `dq_temporal` | 所有前景记录 | 使用同一代表性期间；披露停产、启动批次、型号变化、不完整月份及任何较短生产期。 | 带日期的电表、库存、生产和放行记录 |
| `dq_completeness` | 质量、件数、公用工程、废物和直接排放平衡 | 核对购入或领用投入、验收产出、废品、回收和库存变化；调查实质差异，并在适用时新增物质特定的直接排放行。 | 核对工作表、质量平衡闭合、差异调查和排放记录 |
| `dq_measurement` | 计量和称量数量 | 保留校准状态、读数频率、单位换算、检出限和分配驱动量；区分供应商声明质量与场内实测质量。 | 校准证书、电表日志、衡器记录、供应商规格和计算文件 |
| `dq_upstream_linkage` | 更广的从摇篮到工厂大门声明 | 使用与声明的地理范围、技术、材料、再生含量和交付状态匹配的零部件、电力、水、溶剂、电池和包装数据集；单独披露代理数据。 | 所链接的数据集元数据和书面代表性评审 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_output` | 参考流 | 确认仅报告一个 `finished_watch` 参考输出，其数量为一件已验收包装产品，且废品不增加分母。 | `un-cpc-3-0-structure-2025`; `un-cpc-2-1-hs-correspondence-2013` |
| `validate_route_exclusivity` | 表带、机芯及供能投入 | 确认只有适用于声明产品配置的材料和供能行具有数量；任何加权产品系列平均值都必须有型号级数量依据。 | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `validate_inventory_reconciliation` | 零部件、公用工程、溶剂、水、产出、返工和废物 | 确认所有归一化值采用同一已验收手表分母和期间，并在归一化前把每项协议与源总量核对。 |  |
| `validate_no_umbrella_flows` | 场址特定新增行 | 拒绝“公用工程”“包装材料”“混合化学品”“废物和残余物”或“空气排放”等合并标签；每个新增行必须表示一个物理或化学交换。 |  |
| `validate_boundary_claim` | 数据集画像 | 除非链接全部所需上游零部件和供应数据集，否则工厂大门数据集不得声称为从摇篮到工厂大门；使用、维护、运输和生命末期处理需要另行建模。 | `casio-environmental-report-2003`; `hes-so-he-arc-mechanical-watch-eco-audit-2022` |
| `validate_unresolved_identities` | UUID 未解决行 | 未解决行必须保持可见；在公开 state-100 直读确认语义身份、分类、流类型、流属性、单位组、产品状态、地理、技术和一般性备注之前，不得发布精确 Tiangong 身份。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 手表装配、测试、质量放行及零售单元包装的前景工厂大门数据集 |
| downstream_use | 添加上游零部件和供应数据集后，可在手表从摇篮到工厂大门或完整生命周期模型中作为 `secondary_dataset` 或 `background_dataset` 链接 |
| allowed_use | 对机芯技术、材料配置、供能系统、地理范围、报告期、质量规范和包装均匹配的完整手表进行产品和场址特定建模 |
| excluded_use | 未限定地比较机械、石英、太阳能或互联产品；用作钟或手表零件数据集；在没有附加数据集时表示零部件制造、分销、使用、维护或生命末期处理 |
| required_metadata | 规范 PCR id；产品型号或系列；CPC 范围；机芯和供能技术；表壳、表盖及金属或非金属表带材料；已验收手表数量；工厂地理范围；报告期；纳入操作；包装配置；分配驱动量；UUID 状态；上游数据集链接 |
| required_quality_disclosure | 计量和称量方法；校准；BOM 版本；供应商数据质量；时间覆盖；完整性和核对；废品和返工；溶剂回收；水循环；共用负荷分配；未解决 UUID；上游代理数据集 |
| update_trigger | 机芯或供能技术、表壳或表带材料、供应商或 BOM、制造地理范围、清洗或测试路线、包装配置、分配驱动量变化，或归一化投入、废品或数据质量发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版结构》，2025-06-30，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期：2026-09-07） | CPC 48410 的正式产品分类身份和英文标题 |
| `un-cpc-2-1-hs-correspondence-2013` | official_guidance | 联合国统计司，《CPC 第 2.1 版完整结构和说明》，https://unstats.un.org/unsd/statcom/doc13/BG-CPC-Version21.pdf（检索日期：2026-09-07） | 通过 HS 9101 和 9102 界定语义边界，并与钟、机芯及其他零件区分 |
| `casio-environmental-report-2003` | literature | CASIO Computer Co., Ltd.，《Environmental Report 2003》之“Comparison of Watches through LCA”，https://arch.casio.com/file/csr/pdf/report_2003/p19-20.pdf（检索日期：2026-09-07） | 单只手表基准、生命周期阶段区分及取决于材料的表壳、表圈和表带配置；不作为范围证据 |
| `hes-so-he-arc-mechanical-watch-eco-audit-2022` | literature | HES-SO / HE-Arc Ingénierie，《Ecological impact of a typical mechanical Swiss watch》，2022，https://www.he-arc.ch/wp-content/uploads/2022/06/Ecological-impact-of-a-typical-mechanical-Swiss-watch.pdf（检索日期：2026-09-07） | 机械手表机芯和外观件分解、材料与加工披露以及电力地理敏感性；不作为范围证据 |
