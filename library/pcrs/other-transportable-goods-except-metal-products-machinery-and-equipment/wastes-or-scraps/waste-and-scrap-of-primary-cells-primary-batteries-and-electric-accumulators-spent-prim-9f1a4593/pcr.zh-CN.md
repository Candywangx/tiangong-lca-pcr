---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-primary-cells-primary-batteries-and-electric-accumulators-spent-prim-9f1a4593
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 原电池、原电池组和蓄电池的废料和废屑；废原电池、废原电池组和废蓄电池

## 1. 范围与适用性

本 PCR 适用于废弃或失效的原电池、原电池组及可充电蓄电池的前景数据包，边界从第一个受控收集点或接收门开始，延伸至声明的预处理和回收作业。范围包括完整电芯、模组和电池包、损坏或有缺陷的电池、具有废物身份的制造废料、按化学体系分选的批次，以及在来源、状态和路线仍可追溯时的电池衍生馏分。

本类别不预设化学体系。合规数据包必须区分具有实质差异的化学体系和路线，不得在未披露的情况下把铅酸、镍镉、锌锰、锂离子、钠基或其他体系平均合并。新电池制造、电池使用、普通维修及通用电气电子设备废物不属于默认边界。设备内嵌电池仅在电池份额被单独识别后进入本范围；上游设备拆解仅在明确声明时纳入。

废物身份不能与产品流类型混为一谈。除非适用司法管辖区和接收合同另有确定，进入系统的电池始终保持废物身份。黑粉、破碎粉、回收壳体馏分、盐类和金属均为不同输出：必须依据声明门处的文件化状态，分别记录为废物或可交易二次原料。由于组成、处理状态和身份随化学体系和路线而变化，本 PCR 不为黑粉或金属产品规定默认 UUID。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.wastes-or-scraps.waste-and-scrap-of-primary-cells-primary-batteries-and-electric-accumulators-spent-prim-9f1a4593 |
| classification_refs | CPC 3.0：39380，精确分类语境 |
| covered_products | 原电池、原电池组和蓄电池的废料和废屑；废电芯、电池、模组和电池包；废电池制造废料；来源可追溯且已单独识别的电池衍生馏分 |
| excluded_products | 新电池和蓄电池；作为产品系统的电池制造；仍在正常使用的电池；电池识别之前的通用 WEEE、车辆或混合市政废物；无关电子废料；电池来源和处理状态不可追溯的二次原料 |
| representative_product | 单独收集、按接收状态计量的废电池批次，并声明化学体系组合、构型、废物身份、荷电与安全状态、总质量与电池净质量基准以及预处理状态 |
| production_route | 收集与接收；识别与安全处置；回收前准备；有条件的机械预处理；有条件的火法、湿法、直接回收或其他声明的材料回收路线 |
| market_state | 在参考门处等待受控管理的废物；不是新电池，也不是二次原料，除非某一单独输出已取得文件化的产品或废物终止状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 对按接收状态计量的废电池批次进行受控管理和声明的转化 |
| How much | 声明参考门处的 1 kg 废电池 |
| How well | 批次以化学体系、构型、废物身份、荷电与安全状态、预处理状态、纳入的质量组成、收集来源和去向路线进行表征；所有输出馏分均保留文件化去向和状态 |
| How long or cycle | 从声明的第一个受控收集点或接收门起，至数据包所主张的最后一个前景作业止 |
| reference_flow_link | 定量参考是按接收状态计量的废电池质量；各阶段输出应单独报告，除非重新定义数据包，否则不得用阶段输出替代参考流 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 声明门处按接收状态计量的 1 kg |
| 参考产品流 | 电池 `921de03b-28b1-4c75-8642-204afbc79d2d` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 废物身份依据及适用司法管辖区；电池族与化学体系或实测化学体系组合；原电池或可充电状态；电芯、模组、电池包或废料构型；内嵌电池拆除状态；荷电状态或经核验的安全状态；损坏、有缺陷、召回、临界或正常寿命终止状况；总质量与电池净质量基准；纳入的壳体、电解液、液体和非电池附件；收集来源、地理范围和期间；预处理状态；拟采用的回收或转移路线 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。所选 Tiangong 数据行为通用 CPC 39380 `Product flow`；该流类型本身不会改变已声明的废物身份。仅当实际前景批次与相应化学体系和状态一致时，才可选择废锂离子、锌锰或 LMO 电池的化学体系特定数据行。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考废电池批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在声明门处测量按接收状态计量的总质量，并说明是否包含电池包外壳、电解液、游离液体、运输包装和非电池附件。 |
| `net_battery_mass` | 仅电池材料的质量平衡 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 仅根据实测总质量和单独实测的排除组成计算电池净质量；保留两个数值及其计算过程。 |
| `dry_mass_basis` | 回收效率或材料回收声明 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg dry matter | 使用干质量计算时，应记录湿质量、取样与含水率方法、分离杂质、外壳处理和全部换算因子；不得以干质量静默替代参考数量。 |
| `chemistry_partition` | 混合电池批次 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg and mass fraction | 通过连续分选记录或有文件记录的代表性取样方案确定各化学体系份额，并保留未分类余量，不得将其重新分摊给已知化学体系。 |
| `state_and_safety_record` | 每个接收批次或单独管理的子批次 | Descriptive record | not applicable | 记录荷电状态或安全状态证据、损坏和泄漏状况、热事件状态、端子保护、隔离或包装，以及将该批次导向储存、放电、拆解、运输或应急处置的决定。 |
| `output_status_record` | 黑粉、破碎粉、金属、盐类、塑料、残渣及其他输出馏分 | Mass plus descriptive record | kg | 在声明门处测量每项输出，并记录其是否仍为废物、需要进一步处理的中间馏分，或具有文件化接收状态的产品或二次原料。 |

## 5. 系统边界

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_waste_identity` | 进入系统的电池批次 | 从已声明废弃或失效状态、持有人、收集来源及适用法律或合同依据的批次开始；不得把 Tiangong 产品流类型解释为该批次已终止废物身份的证据。 | `unsd-cpc-3-2025`; `eu-batteries-reg-2023-1542` |
| `boundary_controlled_collection` | 收集与运输 | 当收集、集运、路线运输及相关包装由报告组织控制时予以纳入；否则把送达批次链接至单独的上游收集数据集，并声明接收门。 | `eu-batteries-reg-2023-1542`; `us-epa-used-lib-safety` |
| `boundary_safe_receipt` | 接收与储存 | 纳入前景内发生的识别、称量、检查、化学体系分流、荷电状态或安全状态评估、端子保护、损坏电池隔离、溢漏处置和受控储存。 | `us-epa-used-lib-safety` |
| `boundary_preparation` | 回收前准备 | 将分选、储存、搬运、电池包拆解、非电池馏分移除及其他准备作业与后续回收过程分开。 | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `boundary_route_specific_recycling` | 回收作业 | 仅纳入前景场址实际控制的机械、热处理、湿法、火法、直接回收、纯化或精炼步骤；不得将路线特定过程跨化学体系泛化。 | `us-epa-lib-recycling`; `eu-waste-battery-recycling-2025-606` |
| `boundary_output_gate` | 输出馏分 | 每条前景分支应终止于实测输出馏分。区分送往进一步处理的中间馏分与最终输出馏分，并保留该门处的废物、产品或废物终止状态。 | `eu-waste-battery-recycling-2025-606`; `us-epa-lib-recycling` |
| `boundary_exclusions` | 默认类别边界 | 排除新电池生产、使用阶段电力或服务、电池识别之前的通用 WEEE 或车辆处理、无关电子废料、下游新正极或新电池制造，以及避免原生材料生产的抵扣；除非研究明确扩展边界并记录方法。 | `unsd-cpc-3-2025`; `iso-14044-2006` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在第一个受控收集点或接收门移交的、已单独识别的废电池批次，并记录按接收状态计量的质量和安全状况 |
| starting_condition_role | 需要受控管理的废物投入；参考流不是新电池产品，也不是自动合格的二次原料 |
| product_classification_scope | CPC 3.0 39380；化学体系、构型、预处理状态和输出身份是必需的子类别限定信息 |
| recursive_input_rule | 当本类别的废电池流进入后续前景步骤时，仅将其作为可见输入记录一次，并保留上游数据集引用和预处理状态；不得在该步骤内部递归附加完整类别链 |
| upstream_dataset_requirement | 外购或转移的电池馏分必须链接至声明来源、化学体系、纳入质量、预处理作业、废物或产品身份、地理范围、期间及分配方法的数据集 |
| disclosure | 声明每个前景门、受控收集段、化学体系拆分、预处理步骤、回收路线、场外转移、截断、库存变化，以及最终或中间输出的身份 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `collection_and_transport` | 受控收集、集运和运输 | conditional | 当报告组织控制接收之前的收集路线时纳入 | 转移已识别的废电池批次，不与市政可回收物或通用 WEEE 混合 | 每 kg 送达废电池和实测吨公里 |
| `receipt_characterization` | 接收、识别、安全评估、分选和储存 | required | 在声明接收门始终要求 | 建立质量、化学体系、构型、废物身份、荷电与安全状态以及接收或拒收馏分 | 每 kg 按接收状态计量的参考流 |
| `preparation_for_recycling` | 放电或安全状态调节、拆解和非电池馏分移除 | conditional | 纳入第一次回收转化之前实际执行的每项作业 | 生成可追溯的已准备电池或电池馏分以及单独计量的移除物 | 每 kg 接收废电池 |
| `mechanical_preprocessing` | 尺寸减小和物理馏分分离 | conditional | 实施切碎、破碎、筛分、磁选、重力分选或相关分离时纳入 | 生成黑粉或其他中间馏分以及回收壳体馏分 | 每 kg 已准备电池投入 |
| `material_recovery` | 热处理、湿法、火法、直接回收或其他材料回收 | conditional | 仅纳入前景场址控制的化学体系和技术特定路线 | 将电池衍生馏分转化为实测中间或最终输出及残渣 | 每 kg 进入路线的电池衍生馏分 |

### 过程：受控收集、集运和运输（`collection_and_transport`）

#### 输入

##### 产品流

###### 收集的废电池（`collected_waste_batteries`）

单独识别的批次进入受控收集路线，并记录废物身份、化学体系信息、安全状况和总质量。

- 选定流：电池 `921de03b-28b1-4c75-8642-204afbc79d2d`
- 流属性/单位：Mass / kg
- 数量规则：装入受控路线的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 送达接收门的废电池
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection_route`

###### 收集运输服务（`collection_transport_service`）

根据实测批次质量和路线距离记录每个具有实质差异的车辆或运输方式区段；有实际路线记录时不得以通用路线替代。

- 选定流：运输服务候选流，应按声明的方式和地理范围选择
- 流属性/单位：Transport service / tkm
- 数量规则：每一区段的送达电池质量（吨）乘以实测路线距离（公里）
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 送达接收门的废电池
- 基准类型：运输服务（`transport_service`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_collection_route`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 送达的废电池批次（`delivered_waste_batteries`）

送达批次在接收时仍是废电池流；送达本身并不确立二次原料身份。

- 选定流：电池 `921de03b-28b1-4c75-8642-204afbc79d2d`
- 流属性/单位：Mass / kg
- 数量规则：接收门卸载时的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 送达接收门的废电池
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_collection_route`

##### 废物流

##### 基本流

### 过程：接收、识别、安全评估、分选和储存（`receipt_characterization`）

#### 输入

##### 产品流

###### 按接收状态计量的废电池批次（`received_waste_batteries`）

定量参考流携带全部必需限定信息和可追溯称量记录进入过程。

- 选定流：电池 `921de03b-28b1-4c75-8642-204afbc79d2d`
- 流属性/单位：Mass / kg
- 数量规则：接收时实测总质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：1 kg 按接收状态计量的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_batch`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 接收并分流的废电池子批次（`accepted_battery_sublots`）

按化学体系、构型、预处理状态和安全路线分别记录输出质量。仅在带有这些限定信息时使用通用流 UUID；真正均质批次可以替换为匹配的化学体系特定 Tiangong 流。

- 选定流：电池 `921de03b-28b1-4c75-8642-204afbc79d2d`
- 流属性/单位：Mass / kg
- 数量规则：按已分流子批次实测接收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 按接收状态计量的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_batch`

##### 废物流

###### 拒收的非电池材料和未接收批次（`receipt_rejects`）

分别记录包装、附属设备、污染物以及因安全原因拒收或分流的批次，并保留其去向和废物身份。

- 选定流：按实测材料身份选择拒收物或废物流；不规定通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：按材料和去向实测的拒收质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 按接收状态计量的参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_receipt_batch`

##### 基本流

### 过程：放电或安全状态调节、拆解和非电池馏分移除（`preparation_for_recycling`）

#### 输入

##### 产品流

###### 进入准备过程的已接收废电池（`batteries_for_preparation`）

投入是在化学体系和安全状态上已分流、进入声明准备序列的实测子批次。

- 选定流：电池 `921de03b-28b1-4c75-8642-204afbc79d2d`
- 流属性/单位：Mass / kg
- 数量规则：进入准备过程的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入准备过程的已接收废电池
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`

###### 准备用电和燃料（`preparation_energy`）

记录用于安全状态调节、通风、拆解和物料搬运的实测电力与燃料；构建数据集时选择与地理和技术匹配的流。

- 选定流：为前景场址选择的能源载体；不规定通用 UUID
- 流属性/单位：Energy or mass / metered unit
- 数量规则：在可行情况下先进行细分，再把实测用量分配给已准备批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 已准备电池输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 已准备废电池或电池馏分（`prepared_battery_fraction`）

记录声明准备步骤之后的完整电芯、模组或电池馏分，并保留化学体系、状态和废物身份。

- 选定流：当输出仍属于 CPC 39380 时使用 电池 `921de03b-28b1-4c75-8642-204afbc79d2d`；否则经评审选择状态匹配的候选流
- 流属性/单位：Mass / kg
- 数量规则：实测已准备输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入准备过程的废电池
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`

##### 废物流

###### 移除的壳体、包装、液体和非电池部件（`preparation_removals`）

分别测量各项移除物，并保留其组成、危险分类、去向及废物或产品身份。

- 选定流：材料特定废物流；不规定通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：按分离馏分和去向实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 进入准备过程的废电池
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_preparation_batch`

##### 基本流

### 过程：尺寸减小和物理馏分分离（`mechanical_preprocessing`）

#### 输入

##### 产品流

###### 已准备的机械处理进料（`prepared_feed_to_mechanical`）

记录进入尺寸减小过程的电池衍生进料的确切化学体系、构型、荷电或安全状态及准备历史。

- 选定流：仅当已准备进料仍保留该身份时使用 电池 `921de03b-28b1-4c75-8642-204afbc79d2d`；否则使用经评审的状态匹配流
- 流属性/单位：Mass / kg
- 数量规则：实测进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

###### 机械处理能源和辅助材料（`mechanical_energy_auxiliaries`）

记录声明设备实际消耗的电力、惰性气体、冷却、粉尘控制介质及其他辅助材料。

- 选定流：构建数据集时选择场址和技术匹配的投入流
- 流属性/单位：Energy, mass, or volume / metered unit
- 数量规则：在可行情况下先进行细分，再把实测或采购量分配给处理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格可交易黑粉或电池衍生中间物（`tradable_battery_intermediate`）

仅在组成、含水率、电池来源、接收规格及非废物或可交易二次原料身份均有文件记录时使用该产品输出。黑粉没有统一组成或默认 UUID。

- 选定流：经评审、与化学体系和状态匹配的产品流；不规定默认 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次实测输出质量，并链接含水率和组成结果
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

###### 回收壳体金属和其他合格产品（`qualified_separated_products`）

仅在规格、去向及门处身份有文件记录时，将钢、铜、铝、塑料或其他馏分记录为产品。

- 选定流：在组成和身份评审后选择材料特定产品流
- 流属性/单位：Mass / kg
- 数量规则：按材料和批次实测输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

##### 废物流

###### 仍为废物的黑粉或破碎馏分（`waste_battery_intermediate`）

当馏分需要进一步处理或缺乏文件化产品或废物终止状态时使用该废物输出，并记录接收设施和下一步作业。

- 选定流：有可用候选时选择与化学体系和状态匹配的废物流；不规定默认 UUID
- 流属性/单位：Mass / kg
- 数量规则：按批次和去向实测输出废物中间物质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

###### 机械处理残渣和污染控制废物（`mechanical_residues`）

按危险属性和去向分别记录粉尘、过滤介质、细料、受污染液体及其他残渣。

- 选定流：构建数据集时选择残渣特定废物流
- 流属性/单位：Mass or volume / measured unit
- 数量规则：按残渣和去向实测质量或体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mechanical_balance`

##### 基本流

###### 直接颗粒物和挥发性释放（`mechanical_direct_releases`）

仅记录经过控制后跨越环境边界的释放；捕集物仍作为废物或产品输出。

- 选定流：与监测物质和环境介质匹配的基本流
- 流属性/单位：Mass / kg
- 数量规则：监测释放量，或根据实测浓度和排气体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 已准备电池进料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_mechanical_emissions`

### 过程：热处理、湿法、火法、直接回收或其他材料回收（`material_recovery`）

#### 输入

##### 产品流

###### 电池衍生回收进料（`battery_recovery_feed`）

记录黑粉、电极材料、电芯、合金、炉渣、溶液或其他电池衍生进料，并保留化学体系、含水率、身份和上游准备历史。

- 选定流：经评审选择与化学体系和状态匹配的进料流；不规定通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：在相关时同时按接收状态和声明干基测量进料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 电池衍生回收进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery_balance`

###### 回收试剂、能源和水（`recovery_operating_inputs`）

记录实际使用的电力、燃料、水、酸、碱、还原剂、萃取剂、沉淀剂及其他路线特定投入；没有证据时不得在化学体系之间移用清单。

- 选定流：构建数据集时选择与场址、地理和技术匹配的投入流
- 流属性/单位：Mass, energy, or volume / measured unit
- 数量规则：在可行情况下先进行细分，再把实测、称量或采购量归属于处理批次
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 电池衍生回收进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery_balance`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格回收金属、化合物或活性材料（`qualified_recovered_products`）

分别记录每种金属、盐、合金、前驱体、活性材料或其他最终输出，并保留组成、纯度或规格、质量、去向及文件化身份。

- 选定流：仅在组成和规格评审后选择产品特定流
- 流属性/单位：Mass / kg
- 数量规则：按产品批次实测可销售或已接收的输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 电池衍生回收进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery_balance`

##### 废物流

###### 回收残渣和废水（`recovery_residues`）

分别记录炉渣、浸出残渣、中和固体、废溶液、废水和污染控制废物，并保留组成、危险身份和去向。

- 选定流：构建数据集时选择残渣特定废物流
- 流属性/单位：Mass or volume / measured unit
- 数量规则：按残渣和去向实测输出质量或体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 电池衍生回收进料
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recovery_balance`

##### 基本流

###### 回收过程直接释放（`recovery_direct_releases`）

按物质和环境介质记录控制后的空气、水和土壤实测释放；捕集物不得作为基本流。

- 选定流：与监测物质和环境介质匹配的基本流
- 流属性/单位：Mass / kg
- 数量规则：监测释放量，或根据实测浓度和载体流量体积计算
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 电池衍生回收进料
- 基准类型：过程输出（`process_output`）
- 证据类型：由采集计算（`calculated_from_collection`）
- 采集协议：`cp_recovery_emissions`

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide_chemistry_route` | 混合化学体系、路线和运行线 | 在计量或批次记录允许时，首先按化学体系、构型、安全路线、预处理状态和回收技术细分记录。 | `iso-14044-2006`; `eu-waste-battery-recycling-2025-606` |
| `allocation_preserve_direct_measurement` | 单独计量的投入和输出 | 在分配共享负荷之前，把直接计量的批次投入、输出、排放、残渣和库存变化归属于相应批次。 | `iso-14044-2006` |
| `allocation_shared_operations` | 共享收集、储存、公用工程和污染控制 | 无法细分时，使用反映因果关系的文件化物理关系；仅当质量是合理代理量时才可采用质量分配，并披露所选基准和敏感性。 | `iso-14044-2006` |
| `allocation_output_status` | 黑粉、金属、盐类、塑料和残渣 | 不得仅因中间馏分具有市场价值就把它视为最终共产品。只有在其门、规格、去向以及废物或废物终止身份有文件记录后，才应用产品或共产品处理。 | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `allocation_no_automatic_credit` | 回收收益和回收材料替代 | 默认不得在前景清单中嵌入避免原生材料生产、再生成分或下游电池制造抵扣。任何替代、系统扩展或循环足迹方法均属于已声明的下游研究，并且必须避免重复计算。 | `iso-14044-2006` |
| `allocation_negative_value_waste` | 收费、负价值废物和付费处理 | 价格正负不决定物理流类型或负荷分配。分别记录废物管理服务、材料流和任何回收输出，再披露研究特定的分配约定。 | `iso-14044-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_collection_route` | `collection_and_transport` | 收集和送达电池质量；路线服务 | 地磅或校准秤记录；路线日志；装载清单 | load_id; origin; destination; battery chemistry; safety status; loaded_mass_kg; delivered_mass_kg; vehicle_or_mode; distance_km; packaging; incident_or_loss | 将每份装载清单链接至称量和路线证据；逐区段计算 | kg; km; tkm | 每个载荷和路线区段 | 完整声明收集期间 | 范围内全部受控收集点和车辆 | 按批次汇总质量、按方式汇总 tkm；单独报告损失和拒收载荷 | 秤校准；路线记录；监管链清单；事件日志 |
| `cp_receipt_batch` | `receipt_characterization` | 接收、接纳、分流和拒收馏分 | 接收日志；秤记录；检查和分选记录 | lot_id; receipt_time; supplier; origin; gross_mass_kg; net_battery_mass_kg; chemistry; configuration; state_of_charge_or_safe_state; damage; leakage; temperature_event; accepted_mass_kg; reject_mass_kg; destination | 接收时称量，混合前检查，并按子批次保留化学体系和安全分流决定 | kg; mass fraction; descriptive state | 每个接收批次 | 完整声明报告期间 | 范围内每个接收和储存区域 | 将接收质量与接收子批次、拒收物和实测库存变化进行核对 | 校准证书；照片或检查记录；化学体系证据；废物清单；库存台账 |
| `cp_preparation_batch` | `preparation_for_recycling` | 已准备电池馏分；移除物；准备用能 | 批次流转单；秤记录；仪表和采购记录；安全日志 | batch_id; input_mass_kg; chemistry; initial_safe_state; discharge_or_conditioning_method; dismantling_steps; output_mass_kg; removal_type; removal_mass_kg; electricity; fuel; incident; storage_change | 记录每项准备作业，并称量投入、已准备输出和分离移除物 | kg; kWh; fuel unit; descriptive state | 每个批次；仪表按批次或有依据的生产活动层级读取 | 完整声明准备生产活动 | 范围内全部准备设备和受控储存 | 使用披露的物理驱动量，在细分后分配生产活动公用工程；保留直接批次计量 | 秤和仪表校准；批次流转单；安全许可；移除物去向记录 |
| `cp_mechanical_balance` | `mechanical_preprocessing` | 机械进料、运行投入、产品馏分和废物馏分 | 批次生产记录；秤；仪表；实验室分析；发运记录 | batch_id; chemistry; feed_mass_kg; feed_moisture; safe_state; electricity; auxiliary_input; output_fraction_id; output_mass_kg; moisture; composition; status; destination; storage_change | 称量全部进料和输出，并把代表性组成和含水率样品链接至同一批次 | kg; kWh; auxiliary unit; mass fraction | 每个批次；连续仪表总量至少按生产活动核对 | 完整声明机械处理生产活动 | 范围内全部切碎、破碎、分离、粉尘控制和储存单元 | 分别报告每项输出馏分；核对投入、添加物、输出、捕集残渣、直接释放和库存变化 | 秤和仪表校准；取样方案；实验室 QA；发运或接收文件 |
| `cp_mechanical_emissions` | `mechanical_preprocessing` | 直接颗粒物和挥发性释放 | 烟道或作业排风监测；流量计记录；分析报告 | source_id; substance; compartment; concentration; carrier_flow; duration; control_device; captured_mass; detection_limit | 根据成对浓度和载体流量记录计算排放质量，或采用经验证的直接质量监测 | kg substance; concentration; volume | 每次合规测试及可获得的连续期间 | 能代表声明生产活动和运行状态 | 范围内每个直接环境释放点 | 按运行时间积分；单独报告未检出处理和捕集质量 | 认可分析；仪器校准；取样条件；控制装置日志 |
| `cp_recovery_balance` | `material_recovery` | 回收进料、试剂、能源、回收产品、残渣和库存 | 批次记录；秤；储罐测量；仪表；采购和发运记录；实验室分析 | batch_id; route; chemistry; feed_mass_wet; feed_mass_dry; moisture; reagent; reagent_amount; energy; water; output_id; output_mass; composition; purity; waste_or_product_status; destination; storage_change | 将全部投入和输出记录链接至声明回收批次，并保留用于回收计算的元素或化合物分析 | kg; kg dry matter; kWh; m3; mass fraction | 每个批次；连续仪表至少按生产活动核对 | 完整声明回收生产活动 | 范围内全部受控回收、纯化、精炼和储存单元 | 分别核对湿基和干基；不得把添加试剂计作电池衍生回收材料 | 校准；实验室 QA；材料接收；发运记录；库存核对 |
| `cp_recovery_emissions` | `material_recovery` | 直接空气、水和土壤释放 | 烟道、废水及其他环境监测记录 | source_id; substance; compartment; concentration; carrier_flow; duration; control_device; captured_mass; detection_limit | 根据经验证的浓度和载体流量记录计算释放质量，或采用直接质量监测 | kg substance; concentration; volume | 每次合规测试及可获得的连续期间 | 能代表声明路线和运行状态 | 范围内每个直接环境释放点 | 按运行时间积分，并将捕集物与环境释放分开 | 认可分析；仪器校准；取样条件；处理系统日志 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_collection_tkm` | 每个收集路线区段 | 吨公里 = 送达电池质量（吨）乘以实测单程距离（公里）；空载返程应作为单独的声明假设或记录 | delivered_mass_kg; distance_km; route leg; vehicle or mode | 按路线区段和方式的 tkm |  |
| `calc_net_battery_mass` | 接收和准备 | 电池净质量 = 实测批次总质量减去单独实测的运输包装、无关设备及其他声明的非电池附件；除非所选基准明确要求，不得扣除电池壳体或电解液 | gross_mass_kg; excluded_component_mass_kg by component | 带纳入清单的 net_battery_mass_kg | `eu-waste-battery-recycling-2025-606` |
| `calc_chemistry_share` | 混合接收批次 | 化学体系质量分数 = 实测或取样归属于该化学体系的质量除以已分类电池总质量；未分类质量应保留为单独份额 | chemistry_mass_kg; classified_battery_mass_kg; unclassified_mass_kg | 各化学体系份额和未分类份额 | `eu-waste-battery-recycling-2025-606` |
| `calc_process_mass_balance` | 每个前景过程和生产活动 | 核对实测投入加期初库存与实测输出加期末库存和已记录直接释放；报告带符号的未解决差额，不得强制归零 | input masses; output masses; captured wastes; direct releases; opening and closing inventory | 质量平衡表和未解决差额 | `eu-waste-battery-recycling-2025-606` |
| `calc_battery_derived_output` | 回收声明 | 仅量化能够证明来自电池投入的元素或化合物质量；按照适用方法单独识别添加试剂、大气氧、水和非电池杂质 | dry input composition; output mass and composition; reagent additions; impurity and moisture records | 按元素或化合物的电池衍生回收质量 | `eu-waste-battery-recycling-2025-606` |
| `calc_route_intensity` | 过程能源、水、试剂、排放和残渣数据行 | 归一化量 = 实测或计算的生产活动总量除以该过程声明的质量基准；保留原始测量和基准换算 | campaign amount; process input or output mass; time and storage reconciliation | 每声明过程基准的数量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 每个参考批次和子批次 | 保留供应方或持有人、收集来源、废物身份依据、化学体系证据、构型、预处理状态和唯一批次链接。 | 废物清单、监管链记录、检查记录、标签或分析证据 |
| `dq_safety_state` | 运输、储存、拆解或切碎之前的电池 | 记录荷电状态或经核验的安全状态、损坏和泄漏状况、端子保护、隔离、热事件历史和分流决定；不得仅凭化学体系名称推断安全性。 | 安全检查、电压或荷电状态测量、事件记录、包装记录 |
| `dq_mass_traceability` | 全部前景过程 | 保留投入、输出、拒收物、残渣、转移和库存变化的校准质量记录；披露每项未解决质量平衡差额，不得重新分摊。 | 校准证书、批次平衡、库存台账、发运记录 |
| `dq_chemistry_representativeness` | 混合批次和取样组成 | 声明分选覆盖、取样设计、实验室方法、检出限、样品日期和未分类份额；不得把化学体系特定清单用作通用类别平均值。 | 分选日志、取样方案、实验室 QA 报告、代表性评估 |
| `dq_output_status` | 黑粉及全部回收或残余馏分 | 保留组成、含水率、规格、去向、接收文件，以及声明门处的废物、中间物、产品或废物终止身份。 | 实验室证书、销售或接收规格、废物转移单、适用时的监管认定 |
| `dq_temporal_technology_scope` | 场址和路线数据集 | 报告实际运行期间、处理量、技术配置、控制设备、停机、异常事件，以及记录属于批次、生产活动还是年度；不得静默假定最低覆盖。 | 运行日志、生产报告、维护和事件记录 |
| `dq_source_and_method_currency` | 法律、安全、回收效率和回收声明 | 识别所用司法管辖区、方法版本、适用日期和计算范围；PCR 来源支持建模结构，但本身不能证明法规合规。 | 适用法律文本或方法、注明日期的合规评估、计算工作簿 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validation_reference_identity` | 参考流 | 如缺少废物身份、化学体系或组合、构型、荷电或安全状态、状况、纳入质量组成、收集来源、预处理状态或拟采用路线，则判定不合规。 | `unsd-cpc-3-2025`; `us-epa-used-lib-safety` |
| `validation_flow_type_status` | 进入和离开系统的技术圈流 | 将 Tiangong 流类型和 UUID 与废物、产品、中间物或废物终止身份分别核验；每项输出二次原料必须提供文件化身份依据。 | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `validation_chemistry_route` | 过程清单 | 拒绝未披露地平均合并具有实质差异的化学体系、构型、荷电状态或回收路线；证据不完整时保留未分类份额。 | `eu-waste-battery-recycling-2025-606` |
| `validation_collection_safety` | 收集、运输、接收和储存 | 搬运前必须有批次级安全评估及文件化保护或隔离；不得把锂离子电池建模为普通市政可回收物。 | `us-epa-used-lib-safety` |
| `validation_preparation_recycling_split` | 过程边界 | 当适用计算方法区分收集、分选、储存、搬运、拆解及其他准备步骤与回收时，核验这些步骤未被静默合并。 | `eu-batteries-reg-2023-1542`; `eu-waste-battery-recycling-2025-606` |
| `validation_mass_balance` | 每个前景过程 | 要求投入、输出、库存变化、残渣和直接释放的实测记录，并报告未解决质量平衡差额；不得把差额强制归入可销售产品。 | `eu-waste-battery-recycling-2025-606` |
| `validation_black_mass_status` | 黑粉和破碎电池粉 | 当化学体系、含水率、组成、预处理状态、去向及废物或二次原料身份未记录时，拒绝默认产品分类或默认 UUID。 | `us-epa-lib-recycling`; `eu-waste-battery-recycling-2025-606` |
| `validation_battery_derived_recovery` | 回收材料声明 | 从电池衍生材料回收量中排除添加试剂、水、大气投入、非电池杂质和能源回收，除非适用官方方法明确另有规定且计算过程予以说明。 | `eu-waste-battery-recycling-2025-606` |
| `validation_allocation` | 共享负荷和回收收益 | 要求提供细分决定、分配基准、实质相关时的敏感性，以及回收或替代收益未被重复计算的核查。 | `iso-14044-2006` |
| `validation_excluded_systems` | 范围声明 | 如果默认边界纳入新电池制造、电池使用、电池识别之前的通用 WEEE 或车辆处理，或者在未明确扩展系统的情况下纳入下游新电池制造，则通用 CPC 39380 声明不合规。 | `unsd-cpc-3-2025` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 针对一个已声明废电池收集、接收、准备、预处理或回收路线的前景数据包；合并路线必须保留按阶段和化学体系拆分的记录 |
| downstream_use | 当参考流限定信息和门覆盖与研究匹配时，用作 LCA process 或 lifecyclemodel 构建的 `secondary_dataset` 和 `background_dataset` |
| allowed_use | 阶段特定的废电池管理与回收清单；边界匹配的化学体系特定比较；采用声明方法的实测质量流和回收计算 |
| excluded_use | 新电池制造清单；通用电子废物处理；在不匹配的化学体系或路线之间替代；声称黑粉自动属于产品；未采用适用官方计算和核验方法的法规合规、回收效率或回收目标声明 |
| required_metadata | PCR id；批次和场址标识；地理范围和期间；废物身份依据；电池族、化学体系、构型、荷电或安全状态及状况；总质量和净质量基准；收集和预处理状态；技术路线和门；流 UUID 决策；输出组成、含水率、身份和去向；分配方法 |
| required_quality_disclosure | 数据覆盖和取样；秤、仪表和实验室 QA；质量平衡差额；未分类化学体系份额；库存变化；异常事件；缺失 UUID；二手数据替代；法律和方法版本；代表性限制 |
| update_trigger | 化学体系组合、电池构型、收集系统、安全状态调节做法、准备或回收技术、输出规格或身份、分配方法、适用法律方法、场址控制发生变化，或出现实质改变质量、能源、排放、残渣或回收结果的证据 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC Version 3.0 Explanatory Notes，2025-06-30 更新，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf，检索日期 2026-08-07 | CPC 39380 官方身份，以及废电池商品与新电池和无关产品的区分 |
| `eu-batteries-reg-2023-1542` | 标准（`standard`） | Regulation (EU) 2023/1542 concerning batteries and waste batteries，2025-07-31 合并文本，https://eur-lex.europa.eu/eli/reg/2023/1542/2025-07-31/eng，检索日期 2026-08-07 | 废电池定义；收集、处理、回收前准备、再使用和改变用途准备的区分；输出身份边界 |
| `eu-waste-battery-recycling-2025-606` | 标准（`standard`） | Commission Delegated Regulation (EU) 2025/606 establishing the methodology for calculation and verification of recycling efficiency and material recovery from waste batteries，https://eur-lex.europa.eu/eli/reg_del/2025/606/oj/eng，检索日期 2026-08-07 | 投入和输出馏分核算；化学体系分离；干质量、过程步骤、质量平衡和电池衍生回收记录 |
| `us-epa-lib-recycling` | 官方指南（`official_guidance`） | 美国环境保护署，Lithium-Ion Battery Recycling，https://www.epa.gov/hw/lithium-ion-battery-recycling，检索日期 2026-08-07 | 从收集到切碎的过程分解；黑粉差异；箔材、塑料、钢、电解液和回收路线的分离 |
| `us-epa-used-lib-safety` | 官方指南（`official_guidance`） | 美国环境保护署，Used Lithium-Ion Batteries，https://www.epa.gov/recycle/used-lithium-ion-batteries，检索日期 2026-08-07 | 锂离子电池的单独收集、端子保护、损坏处置、剩余电量和火灾风险控制 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html，现行标准；检索日期 2026-08-07 | LCA 清单边界、分配、报告、解释和评审框架 |
