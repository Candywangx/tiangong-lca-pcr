---
pcr_id: pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48262
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 子类 48262 所列货物的零件和附件

## 1. 范围与适用性

本 PCR 适用于专门或主要供试验材料机械性能的机器及器械使用、并单独供应的零件和附件。涵盖示例包括试样夹头与夹具、施力附件、压板、载荷传感组件、引伸计系统，以及作为试验机零件或附件供应的专用电子模块。前景结果为制造商出厂门处某一已声明产品配置的从摇篮到大门数据包。

完整的材料机械性能试验机器及器械不在范围内。通用紧固件、通用机床、独立计算机、校准服务、试样、安装、客户现场使用、维护和报废处理均不纳入，除非所声明研究明确扩展边界。装入完整试验机的组件在完整机器产品系统中核算；仅当其作为独立产品供应时才由本 PCR 表示。

本类别涵盖物质组成差异显著的产品。只有在所声明零件或附件的功能、兼容机器接口、性能等级和交付状态相同的情况下才允许比较。CPC 正式身份确定语义边界；ISO 7500-1 和 ISO 9513 确定施力附件、力测量系统和引伸计系统所涉及的核查与校准功能。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.medical-appliances-precision-and-optical-instruments-watches-and-clocks.parts-and-accessories-for-the-goods-of-subclass-48262 |
| classification_refs | CPC 3.0:48285，精确映射语境；映射接受决策仍在本 PCR 之外治理 |
| covered_products | 单独供应的夹头、夹具、压板、施力附件、载荷传感组件、引伸计系统，以及材料机械性能试验机专用电子模块 |
| excluded_products | 完整的 CPC 48262 试验机；通用紧固件和电子产品；其他测量仪器零件；试样；校准、安装、使用、维护和报废服务 |
| representative_product | 一个规定的、单独供应的材料机械性能试验机零件或附件 |
| production_route | 外购材料和组件准备；有条件的机械加工、成形、表面处理和清洗；装配；适用时的校准或核查；检验；包装 |
| market_state | 在制造商出厂门处已完成、经检验且单独供应的产品，并声明包装以及适用的校准或合格文件 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 为兼容的材料机械性能试验机提供所声明的机械接口、施力、力传感、变形测量、试样夹持或专用控制功能 |
| How much | 一个规定且单独供应的零件或附件的 1 kg 净质量，不含包装 |
| How well | 符合所声明的图纸或零件编号、兼容机器接口、性能规范，以及适用的校准或核查等级 |
| How long or cycle | 产品在制造商出厂门处交付；本从摇篮到大门质量参考不假定使用寿命或试验循环次数 |
| reference_flow_link | 合格的所声明产品配置的 1 kg 净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 试验材料机械性能用机器及器械的零件和附件 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件或附件类型；制造商零件编号或图纸版本；兼容的试验机型号；功能；材料和组件组成；制造路线；适用的校准或核查状态和等级；适用的软件或固件状态；净质量；包装状态；生产地域；参考年份 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 测量不含包装的合格产品质量。将每项清单数量归一化为恰好 1 kg 净参考产品。 |
| `material_mass_basis` | 材料、组件、废物和废水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录实测或核对后的质量。采购记录使用件数或面积时，应保留换算为 kg 所用的实测换算系数、尺寸以及含水率或涂层基准。 |
| `electricity_energy_basis` | 电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200b9a66` | MJ | 保留电表原始读数，并按 1 kWh = 3.6 MJ 换算；只分配有文件记录的共用电表用电。 |
| `water_mass_conversion` | 工艺用水和废水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先采用实测质量。按体积计量时，应记录温度、密度假设或实测密度，以及换算为 kg 的过程。 |

## 5. 系统边界

前景边界始于外购材料和组件进入报告制造商厂门，止于经检验、合格并完成包装的产品处于该厂门。边界包括可归属的准备、机械加工或成形、表面处理与清洗、装配、校准或核查、检验、返工、内部物料移动和包装。每项外购投入的上游生产和交付以兼容的上游数据集表示，不在前景操作中重复构建。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料和组件到达报告制造商厂门，并声明供应商、产品形态、数量、适用的再生含量声明和入厂地域 |
| starting_condition_role | 从接收环节开始从摇篮到大门前景采集；上游负荷仍通过供应商特定或代表性数据集链接 |
| product_classification_scope | 专门或主要供 CPC 48262 材料机械性能试验机使用、并单独供应的零件和附件；完整机器不属于参考产品 |
| recursive_input_rule | 单独采购且本身符合本 PCR 边界的投入，作为一个具有自身合规数据集的上游产品交换记录；不得在接收过程中递归重建其制造清单 |
| upstream_dataset_requirement | 每项外购材料、组件、电力供应、供水和废物处理路线均采用地域与技术上有代表性的数据集；披露代理项和数据缺口 |
| disclosure | 声明产品配置、BOM 覆盖率、制造与表面处理路线、外包操作、校准或核查状态、返工、包装、分配、截断、地域和参考期 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_category_scope` | 产品身份 | 仅纳入单独供应的 CPC 48262 材料机械性能试验机零件或附件；完整试验机或其他仪器类别的零件应被拒绝。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_foreground_operations` | 前景过程 | 纳入交付合格参考产品所需的全部可归属现场及外包准备、制造、表面处理、清洗、装配、校准或核查、检验、返工和包装。 |  |
| `boundary_upstream_and_waste` | 外购投入和处理 | 将每项外购投入和输出废物链接到与其所声明状态、地域、技术和去向一致的上游供应或处理数据集；不得把上游排放作为直接前景交换。 |  |
| `boundary_use_and_end_of_life` | 下游阶段 | 默认从摇篮到大门结果不纳入安装、使用、维护、更换和报废阶段；任何研究特定的边界扩展均应单独披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `fabrication` | 材料准备、制造、表面处理和清洗 | `conditional` | 纳入报告制造商或可归属委外加工方实际执行的每项操作；仅在产品以完全制成状态接收时省略 | 前景制造 | 对收率和返工进行核对后的 1 kg 净合格产品输出 |
| `assembly_calibration` | 装配、校准或核查及最终检验 | `required` | 始终纳入最终产品放行活动；仅在产品功能或所声明规范要求时进行校准或核查 | 前景装配和放行 | 向包装环节放行的 1 kg 净合格产品 |
| `packaging` | 销售包装 | `required` | 纳入实际包装配置；每个包装材料行仅在使用该材料时适用 | 前景包装 | 归属于 1 kg 净参考产品的包装 |

### 过程：材料准备、制造、表面处理和清洗（`fabrication`）

#### 输入

##### 产品流

###### 不锈钢投入（`stainless_steel`）

仅当外购不锈钢进入所制造产品配置时记录。

- 选定流：不锈钢 `84c2403f-5062-5d68-8276-838384d32b89`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的接收质量，并校正库存变化和退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：

###### 冷加工碳素钢棒投入（`carbon_steel_bar`）

仅对采用该形态制造的产品配置记录冷加工碳素钢棒。

- 选定流：碳素钢 `b3b18433-8fd1-4298-98f5-8af11eb64762`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的接收钢棒质量，并校正库存变化和退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：

###### 初级铝合金板材投入（`aluminium_alloy_sheet`）

仅对采用板材制造的产品配置记录初级铝合金板材。

- 选定流：初级铝合金板材 `2a9549cc-dc9e-43a7-9379-7a0c0a0e4832`
- 流属性/单位：Mass / kg
- 数量规则：实测消耗的接收板材质量，并校正库存变化和退回边角料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_materials`
- 来源：

###### 切削液投入（`cutting_fluid`）

仅在机械加工使用切削液时记录；浓缩液或即用型产品应与采购状态和补充方式一致地分别记录。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：外购补充质量，并校正期初、期末库存和回收液
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_utilities`
- 来源：

###### 制造用电（`fabrication_electricity`）

记录制造边界内可归属于机械加工、成形、表面处理、清洗、抽排和辅助设备的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量值，或有文件记录的设施总表用电对制造批次的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_utilities`
- 来源：

###### 工艺用水投入（`process_water`）

记录进入清洗、漂洗、冷却液补充或其他纳入制造操作的水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：计量表或批次记录的用水量，必要时换算为质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_utilities`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 混合机加工金属废料（`mixed_metal_scrap`）

只有在金属边角料、切屑和不合格金属件未按合金分拣时，才将其作为一个混合废物记录。

- 选定流：混合金属废料 `cc3ee2b1-7c5b-44a0-aa6a-559f1bc3ce36`
- 流属性/单位：Mass / kg
- 数量规则：归属于所表示产品的实测外运废料质量，并与库存及记录的回收或处置去向核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

###### 制造废水（`fabrication_wastewater`）

记录离开金属加工或清洗操作的水性废水；声明其组成、处理状态和去向。

- 选定流：废水 `d2d44ce1-c0f4-461d-9413-f4b33e0d200f`
- 流属性/单位：Mass / kg
- 数量规则：实测排放质量，或由计量体积换算的质量，不含内部循环水
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_fabrication_wastes`
- 来源：

##### 基本流

### 过程：装配、校准或核查及最终检验（`assembly_calibration`）

#### 输入

##### 产品流

###### 电子元器件及印制电路板组件投入（`pcb_assembly`）

仅当电子元器件及印制电路板组件装入所声明零件或附件时记录。

- 选定流：电子元器件及印制电路板组件 `1e37f859-cb9b-47ff-8b0b-5b47d65fa236`
- 流属性/单位：Mass / kg
- 数量规则：实测装入质量加可归属装配不合格品，并与产品 BOM 核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 装配和试验用电（`assembly_test_electricity`）

记录可归属于装配设备、校准或核查装置、检验和返工的电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分表计量值，或有文件记录的设施总表用电对放行批次的分配量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：销售包装（`packaging`）

#### 输入

##### 产品流

###### 瓦楞纸板包装（`corrugated_cardboard`）

记录纳入产品销售包装的瓦楞纸板。

- 选定流：瓦楞纸板 `8bde297e-98df-463f-bcb4-0db52bf6e0b5`
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品的实测包装质量，包括可归属的加工损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

###### 聚乙烯薄膜包装（`polyethylene_film`）

仅在所声明销售包装使用聚乙烯保护膜时记录；其 Tiangong UUID 尚未解决。

- 选定流：聚乙烯薄膜
- 流属性/单位：Mass / kg
- 数量规则：发放给合格产品的实测薄膜质量，包括可归属的加工损耗
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 放行的参考产品（`reference_product`）

记录经检验且合格、单独供应的零件或附件的净质量；该质量不含包装。

- 选定流：试验材料机械性能用机器及器械的零件和附件
- 流属性/单位：Mass / kg
- 数量规则：根据实测放行产品净质量归一化后恰好为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 净参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集数据计算值（`calculated_from_collection`）
- 采集协议：`cp_product_release`
- 来源：`un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025`

##### 废物流

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用的制造、装配、校准、检验和包装 | 在可行时通过产品特定计量、批次记录、BOM 领料记录、机器时间或物理分开的过程步骤避免分配。 |  |
| `allocation_causal_driver` | 其余共用投入和废物 | 无法细分时，采用适合该交换且有文件记录的因果物理驱动量，例如设备用电采用机器时间、物料搬运采用实测质量通量、批次特定操作采用经核实的批次数。 |  |
| `allocation_scrap_treatment` | 混合金属废料 | 按实际去向将废料记录为废物输出。除非所选研究方法明确要求，并在归因结果之外透明报告替代，否则不得在前景清单内抵扣原生金属生产。 |  |
| `allocation_rework_and_rejects` | 返工和不合格零件 | 将参考期内的返工投入和不合格零件废物归属于所表示的合格生产；披露任何从代表性结果中排除的异常生产活动。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_fabrication_materials` | `fabrication` | 不锈钢、冷加工碳素钢棒和初级铝合金板材 | 采购、库存、领料、退料和 BOM 记录 | 材料身份；牌号；形态；供应商；期初库存；接收量；期末库存；退回边角料；批次输出 | 按产品配置和生产批次核对材料消耗 | kg | 每批次，按月汇总 | 覆盖正常产品和运行变化的代表性期间，或有完整记录的一次生产活动 | 报告场址和可归属委外加工方 | 消耗质量 = 期初库存 + 接收量 - 期末库存 - 记录的退料；按放行产品净质量归一化 | 发票；称重单；库存台账；BOM 版本；批次流转卡 |
| `cp_fabrication_utilities` | `fabrication` | 切削液、电力和工艺用水 | 化学品领用、储罐库存、计量表和生产记录 | 产品配方；浓度；期初与期末库存；采购量；回收液；电表；水表；运行小时；批次输出 | 可行时采用专用计量表，否则记录从实测总量进行的分配 | kg 和 MJ | 每批次或每月 | 与产品输出相同的参考期 | 报告场址和可归属制造路线 | 扣除回收量或期末库存；按第 4 节换算电力和水；按放行产品净质量归一化 | 经校准计量表记录；发票；储罐日志；运行日志；分配工作表 |
| `cp_fabrication_wastes` | `fabrication` | 混合金属废料和制造废水 | 废物转移、地磅、废水计量表和处理记录 | 废物身份；质量或体积；组成；处理状态；去向；日期；对应生产 | 核对外运废物、内部回收和库存变化 | kg | 每次外运，按月汇总 | 与产品输出相同的参考期 | 报告场址和可归属委外加工方 | 输出废物 = 期初废物库存 + 产生量 - 期末废物库存 - 内部再利用；按放行产品净质量归一化 | 转移联单；地磅单；计量表校准；实验室分析；处理接收单 |
| `cp_assembly_records` | `assembly_calibration` | PCB 组件和装配/试验用电 | BOM 领用、不合格品、分表、校准和检验记录 | PCB 身份和版本；装入质量；不合格品；电表读数；批次；机器时间；校准或核查结果；放行质量 | 核对装入组件，并将实测能耗分配给放行合格输出 | kg 和 MJ | 每批次 | 与产品输出相同的参考期 | 报告装配和试验场址 | 装入量加可归属不合格品；能源采用分表或有文件记录的因果驱动量；按放行产品净质量归一化 | BOM；领用记录；不合格品日志；计量表记录；校准证书；检验放行记录 |
| `cp_packaging_records` | `packaging` | 瓦楞纸板和聚乙烯薄膜 | 包装规范、领用、采购和损耗记录 | 材料身份；规范；领用质量；退回质量；加工损耗；已包装产品净质量 | 对代表性包装配置称重，并将领用量与包装输出核对 | kg | 每个包装配置并按月核对 | 与产品输出相同的参考期 | 报告包装场址 | 净领用包装加可归属损耗除以净参考产品质量 | 包装图纸；秤校准；领用台账；供应商声明 |
| `cp_product_release` | `packaging` | 合格参考产品 | 最终称重、检验和放行记录 | 产品类型；零件编号；图纸版本；兼容机器；功能；序列号或批号；净质量；性能等级；校准状态；放行处置 | 对不含包装的产品称重，并保留最终合格证据 | kg | 每个放行批次或产品 | 与全部投入记录相同的参考期 | 报告制造商 | 汇总放行合格产品净质量，并将相关清单归一化为恰好 1 kg | 经校准秤记录；检验报告；适用的校准或核查证书；放行授权 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 可归属交换量 / 放行合格产品净质量 | 交换量；放行合格产品净质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_electricity_conversion` | 电力行 | 电力（MJ）= 实测电力（kWh）x 3.6 | kWh 电表读数 | MJ 电力 |  |
| `calc_material_reconciliation` | 外购材料和组件 | 消耗质量 = 期初库存 + 接收量 - 期末库存 - 记录的退回量或转出量 | 按材料身份区分的库存和交易记录 | 消耗材料质量 |  |
| `calc_waste_reconciliation` | 废料和废水 | 输出废物 = 期初废物库存 + 产生或收集量 - 期末废物库存 - 记录的内部再利用 | 废物库存、外运、计量表和再利用记录 | 输出废物质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留零件编号或图纸版本、功能、兼容机器、产品配置、净质量和放行状态。 | BOM、图纸、产品规范、经校准秤记录、检验放行记录 |
| `dq_temporal_alignment` | 全部前景交换 | 投入、输出、库存校正、不合格品、返工和放行产品应覆盖同一代表性期间；说明所选期间如何涵盖正常产品和运行变化。 | 带日期台账、计量表记录、生产报告、生产活动理由 |
| `dq_bom_completeness` | 外购材料和组件 | 将全部外购投入质量核对到具名原子流；否则应按具体物质或组件逐项记录每个剩余质量，并在发布前解决其 UUID。 | 基于质量的 BOM 核对表和未解决流日志 |
| `dq_meter_quality` | 电力、水、废水和产品质量 | 记录计量表或秤的身份、校准状态、读数间隔、缺失数据处理和分配方法。 | 校准记录、计量日志、估算工作表 |
| `dq_calibration_traceability` | 施力、力测量和引伸计附件 | 产品声明依赖校准或核查时，应保留适用程序、设备身份、结果、不确定度或等级以及证书可追溯性。 | 校准或核查记录；`iso-7500-1-2018`；`iso-9513-2012` |
| `dq_upstream_representativeness` | 链接的上游数据集 | 匹配材料状态、地域、技术、再生含量、电力结构、供水和废物去向；披露每个代理项。 | 数据集元数据和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_category_scope` | 产品身份 | 输出应为专门或主要供 CPC 48262 材料机械性能试验机使用、并单独供应的零件或附件；完整机器或其他仪器零件不符合类别。 | `un-cpc-3-0-structure-2025`; `un-cpc-3-0-explanatory-notes-2025` |
| `validate_reference_flow` | 功能单位和参考流 | 确认恰好 1 kg 不含包装的净合格产品，以及包括产品功能、接口、配置、制造路线和适用的校准状态在内的全部必需限定信息。 |  |
| `validate_inventory_atomicity` | 过程清单 | 每项交换应为具有一个方向、一个流类型、一个属性、一个单位和一个适用条件的具体原子流；不得使用公用工程、材料、包装、废物或排放伞形行。 |  |
| `validate_inventory_reconciliation` | 投入、输出、返工和库存 | 在同一期间核对采购、库存、BOM、计量表、不合格品、返工、废物和放行记录；调查并披露每项无法解释的物料平衡差异。 |  |
| `validate_uuid_status` | Tiangong 引用 | 仅使用经直接审计、公开的 state_code=100 UUID，且语义、分类、产品状态、流类型、属性和单位组均匹配。在审计到精确候选之前，参考产品和聚乙烯薄膜 UUID 保持未解决。 |  |
| `validate_calibration_claim` | 经校准或核查的附件 | 带有校准或性能声明的施力附件、力测量组件或引伸计应保留适用的检查、校准或核查证据，并识别静态或动态应用边界。 | `iso-7500-1-2018`; `iso-9513-2012` |
| `validate_boundary_and_allocation` | 数据集模型 | 确认全部前景与外包操作、上游链接、废物去向、排除项、截断、代理项及共用过程分配驱动量均已披露并一致应用。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 方法学和 UUID 审查后作为 `secondary_dataset` 或 `background_dataset`；本候选 PCR 本身不发布数据集 |
| downstream_use | 所声明且单独供应的材料机械性能试验机零件或附件的从摇篮到大门过程数据集和 lifecyclemodel 组件 |
| allowed_use | 当产品功能、兼容机器接口、材料组成、制造路线、校准状态、地域、时间和包装具有代表性时，用于产品足迹及设备系统研究 |
| excluded_use | 跨不同附件功能或性能等级的比较；完整机器数据集；无条件限定的全球平均值；未增加情景数据的使用阶段或报废声明 |
| required_metadata | 规范 PCR id；产品类型；零件编号或图纸版本；兼容机器；功能；净质量；BOM 覆盖率；制造和表面处理路线；校准或核查状态；地域；参考期；包装；分配；截断；数据源；UUID 解决状态 |
| required_quality_disclosure | 时间和地域代表性；一次数据占比；计量表和秤质量；BOM 质量覆盖率；物料平衡结果；外包操作；代理项；不确定度；未解决 UUID 或范围证据需求 |
| update_trigger | 材料设计或供应商变化；制造路线或场址变化；影响声明的校准标准修订；电力或废物处理变化；更具代表性的前景数据；参考产品或聚乙烯薄膜 UUID 得到解决；新的独立范围证据 |

## 11. 数据源

| 数据源 id | 类型 | 引用 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | `official_guidance` | 联合国统计司，*CPC Version 3.0 Structure*，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv（检索日期 2026-09-07） | CPC 48262 和 48285 的正式产品分类身份与层级 |
| `un-cpc-3-0-explanatory-notes-2025` | `official_guidance` | 联合国统计司，*CPC Version 3.0 Explanatory Notes*，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-09-07） | 对完整机器边界与单独供应零件和附件边界进行原文核实 |
| `iso-7500-1-2018` | `standard` | ISO 7500-1:2018，*Metallic materials - Calibration and verification of static uniaxial testing machines - Part 1: Tension/compression testing machines - Calibration and verification of the force-measuring system*，ISO 正式摘要和状态页，https://committee.iso.org/standard/72572.html?browse=tc（检索日期 2026-09-07） | 包括施力附件在内的一般检查、力测量系统校准、性能等级核查和静态应用限制 |
| `iso-9513-2012` | `standard` | ISO 9513:2012，*Metallic materials - Calibration of extensometer systems used in uniaxial testing*，ISO 正式摘要和状态页，https://committee.iso.org/standard/41619.html?browse=tc（检索日期 2026-09-07） | 接触式和非接触式引伸计系统的身份与静态校准范围 |
