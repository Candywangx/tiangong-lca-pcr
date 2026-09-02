---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-cameras
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
content_maturity: authored_methodology
translation_status: aligned
---

# 电视摄像机

## 1. 范围与适用性

本 PCR 适用于 CPC 3.0 代码 47213 下完整电视摄像机的前景数据包。所声明产品须在本叶语义下属于电视摄像机，其主要功能是为广播电视制作、安防、会议或工业视觉专业或系统化采集运动图像。

数据包应声明预期用途和物理形态。相关形态可包括演播室、系统、枪机、固定式、半球、筒型、全景、模块化、PTZ、热成像、线阵、面阵或其他工业视觉摄像机，但形态本身不能确立 CPC 身份。不包括数码照相机、录像机或便携式摄录一体机、归入本叶之外的网络摄像头、手机摄像模块、独立图像传感器、镜头、录像设备及其他部件。若没有成文且适用于同质产品系列的规则，不得由单一专业型号、相机系列或窄形态外推整个类别。

前景画像覆盖外购部件与材料、摄像机装配、配置与功能测试、包装和出厂交付。使用阶段用电、网络基础设施、外部录像系统、安装、维护和报废处理不纳入前景制造清单，除非在另行声明的下游情景中明确纳入。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | `pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.television-cameras` |
| classification_refs | CPC 3.0 `47213` — 电视摄像机；意图为精确映射，最终共享映射在本 PCR 之外维护 |
| covered_products | 当声明身份属于 CPC 47213 时，用于广播/电视制作、安防、会议或工业视觉的完整电视摄像机 |
| excluded_products | 数码照相机；录像机与摄录一体机；范围外网络摄像头；手机摄像模块；独立传感器、镜头、线路板、外壳及其他部件；独立录像设备；归入其他 CPC 叶的产品 |
| representative_product | 前景记录实际代表的完整制造配置；不存在类别通用默认型号 |
| production_route | 供应商生产传感器/光学、电子、外壳/机械、散热、电源及附件部件；摄像机装配与配置；功能测试；包装与出厂交付 |
| market_state | 出厂门的新制成品电视摄像机；翻新、再制造、维修或二手产品须单独声明及建模 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 与 CPC 3.0 代码 47213 及所声明用途、形态、传感器/光学配置、性能、记录/网络功能、供电方式、附件、外壳/电子/散热配置和市场状态相符的成品电视摄像机 |
| How much | 出厂门 `1 kg` 未包装成品摄像机净质量 |
| How well | 符合所声明分辨率、帧率、图像采集功能、接口、供电方式、随附附件配置、功能测试验收和适用市场要求 |
| How long or cycle | 一次出厂门生产输出；使用寿命不嵌入质量参考量，供下游使用阶段建模时另行声明 |
| reference_flow_link | 天工 Product flow `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999` — Television cameras / 电视摄像机 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | `1` |
| 参考产品流 | Television cameras / 电视摄像机 `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999` |
| 参考流属性 | Mass / 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`） |
| 参考单位组 | Units of mass / 质量单位（`93a60a57-a4c8-11da-a746-0800200c9a66`） |
| 参考单位 | `kg` |
| 必需限定信息 | CPC 身份和产品名称；预期用途与摄像机形态；适用时的传感器技术、数量、格式/尺寸、快门及光谱或色彩特性；适用时的集成或可换光路、卡口、焦距/变焦/光圈/滤镜/防抖配置；适用时的分辨率、帧率、扫描方式、位深/色彩或 HDR 模式以及编码/输出模式；适用时的本地记录/存储、网络、音频、元数据、PTZ、分析和控制功能；AC/DC/PoE/电池供电方式；随附电源、电池、线缆、支架、控制器及其他附件；外壳、PCB/电子器件、散热硬件、包装、说明书和标签；生产路线、地理范围、参考期和市场状态 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `measure_reference_product_mass` | 参考产品输出 | Mass | kg | 实测或核对未包装且功能验收合格的摄像机净质量；排除包装及单独供应的附件，除非该附件已物理集成于所声明摄像机。 |
| `measure_material_component_mass` | 外购材料、部件、附件、包装和固体废物 | Mass | kg | 对所代表配置和期间使用采购、收货、BOM、称量或废物记录；保留材料/部件身份，不得报告无说明的汇总量。 |
| `measure_energy` | 装配、配置、测试和包装用能 | Energy | kWh | 使用计量或核对后的场址记录；若为共享用能，只能按第 7 节分配并披露分配动因。 |
| `measure_reject_and_scrap` | 不合格品、废料、回收部件和处理去向 | Mass | kg | 避免在投入核对、产品输出、内部返工和废物输出之间重复计量；单独记录去向和任何返回材料。 |

## 5. 系统边界

所代表生产配置的必需前景边界为从摇篮到出厂门。边界包括外购投入所链接的上游数据集，以及交付成品摄像机所需的前景活动。使用和报废信息作为下游建模元数据保留，但不得无标识地混入制造清单。

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_cradle_to_gate_manufacturing` | 所有代表性生产路线 | 纳入供应商门材料与部件、建模时的运输、摄像机装配、配置、功能测试、生产损耗、包装和出厂交付。 | `pep-ecopassport-pcr-ed4-2021`, `ghg-protocol-product-standard-2011` |
| `boundary_component_completeness` | 传感器/光学、PCB/电子、外壳/机械、散热及电源子系统 | 对可评估的每项材料、部件或过程进行核算；任何排除均须有质量和显著性检查，不得掩盖潜在显著影响。 | `pep-ecopassport-pcr-ed4-2021`, `iec-62474-2018` |
| `boundary_packaging_accessories` | 一次/二次包装、说明书、标签及随附附件 | 包装和附加要素须与 `1 kg` 摄像机净质量参考量分开记录；在数据包中纳入其生产及包装阶段损耗。 | `pep-ecopassport-pcr-ed4-2021` |
| `boundary_use_and_eol_scenarios` | 下游使用与报废 | 从前景制造总量排除使用阶段用电、外部网络/录像设备及报废，除非请求单独标识的情景；保留这些情景所需的功率、寿命、电池、PCB、线缆、显示和材料披露数据。 | `eu-weee-2012-19-eu`, `eu-rohs-2011-65-eu` |
| `boundary_variant_scope` | 产品系列或产品组合数据集 | 只有成文的同质系列或外推规则覆盖形态、传感器/光学、性能、功能、供电、附件和结构差异时才能合并型号；绝不得由单一窄专业型号外推整个 CPC 类别。 | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 材料、部件、能源载体、包装和服务已交付至相关部件、装配或包装场址，并链接上游数据集 |
| starting_condition_role | `supplier_gate_component_and_material_inputs` |
| product_classification_scope | 仅限完整 CPC 3.0 `47213` 电视摄像机；符合某种技术形态不能推翻分类排除项 |
| recursive_input_rule | 作为投入的完整电视摄像机应记录为外购同类产品并链接供应商数据集；不得无说明地拆解，亦不得用于生成第二个规范身份。部件按其真实部件身份记录。 |
| upstream_dataset_requirement | 每项外购材料、部件、能源载体、运输服务、包装和处理服务均链接最具代表性的可用上游数据集；披露供应商、地理、技术和时间错配，不得将不同摄像机形态合并为无依据平均值。 |
| disclosure | 声明场址、地理范围、参考期、产品型号/配置覆盖、所含/排除附件、BOM 覆盖、能源与废物分配、数据缺口、替代、截断决定、下游情景排除及全部系列外推规则。 |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `component_and_subassembly_supply` | 部件与子组件供应 | `required` | 始终；可由供应商链接的上游数据集代表，而非场内前景制造 | 建立完整传感器/光学、电子、机械/散热、电源及附件投入 | 为所代表摄像机输出交付的合格投入质量 |
| `camera_assembly_configuration_test` | 摄像机装配、配置与功能测试 | `required` | 始终 | 装配所声明配置并验证采集、接口、记录/网络和供电功能 | 未包装且功能验收合格的摄像机输出质量 |
| `packaging_and_release` | 包装与出厂交付 | `required` | 始终 | 加入所声明包装/说明书/标签并核对成品输出 | `1 kg` 未包装电视摄像机净输出 |

### 过程：部件与子组件供应（`component_and_subassembly_supply`）

#### 输入

##### 产品流

###### 传感器与光学子组件（`sensor_optical_subassemblies_input`）

记录跨越供应商边界且用于所代表配置的图像传感器、传感器板、光学模块、镜头、卡口、滤镜和防抖部件。

- 选定流：代表性传感器和光学子组件产品流；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：按子组件采集供应商/BOM 数量和质量；不得用完整摄像机或单一型号估计替代。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表摄像机输出的合格投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_component_bom`
- 来源：`ebu-tech-3335-2014`, `iec-62474-2018`

###### PCB 与电子子组件（`pcb_electronics_input`）

主板、图像处理板、网络/记录/存储电子器件、连接器、线缆、音频/控制电子器件和印刷电路板应按供应商记录支持的粒度拆分。

- 选定流：代表性 PCB 与电子子组件产品流；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：按线路板或电子子组件采集 BOM 数量和质量，并在适用时识别本地记录、网络、音频、元数据、PTZ、分析或控制功能。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表摄像机输出的合格投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_component_bom`
- 来源：`iec-62474-2018`, `onvif-profile-g`

###### 外壳、机械与散热部件（`enclosure_mechanical_thermal_input`）

壳体、机架、紧固件、密封件、电机、支架、散热器、风扇、导热界面材料及其他机械或散热部件应反映实际形态和防护设计。

- 选定流：代表性材料与部件产品流；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：按材料或部件族采集 BOM 数量和质量；适用时识别主动/被动散热及 PTZ 机械件。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表摄像机输出的合格投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_component_bom`
- 来源：`pep-ecopassport-pcr-ed4-2021`, `axis-network-camera-types`

###### 电源部件与随附附件（`power_accessories_input`）

记录随所声明产品供应的电源板、AC/DC 电源、PoE 硬件、电池、线缆、支架、控制器及其他附件，并保持各自独立。

- 选定流：代表性电源部件和附件产品流；不规定类别通用 UUID
- 流属性/单位：Mass / kg
- 数量规则：采集 BOM 与装箱单数量和质量；识别每一项目是否集成、随附、可选或排除于销售单元。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：所代表摄像机输出的合格投入
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_component_bom`
- 来源：`pep-ecopassport-pcr-ed4-2021`, `sony-brc-ptz-ip-camera-family`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 合格部件集（`qualified_component_set_output`）

转入摄像机装配的已核对部件集须保留所代表配置和供应商链接。

- 选定流：合格电视摄像机部件集；仅为编制时角色
- 流属性/单位：Mass / kg
- 数量规则：在单独记录供应商不合格品或损耗后，汇总转入装配的合格部件投入。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：所代表摄像机输出的部件集
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_component_bom`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

### 过程：摄像机装配、配置与功能测试（`camera_assembly_configuration_test`）

#### 输入

##### 产品流

###### 合格部件集（`qualified_component_set_input`）

完整合格部件集进入装配，同时保持 BOM 和供应商可追溯性。

- 选定流：合格电视摄像机部件集；链接 `qualified_component_set_output`
- 流属性/单位：Mass / kg
- 数量规则：从上一过程转入实测的合格部件集质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：未包装合格摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_assembly_inputs_outputs`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 装配与测试用能（`assembly_test_energy_input`）

应按所代表场址和期间采集装配、固件/配置、校准、老化及图像/接口功能测试所用电力和其他能源。

- 选定流：与实际供应相符的场址电力或其他能源载体产品流
- 流属性/单位：Energy / kWh
- 数量规则：直接计量，或根据可审计场址/分表记录核对；共享用能按第 7 节处理。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：未包装合格摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_assembly_energy`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 装配耗材（`assembly_consumables_input`）

使用时应记录焊料、胶黏剂、清洗剂、防护材料及其他工艺耗材。

- 选定流：与采购记录相符的代表性耗材产品流
- 流属性/单位：Mass / kg
- 数量规则：采集领用、采购减库存变化或过程记录，并核对回收与处置。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：未包装合格摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_assembly_inputs_outputs`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

#### 输出

##### 产品流

###### 未包装测试合格摄像机（`unpackaged_tested_camera_output`）

本中间产品是已通过所声明图像采集、性能模式、接口、记录/网络功能及供电方式检查的完整摄像机。

- 选定流：未包装测试合格电视摄像机；编制时中间产品角色
- 流属性/单位：Mass / kg
- 数量规则：称量或核对合格未包装输出，并记录配置特定合格数量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：未包装合格摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_assembly_inputs_outputs`
- 来源：`ebu-tech-3335-2014`, `basler-camera-selection-guide-2023`, `onvif-profile-g`

##### 废物流

###### 装配废料与不合格品（`assembly_scrap_rejects_output`）

废料、不合格线路板/部件、故障摄像机和拆除部件须与测量期内返回的返工材料分开。

- 选定流：按材料和处理去向选择代表性废物流
- 流属性/单位：Mass / kg
- 数量规则：采集废物转移、不合格品和返工记录；内部返工材料不得计为最终废物。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：未包装合格摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_waste_rework`
- 来源：`pep-ecopassport-pcr-ed4-2021`, `eu-weee-2012-19-eu`

##### 基本流

### 过程：包装与出厂交付（`packaging_and_release`）

#### 输入

##### 产品流

###### 未包装测试合格摄像机（`unpackaged_tested_camera_input`）

合格摄像机进入包装时，参考产品质量仍不包含包装及单独供应附件。

- 选定流：未包装测试合格电视摄像机；链接 `unpackaged_tested_camera_output`
- 流属性/单位：Mass / kg
- 数量规则：从装配与测试过程转入实测合格摄像机质量。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：成品电视摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_packaging_release`
- 来源：`pep-ecopassport-pcr-ed4-2021`

###### 包装、说明书与标签（`packaging_materials_input`）

一次与二次包装、说明书、标签和防护衬垫须按材料和质量记录。

- 选定流：与实际采购记录相符的代表性包装材料产品流
- 流属性/单位：Mass / kg
- 数量规则：采集包装规范、BOM 或领用记录，并单独识别可重复使用或可回收包装。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：成品电视摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_packaging_release`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 成品电视摄像机（`finished_television_camera_output`）

参考输出采用 CPC 47213 的精确天工 Product flow，并代表功能验收合格且未包装摄像机的净质量。

- 选定流：Television cameras / 电视摄像机 `ce2c0eb5-09e4-487a-a0f9-0c8e9844f999`
- 流属性/单位：Mass / 质量（`93a60a56-a3c8-11da-a746-0800200b9a66`）/ Units of mass / 质量单位（`93a60a57-a4c8-11da-a746-0800200c9a66`）中的 kg
- 数量规则：定量参考严格设为未包装摄像机净质量 `1 kg`；所有其他记录缩放至相同合格输出基准。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：出厂门 `1 kg` 未包装电视摄像机净质量
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_packaging_release`
- 来源：`unstats-cpc-3-0`, `pep-ecopassport-pcr-ed4-2021`

##### 废物流

###### 包装废料（`packaging_scrap_output`）

包装边角料、损坏包装及其他交付阶段废物须与随产品交付的包装分开报告。

- 选定流：按材料和处理去向选择代表性废物流
- 流属性/单位：Mass / kg
- 数量规则：采集包装领用和废物转移记录，并与包装投入及已发运包装核对。
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：成品电视摄像机输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`collect_packaging_release`
- 来源：`pep-ecopassport-pcr-ed4-2021`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_avoid` | 多输出或共享作业 | 首先通过分表计量、独立工单、工时记录或过程细分避免分配，以代表具体摄像机配置。 | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `allocation_shared_operations` | 共享装配、测试、暖通、压缩空气和场址服务 | 无法实际细分时，采用反映因果关系的成文物理动因，如机器时间、测试时间、实测能耗、面积时间或合格质量；只有物理关系不能合理代表过程时方可经济分配，并须披露。 | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `allocation_rework_scrap` | 返工、不合格品和生产废料 | 同期返回同一过程的材料不计入最终废物；以配置特定实测记录将不可回收损耗分配至合格输出，外部处理另行报告。 | `pep-ecopassport-pcr-ed4-2021` |
| `allocation_recycling` | 再生投入和输出可回收材料 | 明确声明回收分配方法、系统边界及任何负担或抵扣；不得在没有一致声明方法时混用再生含量法与报废抵扣。 | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `collect_component_bom` | `component_and_subassembly_supply` | 外购部件、材料、电源部件及附件 | 供应商声明、批准 BOM、采购/收货记录、部件质量 | 料号；功能；供应商；数量；质量；材料/物质声明；传感器/光学/电子/机械/散热/电源角色；随附附件状态 | 将批准配置 BOM 与收货及合格部件核对；保留供应商与材料声明 | kg, item | 每配置和报告期 | 与所代表生产同期，或声明供应商数据年份 | 所有代表性供应商与生产场址 | 数量乘以核实部件质量，单独处理不合格品和库存变化 | 已批准 BOM；称量记录；供应商声明；CPC/产品身份记录 |
| `collect_assembly_inputs_outputs` | `camera_assembly_configuration_test` | 部件、耗材、合格摄像机和不合格输出 | 工单、领料、称量、测试与验收记录 | 配置；投入数量/质量；耗材；输出数量/质量；传感器/光学设置；分辨率；帧率；接口；记录/网络功能；供电模式；测试结果 | 按配置核对工单、领料、合格输出和不合格品 | kg, item | 每批或可审计报告期 | 代表性生产期 | 每个代表性装配/测试场址 | 汇总合格记录；系列合并前保留配置分层 | 工单核对；测试规范与结果；校准称量记录 |
| `collect_assembly_energy` | `camera_assembly_configuration_test` | 装配、配置、校准和测试用能 | 电表、分表、设备日志或核对后的公用工程记录 | 表计 ID；始末读数；能源载体；过程时间；分配动因；场址；期间 | 优先直接计量；否则按第 7 节核对可审计共享记录 | kWh | 表计间隔或报告期 | 代表性生产期 | 每个代表性装配/测试场址 | 汇总计量用能；仅以披露的因果动因分配共享用能 | 表计校准/状态；公用工程账单核对；分配工作表 |
| `collect_waste_rework` | `camera_assembly_configuration_test` | 废料、不合格品、返工、回收部件和处理 | 不合格品日志、返工单、废物转移联单、回收商记录 | 材料/部件；质量；原因；返工返回；回收；去向；处理 | 将不合格品与返工返回、回收部件和输出废物核对 | kg | 每批或报告期 | 代表性生产期 | 每个代表性场址 | 内部返工只计一次，仅报告最终输出废物 | 质量平衡表；签署的废物转移/处理证据 |
| `collect_packaging_release` | `packaging_and_release` | 摄像机净输出、包装、说明书、标签和包装废物 | 包装规范、BOM、称量、发运与废物记录 | 摄像机净质量；包装材料/质量；说明书/标签；随附附件；包装数量；重复使用状态；废物 | 核对产品净质量、包装规范、发运单元和包装废料 | kg, item | 每配置或报告期 | 代表性生产期 | 每个代表性包装/交付场址 | 将摄像机净质量、随附附件和包装保持为独立数量 | 批准包装规范；发运记录；称量记录；废物核对 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部清单记录 | 归一化量 = 期间数量 / 合格摄像机净质量（kg） | 期间投入/输出量；合格未包装摄像机净质量 | 每 `1 kg` 参考产品的数量 | `pep-ecopassport-pcr-ed4-2021` |
| `calc_component_mass` | BOM 部件与附件 | 部件质量 = 合格数量 × 核实的单件质量；与实测摄像机质量、过程损耗和单独供应附件核对 | 合格数量；核实单件质量；产品净质量；损耗 | 配置特定部件质量 | `iec-62474-2018`, `pep-ecopassport-pcr-ed4-2021` |
| `calc_packaging_mass` | 随产品交付的包装 | 每参考量包装质量 = 发运包装质量 / 发运摄像机净质量；可重复使用包装分开 | 包装领用/发运质量；发运摄像机净质量 | 每 `1 kg` 摄像机净质量对应包装 kg | `pep-ecopassport-pcr-ed4-2021` |
| `calc_family_weighting` | 所声明产品系列数据集 | 系列结果 = 各配置归一化记录 × 披露的产量或销量权重之和；只使用同质系列规则覆盖的配置 | 配置结果；代表性数量；资格矩阵 | 加权系列数据集及覆盖披露 | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity_performance` | 产品与参考流 | 对每个代表性配置证明 CPC 47213 身份，并记录用途/形态、传感器/光学、分辨率/帧率、记录/网络、供电与附件限定信息。 | 产品规格、分类记录、测试规范和已验收配置清单 |
| `dq_bom_completeness` | 材料与部件 | 核对 BOM、产品净质量、附件和生产损耗；说明每一排除项并评估其是否可能掩盖显著影响。 | 批准 BOM、实测质量、排除清单和质量平衡检查 |
| `dq_primary_foreground` | 装配、测试、包装和废物 | 对代表性场址和期间使用场址特定一次数据；披露代理数据及时间、地理或技术错配。 | 表计/工单/测试/包装/废物记录和成文数据质量评估 |
| `dq_supplier_materials` | 外购电子器件、光学件、电池、外壳和线缆 | 尽可能保留供应商及材料/物质声明的细分信息，包括适用的 RoHS/WEEE 相关信息。 | 供应商声明、IEC 62474 兼容材料声明、合规证据 |
| `dq_family_coverage` | 多型号数据集 | 保留型号/配置分层、权重数据和资格矩阵；报告一次记录未覆盖的比例。 | 系列规则、配置清单、产量/销量权重和覆盖率计算 |

## 9. 校验规则

| rule_id | Applies to | Rule | source_ids |
| --- | --- | --- | --- |
| `validate_exact_identity` | 参考产品 | 确认所选流 UUID、状态码 `100`、Product flow 类型、Mass 参考属性、Units of mass 单位组、kg 参考单位以及名称/正文/CPC 47213 语义；拒绝相邻类别或部件流。 | `unstats-cpc-3-0` |
| `validate_required_qualifiers` | 数据集元数据与参考流 | 缺少预期用途/形态、传感器/光学、分辨率/帧率、记录/网络功能、供电/附件、外壳/PCB/散热结构或包装声明时，完整性校验失败。 | `ebu-tech-3335-2014`, `onvif-profile-g`, `basler-camera-selection-guide-2023`, `sony-brc-ptz-ip-camera-family` |
| `validate_exclusions` | 产品范围 | 拒绝数码照相机、录像机/摄录一体机、手机摄像模块、独立部件、独立录像设备及归入其他 CPC 叶的产品。 | `unstats-cpc-3-0` |
| `validate_reference_mass` | 定量参考 | 确认严格为 `1 kg` 未包装合格摄像机净质量，并将包装和单独供应附件分开。 | `pep-ecopassport-pcr-ed4-2021` |
| `validate_process_coverage` | 前景过程图 | 确认部件/子组件供应、装配/配置/测试、生产损耗、包装和出厂交付均已代表或明确链接并说明。 | `pep-ecopassport-pcr-ed4-2021` |
| `validate_mass_reconciliation` | BOM、输出与废物 | 核对部件/材料投入与产品净质量、随附附件、包装、不合格品、返工、废料和库存变化，避免重复计量。 | `pep-ecopassport-pcr-ed4-2021` |
| `validate_allocation_disclosure` | 共享作业与回收 | 确认首先避免分配、每一剩余动因具有因果性且已披露，并以一个一致声明的方法处理回收负担/抵扣。 | `ghg-protocol-product-standard-2011`, `pep-ecopassport-pcr-ed4-2021` |
| `validate_family_extrapolation` | 多型号或产品组合结果 | 没有资格矩阵、配置特定数据和成文权重/外推规则时，拒绝由单一窄型号推得类别或系列结果。 | `pep-ecopassport-pcr-ed4-2021`, `ebu-tech-3335-2014` |
| `validate_data_quality` | 前景与供应商数据 | 确认报告期/场址覆盖、测量证据、供应商特异性、代理披露、排除清单和材料/物质证据齐备；否则报告校验不完整。 | `iec-62474-2018`, `eu-weee-2012-19-eu`, `eu-rohs-2011-65-eu` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 所声明 CPC 47213 电视摄像机配置或成文同质产品系列的前景生产数据包 |
| downstream_use | 构建天工 LCA `process` 与 `lifecyclemodel` 投影，以及另行声明的使用或报废情景 |
| allowed_use | 具有链接上游数据集并披露分配/数据质量的配置特定或合格系列从摇篮到出厂门建模 |
| excluded_use | 自动代表数码照相机、摄录一体机/录像机、手机摄像模块、独立部件、其他 CPC 叶，或以一个型号代表整个电视摄像机类别 |
| required_metadata | 参考流 UUID 与单位身份；CPC 代码；用途/形态；传感器/光学；分辨率/帧率；记录/网络；供电/附件；外壳/PCB/散热配置；包装；场址/地理；期间；路线；市场状态；分配及系列规则 |
| required_quality_disclosure | 一次数据比例与覆盖；供应商/BOM 完整性；排除；代理与错配；测量与质量平衡证据；不确定性或局限；系列权重；适用的材料/物质声明 |
| update_trigger | 分类、参考流身份、摄像机配置、传感器/光学、性能模式、记录/网络或电源架构、BOM/材料、生产场址/路线、包装、分配方法、供应商数据、法规或代表性系列发生实质变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unstats-cpc-3-0` | `official_guidance` | [联合国统计司，Central Product Classification (CPC), Version 3.0](https://unstats.un.org/unsd/classifications/Econ/CPC)，访问于 2026-08-09 | CPC 47213 类别身份与排除护栏 |
| `pep-ecopassport-pcr-ed4-2021` | `standard` | [PEP ecopassport, Product Category Rules for Electrical, Electronic and HVAC-R Products, Edition 4](https://register.pep-ecopassport.org/documents/public/PCR-4-EN)，2021，访问于 2026-08-09 | 生产边界、部件与包装完整性、前景记录、排除显著性、分配及产品系列外推 |
| `ebu-tech-3335-2014` | `standard` | [European Broadcasting Union, EBU Tech 3335: Methods of measuring the imaging performance of television cameras](https://tech.ebu.ch/docs/tech/tech3335.pdf)，2014，访问于 2026-08-09 | 摄像机传感器/光学架构、分辨率/帧率及用途特定性能限定信息 |
| `iec-62474-2018` | `standard` | [IEC 62474:2018, Material declaration for products of and for the electrotechnical industry](https://webstore.iec.ch/en/publication/29857)，访问于 2026-08-09 | BOM 材料/物质声明及供应商证据 |
| `eu-weee-2012-19-eu` | `standard` | [Directive 2012/19/EU on waste electrical and electronic equipment](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32012L0019)，访问于 2026-08-09 | 部件/材料信息，以及下游电池、PCB、线缆、显示和塑料披露 |
| `eu-rohs-2011-65-eu` | `standard` | [Directive 2011/65/EU on restriction of hazardous substances in electrical and electronic equipment](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32011L0065)，访问于 2026-08-09 | 均质材料、线缆、备件及供应商合规证据 |
| `ghg-protocol-product-standard-2011` | `method_factor` | [WRI/WBCSD, Product Life Cycle Accounting and Reporting Standard](https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard-EReader_041613_0.pdf)，2011，访问于 2026-08-09 | 生命周期边界、一次数据质量与分配层级 |
| `onvif-profile-g` | `standard` | [ONVIF, Profile G for edge storage and retrieval](https://www.onvif.org/profiles/profile-g/)，访问于 2026-08-09 | 网络摄像机记录、存储、音频、元数据与控制限定信息 |
| `axis-network-camera-types` | `handbook` | [Axis Communications Academy, Get to know network camera product types](https://www.axis.com/en-id/learning/academy/elearning/get-to-know-axis-network-camera-product-types)，访问于 2026-08-09 | 安防摄像机形态差异；仅在确认 CPC 47213 身份后使用 |
| `basler-camera-selection-guide-2023` | `handbook` | [Basler, Vision System Camera Selection Guide](https://www.baslerweb.com/en-us/learning/camera-selection/)，访问于 2026-08-09 | 工业视觉形态、传感器、快门、分辨率和帧率限定信息；不提供类别默认值 |
| `sony-brc-ptz-ip-camera-family` | `handbook` | [Sony Professional, BRC PTZ IP camera family](https://pro.sony/en_CA/products/ptz-network-cameras/brc-ptz-ip-cameras)，访问于 2026-08-09 | 广播/会议 PTZ、传感器/光学、IP、控制和供电差异；不用于类别定量外推 |
