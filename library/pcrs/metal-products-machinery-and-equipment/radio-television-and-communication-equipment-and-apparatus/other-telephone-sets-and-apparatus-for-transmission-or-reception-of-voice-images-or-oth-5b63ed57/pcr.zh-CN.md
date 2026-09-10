---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-telephone-sets-and-apparatus-for-transmission-or-reception-of-voice-images-or-oth-5b63ed57
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 其他电话机以及用于传输或接收语音、图像或其他数据的设备，包括用于有线或无线网络（如局域网或广域网）通信的设备

## 1. 范围与适用性

本 PCR 适用于主要产品功能为传输或接收语音、图像或其他数据的成品设备，包括在有线或无线局域网、广域网中通信的设备。该类别具有明确的宽叶异质性：包括不带无绳听筒的有线电话机、楼宇对讲设备、非蜂窝便携式无线电话、基站、集线器、路由器、网关、通道间适配器、调制解调器、无线电报设备、电话交换台以及无线电话或无线电报遥测接收器。前景数据包必须识别真实设备族及配置；不得以路由器、交换机、接入点、基站或电话机代理整个类别。

核心参考为每千克净成品设备的工厂门生产。外购零部件和模块通过关联数据集保留上游负荷。使用、维护、翻新和寿命终止过程仅作为从摇篮到坟墓研究的条件扩展，必须采用所声明配置、工作寿命、流量或负载曲线、地域和路线特定记录。本 PCR 不为不同设备族提供通用数值默认值；数量缺失时必须采集前景数据。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.other-telephone-sets-and-apparatus-for-transmission-or-reception-of-voice-images-or-oth-5b63ed57 |
| classification_refs | CPC 3.0: 47223（精确范围参考） |
| covered_products | 成品不带无绳听筒的有线电话和楼宇对讲设备；非蜂窝便携式无线电话；基站；集线器、路由器、网关及其他交换/路由设备；通道适配器；调制解调器和接入终端设备；无线电报设备；电话交换台；无线电话或无线电报遥测接收器；以及位于上述边界内的其他成品语音、图像或数据收发设备。 |
| excluded_products | 带无绳听筒的有线电话机（CPC 47221）；蜂窝或其他无线网络电话终端（CPC 47222）；广播传输设备与摄像机（CPC 47211-47215）；自动数据处理机用网卡（CPC 45281）；单独销售的零件（CPC 47401）；电信服务；不作为成品设备完整声明部件提供的独立服务器、存储、UPS、电缆、天线或场址基础设施。 |
| representative_product | 不存在代表本类别的单一物理型号。代表对象是在一个具名设备族内声明并按产量加权的成品设备配置。 |
| production_route | 外购和/或自制电子、机电及机械零部件；PCBA/模块集成；机箱组装；软件/固件加载与配置；功能及安全测试；可选包装和工厂发运。仅当零件制造位于声明的前景边界内时纳入。 |
| market_state | 在工厂门已制造、完成配置并通过功能测试的设备；包装状态及所含附件另行声明。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 生产一项已声明配置、用于传输或接收语音、图像或其他数据的成品设备。 |
| How much | 1 kg 成品设备净质量，不含单独报告的包装。 |
| How well | 声明型号/配置已完成组装与配置，并通过制造商针对其通信功能和销售市场的放行测试。 |
| How long or cycle | 一个声明的生产批次或报告期。仅当纳入使用阶段或从摇篮到坟墓阶段时要求工作寿命和使用曲线。 |
| reference_flow_link | `equipment_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 用于传输或接收语音、图像或其他数据的其他电话机和设备，包括用于有线或无线网络（如局域网或广域网）通信的设备 `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 设备族；制造商型号和配置标识；固定式或模块化结构；已安装模块和电源；端口/接口数量、介质和额定速率；适用时的有线/无线协议与频段；适用时的额定容量、吞吐量、用户数或覆盖范围；电源输入类型和铭牌功率；适用时 PoE 输入/输出处理；所含天线、电池、听筒、电缆、附件及软件/固件；设备净质量；包装纳入情况及质量；生产地域和期间；产量加权方法；工厂门状态；放行测试状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 所有工厂门清单归一化到 1 kg 成品设备净质量。设备净质量应与包装、不纳入销售配置的可拆卸附件及运输托盘分开计量。 |
| `configuration_weighting` | 多型号或可配置产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 依据真实声明型号/配置或有记录的产量加权混合构建结果。不得平均无关设备族，也不得用一个型号代理整个类别。 |
| `operational_energy` | 条件使用阶段 | Energy | kWh | 根据每个声明状态/负载区间的实测输入功率和时长计算用电。记录硬件/软件配置、连接端口或无线负载、流量/负载曲线、供电条件、计量边界以及向下游设备供电的处理。 |
| `transport_service` | 运输过程 | Transport service | tkm | 按运输质量、路线距离和方式计算吨公里；在体积限制运力时采用计费质量或体积，并披露所含空返。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 外购原材料、零件、模块、子组件及附件进入首个前景受控制造门；仅当明确声明时纳入更早的自制工序。 |
| starting_condition_role | 真实设备配置的前景制造起点。 |
| product_classification_scope | 上述成品语音、图像和数据收发设备的语义范围；分类仅作范围参考，不定义通用技术路线。 |
| recursive_input_rule | 若外购投入本身也是本类别成品设备，应关联独立上游数据集并记录为设备/模块投入。不得用本 PCR 递归拆解，也不得以宽叶参考流替代身份不明的零部件。 |
| upstream_dataset_requirement | 每项在质量或环境上显著的外购材料、零件、模块、电源、电池、电缆、天线及附件均需身份匹配的上游数据集，或记录数据缺口及敏感性处理。 |
| disclosure | 声明设备族、配置、BOM 覆盖、自制与外购工序、生产地域/期间、分配基准、截断、包装状态、所含附件、测试边界，以及任何条件使用、维护、翻新或寿命终止情景。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_no_single_device_proxy` | 类别代表性 | 每个声明设备族/配置均以自身 BOM 和制造/使用记录表示。路由器、交换机、接入点、基站、电话机或其他窄设备族结果不得推广到整个类别。 | `un-cpc-v3-47223`; `etsi-es-203-199-v1-4-1` |
| `boundary_production_core` | 工厂门数据集 | 纳入适用的零件生产、PCBA/模块和总装、配置、放行测试、声明的包装、生产良率、废物、直接排放、能源供应以及纳入阶段内或阶段间运输。 | `etsi-es-203-199-v1-4-1` |
| `boundary_lifecycle_extension` | 从摇篮到坟墓扩展 | 研究超出工厂门时，纳入安装、运行用电、维护/备件、拆除、运输、再使用/翻新准备及路线特定寿命终止处理。声明任何省略阶段及理由。 | `etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu` |
| `boundary_cutoff` | 所有纳入阶段 | 尽可能避免截断。任何排除均须检查质量、能源和环境显著性，累计记录，并在可能影响结论时纳入敏感性分析。 | `etsi-es-203-199-v1-4-1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `in_house_part_production` | 自制零件和子组件生产 | conditional | PCBAs、电子模块、外壳、电缆、电源组件或其他零件在前景受控场址制造时纳入。 | 前景零件生产 | kg 合格零件/子组件输出 |
| `equipment_assembly_and_test` | 设备组装、配置和放行测试 | required | 对声明的成品设备配置始终纳入。 | 前景制造 | kg 合格测试设备输出 |
| `packaging_and_factory_gate` | 包装与工厂门放行 | required | 始终纳入；仅当声明参考状态为无包装时，包装投入可以为零。 | 前景最终化 | 1 kg 成品设备净质量 |
| `use_and_maintenance` | 设备使用与维护 | conditional | 使用阶段或从摇篮到坟墓研究时纳入。 | 条件下游使用 | 声明工作年或寿命，并折算至 1 kg 设备 |
| `end_of_life_treatment` | 拆除与寿命终止处理 | conditional | 从摇篮到坟墓、再使用、翻新或处置情景时纳入。 | 条件下游处理 | kg 进入各路线的拆除设备 |

### 过程：自制零件和子组件生产（`in_house_part_production`）

#### 输入

##### 产品流

###### BOM 追踪的原材料和外购零件（`part_material_inputs`）

每种材料和外购零件进入自制零件工序时，按身份、供应商路线和验收质量分别记录。

- 选定流：与每项声明材料或零件匹配的前景所选 TianGong 产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：来自收货记录并与 BOM 核对的验收数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格零件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_bom_materials`
- 来源：`etsi-es-203-199-v1-4-1`

###### 零件工序能源、水和工艺化学品（`part_process_utilities`）

对每项适用自制技术分别记录电力、燃料、水、气体、电镀/清洗化学品及其他公用工程。

- 选定流：与计量及采购记录匹配的前景所选公用工程或化学品流
- 流属性/单位：流特定属性和单位
- 数量规则：按合格零件产出分配的计量或采购平衡消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格零件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_process_records`
- 来源：`etsi-es-203-199-v1-4-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格自制零件和子组件（`in_house_subassemblies`）

这些合格中间品离开零件工序并进入设备组装；按批次计量转移质量。

- 选定流：前景定义的中间零件或子组件流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：转入组装的实测合格输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_part_process_records`
- 来源：

##### 废物流

###### 自制零件废料及处理路线（`part_scrap`）

废料进入返工、回收或处置，并按材料、实测质量和去向记录。

- 选定流：每项已记录废料或危险废物流对应的独立 TianGong 废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和处理路线称量或质量平衡的废料
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 合格零件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release_records`
- 来源：

##### 基本流

###### 自制零件工序直接排放（`part_process_releases`）

受监测的空气、水体或土壤排放跨越环境边界，并按基本流身份分别记录。

- 选定流：每项监测排放对应的独立、已核实 TianGong 基本流
- 流属性/单位：排放特定属性和单位
- 数量规则：实测排放，或由监测活动数据和有引用因子计算的数值
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格零件或子组件输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_waste_and_release_records`
- 来源：

### 过程：设备组装、配置和放行测试（`equipment_assembly_and_test`）

#### 输入

##### 产品流

###### 外购和自制零部件、模块及附件（`assembly_components`）

PCBAs、集成模块、机箱/外壳、电源、电池、显示器、散热部件、电缆、天线、听筒及其他所含附件须作为独立 BOM 追踪投入。

- 选定流：每项零部件或模块的身份匹配上游产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：验收 BOM 数量乘以实测或供应商声明单件质量，并与收货及生产记录核对
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 合格测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_bom_materials`
- 来源：`etsi-es-203-199-v1-4-1`

###### 组装耗材（`assembly_consumables`）

耗材在组装中被装入、消耗或损失，依据领用、退回和实测工艺记录定量。

- 选定流：焊料、粘合剂、紧固件、清洗剂及其他耗材对应的前景所选产品流
- 流属性/单位：流特定属性和单位
- 数量规则：领用量减退库量，或实测工艺消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：

###### 组装、配置和测试用电（`assembly_test_electricity`）

电力跨越组装/测试边界，取自分表或对设施电表的有记录因果分配。

- 选定流：前景数据包中所选、与地域和期间匹配的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：分表计量消耗量，或按有记录的机器工时或生产时间分配设施电表消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_assembly_records`
- 来源：`etsi-es-203-199-v1-4-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 包装前通过功能测试的设备（`tested_equipment`）

通过测试的合格设备离开组装并进入最终包装；实测输出仅包含符合放行准则的设备。

- 选定流：与声明配置匹配的前景中间设备流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：通过放行测试的合格设备实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每生产批次
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_and_tests`
- 来源：

##### 废物流

###### 组装不合格品和失效零件（`assembly_rejects`）

失效零件和不合格设备离开组装进入返工、退供应商、回收或处置，并按最终去向计量。

- 选定流：按处置方式区分的废物流或可再用零件流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量不合格品并分类为返工、退供应商、回收或处置；不得重复计算返工合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 合格测试设备输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_and_tests`
- 来源：

##### 基本流

### 过程：包装与工厂门放行（`packaging_and_factory_gate`）

#### 输入

##### 产品流

###### 合格测试设备投入（`tested_equipment_input`）

该中间品从匹配的组装输出转入最终化，身份不变且不重复计算上游负荷。

- 选定流：与 `tested_equipment` 匹配的前景中间设备流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：从设备组装和测试转入的合格质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品设备净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_production_output_and_tests`
- 来源：

###### 包装材料（`packaging_materials`）

分别记录初级、次级和三级包装；仅对已核实无包装参考状态填写零。

- 选定流：身份匹配的包装材料或包装产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采购或领用包装质量，与包装产品数量及包装废物核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_packaging_records`
- 来源：`etsi-es-203-199-v1-4-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 工厂门成品设备（`equipment_output`）

声明的设备净质量在最终放行后离开前景生产边界，其固定质量为定量参考。

- 选定流：用于传输或接收语音、图像或其他数据的其他电话机和设备，包括用于有线或无线网络（如局域网或广域网）通信的设备 `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：固定参考输出为 1 kg 成品设备净质量；包装质量不计入并单独报告
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：1 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：

##### 废物流

###### 包装操作废物（`packaging_waste`）

包装边角料和不合格包装离开包装过程进入处理，并通过称量或材料平衡计量。

- 选定流：按包装材料和处理路线区分的废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：称量废物，或用包装材料投入减去随合格产品发出的包装质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 成品设备净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_records`
- 来源：

##### 基本流

### 过程：设备使用与维护（`use_and_maintenance`）

#### 输入

##### 产品流

###### 运行用电（`operating_electricity`）

在代表性状态或负载区间测量真实声明配置；不得把路由器、交换机、接入点或基站功率数据用于其他设备族。

- 选定流：与地域和期间匹配的电力供应流
- 流属性/单位：Energy / kWh
- 数量规则：每个状态/负载区间的实测输入功率乘以该区间时长后求和
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 设备及声明工作年或寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：根据采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_use_power_profile`
- 来源：`etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1`

###### 维护和更换零件（`maintenance_parts`）

安装备件在维修时进入使用阶段系统，并依据配置特定维护记录定量。

- 选定流：身份匹配的更换零件、模块、电池、风扇、电源或耗材流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：声明工作期内服务记录中的安装更换数量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 设备及声明工作年或寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance_records`
- 来源：`etsi-es-203-199-v1-4-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

###### 更换零件和维护废物（`maintenance_waste`）

拆除零件从设备使用阶段进入再使用、回收或处置，并与维护干预记录核对。

- 选定流：按处置方式区分的废物流或可再用零件流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：服务记录中的拆除数量，并与安装更换量核对
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 设备及声明工作年或寿命
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_maintenance_records`
- 来源：

##### 基本流

### 过程：拆除与寿命终止处理（`end_of_life_treatment`）

#### 输入

##### 产品流

##### 废物流

###### 送往处理的拆除设备（`deinstalled_equipment`）

设备从使用阶段进入声明的再使用、翻新、回收或处置路线，并在路线入口称量。

- 选定流：与声明配置匹配的前景定义废设备流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按再使用、翻新、回收或最终处置路线实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 离开使用阶段的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_routes`
- 来源：`etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu`

##### 基本流

#### 输出

##### 产品流

###### 可再用设备、零件和回收材料（`recovered_outputs`）

经核实可再用产品和回收材料作为产品输出离开处理过程，并按身份和去向计量。

- 选定流：每项已核实可再用设备/零件或回收材料输出的独立产品流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：按材料和去向实测处理输出；仅按声明的回收分配方法应用抵扣
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入处理的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_routes`
- 来源：`etsi-es-203-199-v1-4-1`; `eu-weee-directive-2012-19-eu`

##### 废物流

###### 寿命终止处理残余物（`eol_residues`）

未回收残余物离开处理过程进入最终回收或处置，并按废物身份和路线分别记录。

- 选定流：每项残余物和最终路线对应的独立废物流
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：拆解和材料回收后的实测处理残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：情景特定（`scenario_specific`）
- 归一化基准：每 kg 进入处理的设备
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_eol_routes`
- 来源：`eu-weee-directive-2012-19-eu`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 共享制造和支持过程 | 在可行时通过分表计量或细分生产线、测试工位、零件工序和支持活动，避免对声明产品/配置进行分配。 | `etsi-es-203-199-v1-4-1` |
| `allocation_physical` | 无法避免的共享设施负荷 | 按机器工时、测试时间、PCB 面积、合格芯片面积、合格质量、占地时间或其他有记录的因果物理驱动因子分配。共同过程的所有环境负荷一致采用同一方法。 | `etsi-es-203-199-v1-4-1` |
| `allocation_economic_fallback` | 缺少可辩护物理关系的共享负荷 | 仅在物理分配不可行时采用经济分配；披露数值、期间、受影响负荷及替代方法敏感性。 | `etsi-es-203-199-v1-4-1` |
| `allocation_recycling` | 再使用、翻新和回收材料 | 明确声明回收/再使用分配约定及生命周期边界。不得在缺乏一致方法时同时计入避免原生材料抵扣和同一回收输出。 | `etsi-es-203-199-v1-4-1` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_bom_materials` | `in_house_part_production`; `equipment_assembly_and_test` | 材料、零部件和模块 | 受控 BOM、收货记录及供应商规格 | part_id; revision; supplier; quantity_per_unit; unit_mass; material; included_accessory; accepted_quantity; scrap | 将放行 BOM 与收货、生产领料和实测抽样质量核对 | kg 和 item | 每次 BOM 修订和生产批次 | 完整报告期 | 所有纳入型号及场址 | 按配置汇总验收质量；保留独立零部件身份 | 批准 BOM；称量记录；供应商声明；核对日志 |
| `cp_part_process_records` | `in_house_part_production` | 自制零件、公用工程和输出 | 仪表、批次票及生产日志 | technology; batch; input_quantity; utility; meter_start; meter_end; accepted_output; rejects; downtime | 按零件技术和批次采集；共享仪表仅按有记录驱动因子分配 | 流特定 | 每批并按月核对 | 覆盖季节/路线变化的代表期 | 每个范围内零件设施 | 归一化到合格零件输出并保留技术路线 | 仪表校准；批次记录；良率核对 |
| `cp_waste_and_release_records` | `in_house_part_production` | 废料和直接排放 | 废物联单、监测及许可报告 | stream; quantity; destination; pollutant; concentration; volume; factor_source | 称量废物并采用监测排放；计算排放须有引用因子和活动数据 | 流特定 | 每次发运或监测间隔 | 与生产相同期间 | 所有纳入场址及排口 | 按流和路线汇总；不与回收价值净额处理 | 联单；实验室/监测 QA；许可；因子引用 |
| `cp_assembly_records` | `equipment_assembly_and_test` | 组装耗材和能源 | 分表、领料及生产线日志 | line; model; configuration; units; net_mass; kWh; consumable_issue; consumable_return; test_time | 优先分表；否则按因果机器/测试时间分配 | kWh 和流特定 | 班次或批次 | 代表性报告期 | 每个纳入组装/测试场址 | 先按配置汇总，再按声明混合的产量加权 | 校准仪表；ERP 领退料；生产线记录 |
| `cp_production_output_and_tests` | `equipment_assembly_and_test`; `packaging_and_factory_gate` | 合格产品和不合格品 | 生产数量、质量和放行测试记录 | serial_or_lot; configuration; produced; passed; reworked; rejected; net_mass; test_result | 将合格输出、返工和最终不合格品与生产投入核对 | kg 和 item | 每批 | 完整报告期 | 所有纳入生产线 | 设备最终合格时仅计一次；按处置保留不合格品 | 放行测试报告；校准秤；核对表 |
| `cp_packaging_records` | `packaging_and_factory_gate` | 包装和包装废物 | 包装 BOM、领用及废物记录 | material; pack_level; mass_per_pack; units_per_pack; issue; return; waste; pallet_share | 称量代表性包装并将领用材料与发运包装及废物核对 | kg | 每次包装修订并按期核对 | 报告期 | 所有纳入包装场址 | 每 kg 设备净质量单独归一化包装 | 包装规格；称量记录；废物联单 |
| `cp_use_power_profile` | `use_and_maintenance` | 运行用电 | 校准功率测试或现场遥测 | configuration; firmware; supply; ports; modules; radio_or_traffic_profile; state; input_power; duration; downstream_power; ambient; test_method | 在代表性状态/负载区间测量设备输入；适用 LNE 采用有记录的 ENERGY STAR 配置/方法或说明等效方法 | W、h、kWh | 每配置测试；现场区间连续或代表性采样 | 声明工作年/寿命 | 声明市场和部署 | 功率乘以时长后求和；明确下游供电处理 | 校准证书；测试配置；遥测完整性；配置记录 |
| `cp_maintenance_records` | `use_and_maintenance` | 更换零件和拆除废物 | 服务及备件日志 | date; configuration; part; installed_quantity; removed_quantity; disposition; travel | 将服务工单与备件领用和退回核对 | kg 和 item | 每次干预 | 声明工作期 | 声明部署群体 | 按配置和工作期汇总 | 服务工单；库存记录；处置证明 |
| `cp_eol_routes` | `end_of_life_treatment` | 拆除设备和处理输出 | 拆除、运输及回收商记录 | mass; route; distance; reuse_test; removed_components; recovered_material; residue; destination | 跟踪实测批次或声明地域特定情景；分开再使用/翻新和废物路线 | kg 和 tkm | 每批或代表性审计批次 | 情景年份 | 声明终端市场 | 每条路线从接收设备到输出/残余物做质量平衡 | 地磅；运输记录；功能测试；回收商证书 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有制造清单行 | 归一化数量 = 报告期数量 / 合格成品设备净质量 | 报告期流量；合格 kg | 每 1 kg 参考产品数量 | `etsi-es-203-199-v1-4-1` |
| `calc_bom_mass` | 零部件投入 | 零部件质量 = 验收设备数 × 单机数量 × 核实单件质量；核对总和、耗材、废物和输出 | BOM；收货；抽样质量；良率 | kg 零部件/kg 产品 | `etsi-es-203-199-v1-4-1` |
| `calc_production_mix` | 多种配置 | 混合结果 = Σ（配置结果 × 合格净质量占比）；没有独立结果不得合并语义不同设备族 | 配置清单；合格质量 | 产量加权结果 | `un-cpc-v3-47223`; `etsi-es-203-199-v1-4-1` |
| `calc_use_energy` | 条件使用阶段 | 用电 = Σ（状态/负载区间输入功率 × 区间小时数）/1000；声明是否包含 PoE 或其他下游供电 | W；h；配置；负载曲线 | 声明期间 kWh | `etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1` |
| `calc_transport` | 运输 | 运输服务 = 运输质量（t）× 路线距离（km），按方式和分段计算 | kg；km；方式；装载率 | tkm | `etsi-es-203-199-v1-4-1` |
| `calc_mass_balance` | 生产和寿命终止 | 投入 = 产品输出 + 废物输出 + 实测排放 ± 库存变化，并一致采用适用的干基/收到基 | 质量记录；库存变化；排放 | 平衡和未解释差值 | `etsi-es-203-199-v1-4-1` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 参考产品和投入 | 保留精确流身份并声明设备族/配置；不得以窄设备或错误分类代理宽叶参考产品。 | Tiangong UUID 读回；BOM；型号/配置记录 |
| `dq_representativeness` | 所有前景记录 | 报告时间、地域、技术、型号混合和场址覆盖；说明排除和产量加权。 | 覆盖表；生产总量；场址清单 |
| `dq_completeness` | BOM 和过程清单 | 核对 BOM 质量、合格产品、不合格品、包装及库存变化；累计评估质量、能源及环境显著遗漏。 | 核对表；截断登记；敏感性分析 |
| `dq_measurement` | 仪表、秤和测试设备 | 使用经校准或核实且单位可追溯的仪器，保留计量边界和不确定性。 | 校准/核实证书；测试配置；不确定性说明 |
| `dq_secondary_data` | 上游和情景数据 | 采用地域、时间和技术匹配的数据集；记录来源、版本/年份及替代理由。 | 数据集登记；来源引用；数据质量评估 |
| `dq_power_profile` | 条件使用阶段 | 曲线须代表真实硬件/软件配置及声明流量、无线、端口和负载状态；LNE 测试披露测试端口/模块和计量配置。 | 功率报告；配置；遥测；`epa-energy-star-lne-v1-1` |
| `dq_eol` | 条件寿命终止 | 保留再使用/翻新、移除危险部件、回收及残余物的路线特定质量和证据。 | 功能测试；回收商记录；适用 WEEE 处理证据 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 参考产品 UUID 必须为 `8b57a042-ffa4-4f3d-a5c7-556fce28e7b3`、state code 100、Product flow，并使用 Mass `93a60a56-a3c8-11da-a746-0800200b9a66` 和 Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` 中的 kg。 |  |
| `validate_family_configuration` | 类别范围 | 拒绝缺少设备族和配置限定的数据包，也拒绝将路由器、交换机、接入点、基站、电话机或其他窄产品推广到整个类别。 | `un-cpc-v3-47223`; `epa-energy-star-lne-v1-1` |
| `validate_reference_amount` | 工厂门输出 | 归一化后成品设备净质量输出须等于 1 kg；包装须单独报告，不得隐含计入。 |  |
| `validate_process_coverage` | 前景边界 | 要求组装/配置/测试和工厂门放行，并纳入每项适用自制零件工序；声明范围包含生命周期阶段时必须出现对应条件过程。 | `etsi-es-203-199-v1-4-1` |
| `validate_bom_and_mass_balance` | 生产清单 | 要求 BOM/零部件可追踪和有记录的质量平衡；未解决显著差值属于发现项，不得自动截断。 | `etsi-es-203-199-v1-4-1` |
| `validate_operational_energy` | 条件使用阶段 | 要求真实配置的实测功率/负载状态和时间曲线，并明确 PoE/下游供电边界；借用窄设备族功率值时，除非作为具名情景并做敏感性分析，否则不通过。 | `etsi-es-203-199-v1-4-1`; `epa-energy-star-lne-v1-1` |
| `validate_allocation` | 共享过程 | 可行时要求细分，否则采用因果物理分配基准；披露经济后备方法及敏感性。 | `etsi-es-203-199-v1-4-1` |
| `validate_eol_routes` | 条件寿命终止 | 要求路线质量平衡，并按适用条件移除/处理电池、符合条件的 PCBAs、含溴阻燃剂塑料、显示器、外部电缆及其他部件。 | `eu-weee-directive-2012-19-eu` |
| `validate_data_quality` | 所有数据 | 报告方法一致性、完整性、不确定性、代表性、数据年龄、获取方法、供应商独立性、地域、技术及截断处理。 | `etsi-es-203-199-v1-4-1` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 产品和配置特定的前景制造数据集；条件生命周期扩展保持为独立、明确关联的过程。 |
| downstream_use | 经代表性、上游关联、分配和完整性审核后用作 `secondary_dataset`、`background_dataset` |
| allowed_use | 建模声明成品设备/配置的工厂门生产；仅在同一设备族内按有记录产量权重聚合；以配置和情景特定记录扩展至使用和寿命终止。 |
| excluded_use | 以一个路由器、交换机、接入点、基站、电话机或型号代理整个类别；在功能/容量/寿命不等效时比较不同设备；仅用铭牌功率建模使用阶段；不明 BOM 替代；缺少限定的市场平均声明。 |
| required_metadata | PCR id/version；参考 UUID；设备族；制造商/型号/配置；固定式/模块化状态；模块、端口/接口、协议/频段、容量/性能；电源架构和 PoE 边界；所含附件/软件；净质量和包装；生产场址/期间；技术路线；BOM 覆盖；分配；截断；地域；数据源；条件寿命/使用/EoL 情景。 |
| required_quality_disclosure | 前景/次级数据占比；时间、地域和技术代表性；配置和产量加权；BOM 与质量平衡完整性；计量/校准；不确定性；截断；分配敏感性；缺失上游数据集；使用曲线和寿命终止情景质量。 |
| update_trigger | BOM、型号族、机箱/模块或电源架构变化；生产路线、场址、供应商、良率或能源结构实质变化；影响功率的固件变化；新增实测使用曲线；市场或寿命终止路线变化；来源/标准修订；未解决数据缺口变得显著。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-v3-47223` | official_guidance | United Nations Statistics Division, CPC Ver. 3.0 Explanatory Notes, updated 30 June 2025, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf（检索日期 2026-08-09） | 产品族纳入/排除及本类别异质性的证据。 |
| `etsi-es-203-199-v1-4-1` | standard | ETSI ES 203 199 V1.4.1 (2025-01), Methodology for environmental Life Cycle Assessment (LCA) of Information and Communication Technology (ICT) goods, networks and services, https://www.etsi.org/deliver/etsi_es/203100_203199/203199/01.04.01_60/es_203199v010401p.pdf（检索日期 2026-08-09） | BOM 和零件分解、生命周期边界、原始数据、截断、分配、使用能耗、维护、运输、寿命终止及数据质量规则。 |
| `epa-energy-star-lne-v1-1` | official_guidance | U.S. EPA ENERGY STAR Product Specification for Large Network Equipment, Eligibility Criteria Version 1.1 and Test Method Rev. Jan-2016, https://www.energystar.gov/sites/default/files/ENERGY%20STAR%20LNE%20Version%201.1%20Final%20Specification.pdf（检索日期 2026-08-09） | 条件大型网络设备族/配置描述和活动/空闲功率—性能测试记录；不得作为其他设备族代理。 |
| `eu-weee-directive-2012-19-eu` | official_guidance | Directive 2012/19/EU on waste electrical and electronic equipment (WEEE), current consolidated version available from EUR-Lex, http://data.europa.eu/eli/dir/2012/19/oj（检索日期 2026-08-09） | 条件寿命终止功能证据，以及适用电池、PCBAs、塑料、显示器、电缆和其他部件的选择性处理。 |
