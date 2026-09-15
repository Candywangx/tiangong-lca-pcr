---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.text-based-discs-tapes-or-other-physical-media
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 文本类光盘、磁带及其他实体载体

## 1. 范围与适用性

本 PCR 适用于以非音频文本材料为界定内容的已录制实体载体，包括载有期刊、教科书、工具书、名录、邮寄名单、数据库及类似汇编文本的产品。所涵盖的载体示例包括 CD-ROM、软磁盘、缩微胶卷和缩微平片。不包括音乐录音、有声读物及其他音频产品、电影及其他视频内容、空白载体、成套软件、仅在线提供的出版物或数据库，以及收费或合同复制服务。类别边界遵循 `un-cpc-3-0-explanatory-notes-2025`。

下述详细清单模式经核实适用于工厂大批量复制的光盘，边界截至工厂大门。不得将其作为磁带、软磁盘、缩微胶卷、缩微平片或其他载体技术的替代模型；这些路线在审查前必须具有各自明确披露的原子化前景清单。默认边界不包括配送、使用、寿命终止和销售包装。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.text-based-discs-tapes-or-other-physical-media |
| classification_refs | CPC 3.0：47692，精确分类语境 |
| covered_products | 以非音频文本材料为界定内容的已录制实体载体，包括 CD-ROM、软磁盘、缩微胶卷、缩微平片、名录、邮寄名单、数据库和文本汇编 |
| excluded_products | 音乐音频载体；有声读物；非音乐类音频载体；电影和视频载体；空白载体；成套软件；仅在线内容；复制服务 |
| representative_product | 不含销售包装、符合要求且已录制并印有标签的文本类光盘 |
| production_route | 内容母版制作、以压模进行聚碳酸酯注塑成型、金属反射层沉积、丙烯酸保护清漆涂布、标签印刷、检验和工厂大门交付 |
| market_state | 制造场址大门处的已录制成品实体载体；声明载体技术、格式、容量、文本内容类型、录制方式、标签体系、产品质量及销售包装排除情况 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供以非音频文本材料为界定内容的已录制成品实体载体 |
| How much | 制造场址大门处 1 kg 符合要求的产品 |
| How well | 能以声明的载体格式读取，内容母版和标签已经核验，并通过生产者形成文件的检验准则 |
| How long or cycle | 在工厂大门放行的一个生产批次；不隐含使用寿命声明 |
| reference_flow_link | 功能单位由下述单一参考产品流实现 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 文本类光盘、磁带及其他实体载体 `744fd6c5-67cd-43f5-b5f4-6bc44a73dd93` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 载体技术和格式；录制或复制技术；文本内容类型；适用时的标称容量或影像数量；产品质量；标签和涂层体系；再生含量声明；制造地理区域；制造时期；销售包装已排除或单独建模；检验验收依据 |

构建前景数据包时，`必需限定信息` 中列出的信息必须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 参考产品及全部按质量归一化的清单行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在检验后、销售包装前测量产品净质量。将合格批次和每项清单数量归一化为恰好 1 kg 符合要求的参考产品。 |
| `energy_unit_conversion` | 外购电力 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留电表原始单位，并按 1 kWh = 3.6 MJ 将 kWh 换算为 MJ；不得使用燃料低位热值进行换算。 |
| `water_mass_conversion` | 工艺用水 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先使用直接质量记录。若按体积计量，记录实测体积、温度或采用的密度及换算过程；不得默认为某一密度。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 代表性复制光盘路线 | 纳入报告场址执行的内容母版制作、注塑和压制、反射层沉积、保护清漆涂布与固化、标签印刷、检验、内部搬运、外购电力、工艺用水，以及截至工厂大门的外运制造废料。配送、使用、寿命终止和销售包装默认排除，除非声明的研究扩展对其单独建模。 | `us-epa-life-cycle-cd-dvd` |
| `boundary_non_optical_routes` | 磁性载体、软磁盘、缩微品或其他非光学载体路线 | 不得替用光盘清单模式。声明载体路线，并依据前景记录和路线特定证据，按实际材料、能源、水、废物和直接排放逐项增加原子交换。 | `un-cpc-3-0-explanatory-notes-2025` |
| `boundary_capital_goods` | 资本设备和基础设施 | 默认前景边界排除注塑机、金属化设备、印刷设备、建筑物和耐用压模；仅当研究目标要求资本品或其贡献具有实质性时，披露并单独纳入。 |  |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购材料、电力和水以发票、交货记录、规格书及计量边界所记录的供应商状态跨越制造场址边界 |
| starting_condition_role | 前景生产始于投入接收；上游生产由所连接的供应商数据集或背景数据集表示 |
| product_classification_scope | 以非音频文本材料为界定内容的已录制实体载体；载体技术不会改变以内容界定的产品身份 |
| recursive_input_rule | 若本类别的已录制文本载体产品作为投入使用，则将其作为产品投入记录一次并连接其自身上游数据集，不在消费过程中递归展开其制造清单 |
| upstream_dataset_requirement | 每项外购产品投入和能源投入均须有地理和技术代表性相符的上游数据集，或披露并说明代理数据集的合理性 |
| disclosure | 声明供应商状态、再生含量、载体格式、内容母版归属、场址地理区域、时间覆盖、包装处理、排除的资本品及每项代理或数据缺口 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| optical_disc_replication | 光盘复制与精加工 | required | 仅适用于代表性大批量复制光盘路线 | 前景生产 | 销售包装前 1 kg 符合要求、已录制并印有标签的文本类光盘输出 |
| sale_packaging | 销售包装装配 | excluded_by_default | 仅在已声明的扩展边界中纳入，并将每个实际包装组件分别作为原子流增加 | 条件性包装扩展 | 每 1 kg 已包装参考产品 |

### 过程：光盘复制与精加工（`optical_disc_replication`）

#### 输入

##### 产品流

###### 光学级聚碳酸酯基材树脂（`polycarbonate_granulate`）

聚碳酸酯颗粒进入注塑工序，形成已录制光盘的基材。

- 选定流：聚碳酸酯颗粒 `f4ad7c9a-3141-4c38-b932-45b7e67e05c6`
- 流属性/单位：Mass / kg
- 数量规则：发放至批次的聚碳酸酯颗粒净量，扣除有记录的未开封退库量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 铝溅射靶材（`aluminium_sputtering_material`）

溅射靶消耗的金属铝形成反射层。尚未确认精确的 Tiangong 流 UUID；不得以原铝棒材或按体积计量的铝半成品候选项替代。

- 选定流：铝溅射靶材
- 流属性/单位：Mass / kg
- 数量规则：分配至批次的实测靶材质量消耗量，包括形成文件的换靶和回收核算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_material_issues`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 保护性丙烯酸清漆（`acrylic_varnish`）

保护性丙烯酸清漆跨越过程边界，用于涂覆反射层并经固化防止其受损。

- 选定流：丙烯酸清漆 `56a0ef1c-80ef-4e0c-b690-c8aefb4c7e8e`
- 流属性/单位：Mass / kg
- 数量规则：发放至批次的实测清漆量，并扣除形成文件的退回物料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 标签印刷油墨（`printing_ink`）

在成品光盘上印刷产品标签时，油墨跨越过程边界。

- 选定流：油墨 `7627af63-d2c2-4245-906f-023847c7739f`
- 流属性/单位：Mass / kg
- 数量规则：发放至批次的印刷油墨实测总量，扣除形成文件的退回油墨
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_issues`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 外购电力（`electricity`）

外购电力供应场内内容母版制作、注塑、溅射、固化、印刷、检验以及已分配的辅助设备。

- 选定流：电力 `67b723a9-6f63-4802-adca-b52ce7967d47`
- 流属性/单位：Net calorific value / MJ
- 数量规则：分配至批次的外购电力计量值，扣除单独计量的排除作业
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_electricity_meter`
- 来源：`us-epa-life-cycle-cd-dvd`

###### 工艺用水（`process_water`）

仅当制造或分配至批次的设备支持作业用水跨越前景边界时，记录工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：分配至纳入作业的工艺用水计量值或发票量，并按 `water_mass_conversion` 换算为质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_process_water_meter`
- 来源：`us-epa-life-cycle-cd-dvd`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 符合要求的已录制文本载体产品（`text_media_product`）

合格产品在完成内容、可读性、标签和质量检查后实现参考流。

- 选定流：文本类光盘、磁带及其他实体载体 `744fd6c5-67cd-43f5-b5f4-6bc44a73dd93`
- 流属性/单位：Mass / kg
- 数量规则：根据实测合格批次输出归一化后恰好为 1 kg
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_conforming_output`
- 来源：`un-cpc-3-0-explanatory-notes-2025`

##### 废物流

###### 聚碳酸酯制造废料（`polycarbonate_manufacturing_scrap`）

离开纳入过程的报废基片、边角或开机废料及其他聚碳酸酯光盘注塑废料，作为一种聚合物特定废物交换记录。内部再加工材料不跨越过程边界，应作为内部循环单独报告。

- 选定流：聚碳酸酯制造废料
- 流属性/单位：Mass / kg
- 数量规则：离开过程的聚碳酸酯废料实测量，不含有记录且返回同一过程边界内的内部再研磨料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 符合要求的已录制文本类光盘输出
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_mass`
- 来源：`us-epa-life-cycle-cd-dvd`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 共用生产线和辅助系统 | 在可行时，对文本载体批次进行细分或直接计量。不能细分的共用计量值，应按机器运行时间或实测产量等形成文件的因果驱动因素分配；仅在因果关系得到证明时方可采用质量分配。 |  |
| `allocation_internal_regrind` | 返回同一过程边界内的聚碳酸酯再研磨料 | 将内部再研磨料视为内部循环：不得报告为外运废物或第二产品。损耗和追加能源仅在其发生的过程中记录一次。 |  |
| `allocation_exported_scrap` | 跨越前景边界的聚碳酸酯废料 | 将外运废料报告为废物流。除非单独声明的下游回收模型采用一致的替代方法，否则不得在本前景过程中计入避免原生材料的抵扣。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_issues` | `optical_disc_replication` | 聚碳酸酯、铝靶材、清漆和油墨投入 | 库存领用和退库记录 | 物料身份；批次 id；期初库存；领用量；退回量；期末库存；换靶或回收记录 | 核对仓库领用、线边库存、退回及供应商规格书 | kg | 每个生产批次；每月核对 | 与报告输出相同的期间 | 报告场址所有纳入的生产线 | 净消耗 = 期初库存 + 收货 - 期末库存 - 有记录的退回；共用靶材消耗按实测批次产量或运行时间分配 | 经校准的秤、库存核对、供应商规格书及异常日志 |
| `cp_electricity_meter` | `optical_disc_replication` | 外购电力投入 | 电表和运行日志 | 电表 id；期初和期末读数；原始单位；纳入设备；运行小时；排除负荷 | 读取专用电表；否则将分表和设备日志与场址账单核对 | kWh 或 MJ | 每批次或班次；每月账单核对 | 至少一个具有代表性的生产期间 | 所有纳入的生产和辅助设备 | 扣除排除的计量负荷，按形成文件的运行时间分配其余共用负荷，将 kWh 换算为 MJ，并除以合格输出质量 | 电表校准、账单核对、覆盖图及分配工作表 |
| `cp_process_water_meter` | `optical_disc_replication` | 工艺用水投入 | 水表、发票和换算记录 | 水表 id；体积或质量；温度；密度来源；纳入作业；排放关联 | 读取专用水表或将纳入份额与发票核对；保留换算输入 | kg 或 m3 | 每批次或每月，与输出期间一致 | 与报告输出相同的期间 | 纳入的制造和设备支持作业 | 使用有记录的密度将实测体积换算为质量，并将纳入水量除以合格输出质量 | 水表校准、发票核对、密度记录及边界图 |
| `cp_conforming_output` | `optical_disc_replication` | 符合要求的参考产品输出 | 生产和检验记录 | 批次 id；载体格式；生产总质量；报废质量；合格质量；内容母版检查；可读性结果；标签结果 | 称量合格输出，并与检验和报废日志核对 | kg | 每个生产批次 | 与全部投入和废物记录相同的期间 | 报告场址所有纳入的生产线 | 仅合计合格输出，并将清单归一化为恰好 1 kg | 秤校准、检验记录、报废日志及批次核对 |
| `cp_scrap_mass` | `optical_disc_replication` | 聚碳酸酯废料输出 | 废物和内部循环记录 | 批次 id；废料聚合物身份；废料总质量；内部再研磨质量；外运废料质量；去向 | 分选并称量聚碳酸酯废料；核对内部再研磨和场外转移 | kg | 每批次或每次废物转移；每月核对 | 与报告输出相同的期间 | 所有纳入的注塑和检验点 | 仅报告跨越过程边界的废料；将外运废料和内部再研磨与实测废料总量核对 | 秤校准、聚合物分选记录、再研磨日志及废物转移记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单行 | 归一化数量 = 纳入的交换数量 / 合格产品质量 | 交换记录；来自 `cp_conforming_output` 的合格输出质量 | 每 1 kg 参考产品的交换量 |  |
| `calc_electricity_conversion` | `electricity` | 电力（MJ）= 电力（kWh）× 3.6 | 计量的 kWh | 外购电力 MJ |  |
| `calc_material_net_use` | 材料投入行 | 材料净用量 = 期初库存 + 收货 - 期末库存 - 有记录的退回 | 库存和领用记录 | 批次消耗的材料 kg |  |
| `calc_scrap_boundary` | `polycarbonate_manufacturing_scrap` | 外运废料 = 分选的聚碳酸酯废料总量 - 经核验且返回同一过程边界的内部再研磨料 | 废料称量记录；再研磨日志 | 跨越过程边界的废物 kg |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和材料行 | 保留载体格式、内容类型、材料等级或配方、供应商状态，并在可用时保留精确 UUID 决策；不得将非光学载体路线与光盘清单合并。 | 产品规格书、供应商规格书、内容母版记录和 UUID 审计 |
| `dq_temporal` | 前景清单 | 投入、输出和废物须覆盖同一生产期间，并在发生时涵盖开机、换产、报废和停机影响。 | 带日期的计量、库存、生产、检验和废物记录 |
| `dq_completeness` | 光盘复制 | 核对所有纳入生产线的物料领用、合格输出、报废品、内部再研磨、外运废料、电力和水；披露任何未计量或排除的作业。 | 批次质量平衡、公用工程核对及边界检查表 |
| `dq_representativeness` | 发布数据集 | 声明场址地理区域、技术、载体格式、容量、录制方式、标签体系、供应商状态、再生含量及参考期间。 | 数据集元数据和初级记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 确认输出是在实体载体上的非音频文本材料，而非音频、视频、空白载体、成套软件、仅在线内容或复制服务；要求全部参考流限定信息。 | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_inventory_balance` | 过程清单 | 要求代表性路线恰好声明八行，每个选定流均为原子交换；仅当缺失 UUID 未出现在 manifest 未解决登记中时标记错误，并确认总行数等于 UUID 匹配行加未解决行。 |  |
| `validate_mass_normalization` | 前景计算 | 确认实测合格输出为正值、每项数量覆盖同一期间，且每项报告交换均归一化为恰好 1 kg 参考产品。 |  |
| `validate_route_applicability` | 载体技术 | 若磁带、软磁盘、缩微胶卷、缩微平片或其他载体技术没有单独核实的原子化清单，则拒绝以光盘清单模式作为其代理。 | `un-cpc-3-0-explanatory-notes-2025` |
| `validate_packaging_boundary` | 销售包装 | 确认销售包装已从参考产品和清单中排除；若扩展研究纳入包装，要求将每个包装组件作为默认八行模式之外的独立原子流。 | `us-epa-life-cycle-cd-dvd` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 代表性大批量复制光盘路线的前景生产数据集 |
| downstream_use | 作为消耗已录制文本类光学载体产品的次级数据集和背景数据集 |
| allowed_use | 在声明的载体、过程、地理、期间及材料状态具有代表性时，对已录制、印有标签且不含包装的文本类光盘进行工厂大门建模 |
| excluded_use | 未单独进行路线特定建模的磁带、软磁盘、缩微胶卷、缩微平片、其他非光学载体、空白载体、成套软件、在线内容、配送、使用、寿命终止或含包装产品声明 |
| required_metadata | 规范 PCR id；载体技术和格式；内容类型；录制和标签技术；容量；产品质量；场址地理区域；参考期间；供应商和再生含量状态；包装边界；分配驱动因素；未解决 UUID；代理项 |
| required_quality_disclosure | 计量和库存覆盖；输出与报废核对；内部再研磨处理；公用工程分配；数据缺口；代理数据集；不确定性；排除作业；检验准则 |
| update_trigger | 载体技术、基材、反射层、涂层或油墨体系、内容复制过程、场址或电网、包装边界、分配方法发生变化，或有证据会实质改变清单 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-explanatory-notes-2025` | official_guidance | 联合国统计司，《CPC 第 3.0 版解释性说明》，2025 年 6 月 30 日更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | CPC 47692 正式边界：实体载体上的非音频文本材料，包括 CD-ROM、软磁盘、缩微胶卷、缩微平片、名录、邮寄名单、数据库及类似汇编 |
| `us-epa-life-cycle-cd-dvd` | official_guidance | 美国环境保护署，《CD 或 DVD 的生命周期》，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=P1001UU0.TXT | 光盘材料与过程分解：聚碳酸酯注塑和压制、铝溅射、丙烯酸保护清漆、标签印刷，以及可选的塑料或纸板包装 |
