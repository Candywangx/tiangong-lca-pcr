---
pcr_id: pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.general-business-productivity-and-home-use-applications-packaged
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 通用商务生产力及家庭用途应用软件（成品软件）

## 1. 范围与适用性

本 PCR 适用于以实体成品形式供应、面向通用商务生产力或家庭娱乐、参考与教育用途的已出版标准化应用软件。涵盖示例包括办公套件及其文字处理、电子表格和简单数据库功能，图形应用、项目管理软件、计算机辅助培训软件，以及家庭参考或教育应用软件。

本 PCR 不涵盖操作系统、网络软件、数据库管理平台、开发工具与编程语言、计算机游戏及其他应用软件子类，也不涵盖定制软件开发、软件即服务、云托管应用服务和应用软件下载。CPC 3.0 将可下载并存储在本地设备上、供后续执行或安装的应用软件电子文件另列于 84342 子类。数据生产者不得仅因软件采用商业许可而使用本 PCR；所声明的产品必须是本 PCR 所涵盖的实体成品软件供应。

默认前景边界涵盖版本开发、构建、测试、母版制作、实体介质装配及零售包装，直至生产者门口的成品软件。分销、客户设备运行、版本发布后的维护和报废处理不在默认边界内；研究若纳入这些阶段，必须将其作为单独声明的模块。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.radio-television-and-communication-equipment-and-apparatus.general-business-productivity-and-home-use-applications-packaged |
| classification_refs | CPC 3.0：47821（精确分类语境；此处不主张已接受的映射） |
| covered_products | 用于通用商务生产力及家庭娱乐、参考或教育的已出版实体成品应用软件，包括办公套件、文字处理器、电子表格、简单数据库、图形应用、项目管理软件、计算机辅助培训以及家庭参考或教育软件 |
| excluded_products | 应用软件下载；计算机游戏；操作系统；网络软件；数据库管理软件；开发工具与编程语言；其他应用软件；定制开发；SaaS 与托管应用服务 |
| representative_product | 记录在光盘上并配有零售纸盒和纸质说明书内页的已发布通用商务生产力应用软件 |
| production_route | 需求与版本开发 → 构建、测试及母版制作 → 接收已刻录介质 → 实体装配与零售包装 → 生产者门口成品软件 |
| market_state | 已完成、已出版并标明版本，可供销售或分发的实体成品软件；不含仅供下载的产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 供应能够提供所声明通用商务生产力或家庭娱乐、参考或教育功能的已出版实体成品应用软件 |
| How much | 生产者门口 1 kg 成品应用软件 |
| How well | 所声明版本可从指定实体介质安装，并提供所声明的应用功能、版本、支持平台、界面语言和许可范围 |
| How long or cycle | 一个完整的版本发布与包装生产期；必须声明用于分摊开发负荷的报告期和版本寿命 |
| reference_flow_link | `packaged_application_output` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg |
| 参考产品流 | 一般企业生产力和家庭应用软件，打包 `5a4c8133-eca9-4b40-8196-822a97bcd716` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 应用功能；产品名称与版本；发布标识；支持的操作系统与硬件架构；界面语言；许可范围；实体介质类型与数量；零售包装组件；地理范围；报告期；生产者门口边界；分摊分母 |

构建前景数据包时，每项必需限定信息均须在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中声明。缺少必需限定信息时，参考流不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_product_mass` | 成品应用软件以及以质量计量的材料或废物行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 在所声明的含水率与包装状态下称量或计算净质量。1 kg 参考量包括已刻录介质、零售纸盒和随附纸质说明书内页，但不包括所声明零售产品之外的运输包装。 |
| `electricity_energy_conversion` | 开发/构建/测试和包装用电 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 以 kWh 采集电表或供应商记录，并按 1 kWh = 3.6 MJ 转换为 TianGong 参考单位。地理范围、电压、电网组合、可再生能源声明和损耗边界须作为独立限定信息；不得将电力换算为质量。 |
| `release_allocation_denominator` | 版本层面的开发、构建、测试和母版制作记录 | Mass | kg 成品软件 | 以同一版本和报告期内生产的合格实体成品软件质量对版本层面记录进行归一化。分母不得包含仅供下载的单元和 SaaS 订阅。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 项目或版本启动时，已识别软件需求、既有源代码组件、第三方依赖项及预期实体成品配置 |
| starting_condition_role | 版本开发的清单起始条件，也是追溯进入实体成品的外购组件的起点 |
| product_classification_scope | 以实体成品形式供应的已出版通用商务生产力及家庭用途应用软件；仅供下载的应用文件属于另一 CPC 子类，不在本 PCR 范围内 |
| recursive_input_rule | 若外购组件已归入同一成品应用软件类别，应将其一次性记录为具有合规上游数据集的产品投入；不得在接收过程中递归重建其开发与包装 |
| upstream_dataset_requirement | 电力、已刻录光盘、纸盒、纸质说明书内页以及任何新增介质或包装组件，均须采用与地理、技术和产品状态相符的上游数据集 |
| disclosure | 声明所纳入的软件组件、版本/构建/测试基础设施、实体介质、包装配置、生产者门口地理范围、报告期、分摊分母、排除项，以及逐项支持硬件评估及其纳入或截断决定 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_physical_packaged_product` | 产品适用性 | 仅纳入所涵盖功能范围内的已出版实体成品应用软件；排除仅供下载的应用文件以及托管或定制软件服务。 | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `boundary_release_production` | 必需前景过程 | 纳入版本开发、构建、测试、母版制作、实体装配与零售包装，直至生产者门口的成品软件。 | `gsf-sci-1-1`; `un-cpc-3-0-47821` |
| `boundary_supporting_infrastructure` | 重要支持基础设施 | 纳入开发/构建/测试及包装的实测电力。对支持所代表版本的每台实际开发工作站、构建/测试服务器、存储设备和网络设备开展有记录的资产特定重要性评估。将每项重要资产作为单独的具体产品交换，关联适用硬件数据集，并按已披露的时间份额和资源份额分摊。仅当保留并披露定量截断计算时方可排除资产；未声明或缺失数据不得视为零。保留设备类型、型号或配置、资产标识、地理范围、寿命基准及分摊变量，不得将不同设备合并为伞状硬件行。 | `gsf-sci-1-1` |
| `boundary_background_emissions` | 外购电力与材料 | 外购电力和材料的隐含排放使用上游数据集；除非前景过程发生直接排放，否则不得将其重复记录为直接基本流输出。 |  |
| `boundary_optional_modules` | 分销、运行、维护与报废 | 这些阶段不属于默认生产者门口数据集。研究如增加任一阶段，须以具有独立功能基准、情景、清单和排除项的模块报告。 | `gsf-sci-1-1` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `software_development_release` | 软件开发、构建、测试与版本母版制作 | required | 所代表版本始终纳入 | 创建已发布应用和经验证母版的前景过程 | 按报告期内合格成品软件质量归一化的版本层面记录 |
| `physical_media_packaging` | 实体介质装配与零售包装 | required | 始终纳入；须声明实际实体介质与包装配置 | 直至生产者门口产品的前景装配与包装 | 1 kg 成品应用软件 |

### 过程：软件开发、构建、测试与版本母版制作（`software_development_release`）

#### 输入

##### 产品流

###### 开发、构建、测试与母版制作用电（`development_electricity_input`）

记录开发者工作站，以及经计量或分摊的构建、测试、集成和母版制作基础设施所消耗的电力。将供应商或电表记录的 kWh 转换为 MJ，并分摊至所代表的实体版本。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：汇总所纳入版本活动的实测或供应商记录 kWh，按 3.6 MJ/kWh 转换，分摊至该版本，再除以合格成品软件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_development_electricity`
- 来源：`gsf-sci-1-1`

##### 废物流

##### 基本流

#### 输出

##### 产品流

##### 废物流

##### 基本流

### 过程：实体介质装配与零售包装（`physical_media_packaging`）

#### 输入

##### 产品流

###### 实体装配与包装用电（`packaging_electricity_input`）

将光盘搬运、验证、贴标、装配及零售包装设备用电与版本开发用电分别记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：汇总包装线的实测或分摊 kWh，按 3.6 MJ/kWh 转换，并按合格成品软件质量归一化
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_electricity`
- 来源：`gsf-sci-1-1`

###### 已刻录光盘介质（`recorded_optical_disc_input`）

纳入所声明光盘包装路线消耗的成品已刻录光盘质量，按领用质量减去真正未使用的退料质量计算。投入既包括保留在合格成品中的光盘，也包括作为不合格品或废料消耗的光盘。采用其他实体介质时，须为该介质另设原子行并完成身份审计。

- 选定流：载有所声明 CPC 47821 应用软件的已刻录光盘
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：已刻录光盘实测领用质量减去真正未使用的退料质量；包括保留在合格包装中的质量和另行作为废物报告的已消耗不合格品
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_recorded_disc_mass`
- 来源：

###### 零售纸盒（`paper_box_input`）

纳入包装过程中消耗的零售纸盒质量，按领用质量减去真正未使用的退料质量计算。投入既包括保留在合格成品中的纸盒，也包括已消耗的不合格品或废料。本行不含零售产品之外的瓦楞运输箱。

- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：纸盒实测领用质量减去真正未使用的退料质量；包括保留在合格包装中的质量和另行作为废物报告的已消耗不合格纸盒
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paper_box_mass`
- 来源：

###### 纸质说明书内页（`paper_insert_input`）

纳入包装过程中消耗的纸质说明书内页质量，按领用质量减去真正未使用的退料质量计算。投入既包括保留在合格成品中的内页，也包括已消耗的不合格品或废料。本行不含纸质标签和运输单据。

- 选定流：包装, 纸质说明书内页 `b4681b7b-ff95-4df8-804a-fff06aa3c3aa`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：纸质说明书内页实测领用质量减去真正未使用的退料质量；包括保留在合格包装中的质量和另行作为废物报告的已消耗不合格内页
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paper_insert_mass`
- 来源：

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 实体成品应用软件（`packaged_application_output`）

这是生产者门口的合格参考产品，包括所声明配置中的已刻录介质、零售纸盒和纸质说明书内页。

- 选定流：一般企业生产力和家庭应用软件，打包 `5a4c8133-eca9-4b40-8196-822a97bcd716`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：由合格成品实测质量归一化后固定为 1 kg 参考输出
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：生产者门口 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-47821`

##### 废物流

###### 不合格已刻录光盘（`waste_recorded_optical_disc_output`）

将在验证或包装期间被拒收的带涂层已刻录光盘，作为处理前的单一质量废物流记录。TianGong 废物流 UUID 尚未解决；不得以通用废塑料或处理服务代替。

- 选定流：废已刻录光盘
- 流属性/单位：Mass / kg
- 数量规则：离开前景过程的不合格已刻录光盘实测质量，不含合格光盘和纸板废物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_optical_disc_waste`
- 来源：

###### 纸板包装废弃物（`paperboard_packaging_waste_output`）

记录包装过程离场处理前的纸盒坯、不合格纸盒及其他纸板包装边角料。纸质说明书内页废料在下列单独行中记录。

- 选定流：包装废弃物，纸板 `72270223-04b1-4986-a546-94e5a0821317`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开前景过程的纸板零售包装边角料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paperboard_waste`
- 来源：

###### 纸质说明书内页废物（`paper_insert_waste_output`）

将印刷错误、破损或其他不合格的纸质说明书内页在离开包装过程、进入处理前记录，并与纸板纸盒废物分别核算。

- 选定流：包装废弃物，纸类 `6b6f1025-cb6a-4c9d-9947-7726c4307a76`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：离开前景过程的纸质说明书内页废料实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品应用软件
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_paper_insert_waste`
- 来源：

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_release` | 版本特定的开发、构建、测试、母版制作与包装 | 优先采用直接计量以及版本特定的任务、构建和设备记录。实施分摊前，先按版本和活动细分共享基础设施。 | `gsf-sci-1-1` |
| `allocation_shared_compute` | 共享开发或构建基础设施 | 无法细分时，按所代表版本的实测或调度器记录资源时间分摊电力；披露资源指标、闲置容量处理、报告期和排除的工作负载。 | `gsf-sci-1-1` |
| `allocation_hardware_embodied` | 每项重要支持硬件资产 | 对重要性评估保留的每台实际设备，按时间份额和资源份额，以 `TE × (TiR / EL) × (RR / ToR)` 分摊该资产特定的硬件数据集，再按合格成品软件质量归一化。披露所有变量、数据源、设备身份及有依据的截断；不得将不同资产合并为一个交换。 | `gsf-sci-1-1` |
| `allocation_mass_normalization` | 版本层面负荷和多个实体成品单元 | 将所代表版本负荷除以同一分摊期内合格实体 CPC 47821 成品的总质量。分母不得包含仅供下载的单元、SaaS 订阅和本 PCR 范围外产品。 | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `allocation_waste_no_credit` | 已刻录光盘、纸板纸盒及纸质说明书内页废物 | 报告已消耗的材料投入，并分别报告各项离场废物。不得在生产者门口过程中计入回收或避免负荷抵扣；任何处理或抵扣均在另行声明的下游模块中建模。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_development_electricity` | `software_development_release` | 所纳入版本活动的电力 | 电表、公用事业、云托管、构建运行器及调度器记录 | meter_kWh; supplier_kWh; workload_id; release_id; timestamp; geography; voltage; allocation_resource_time; idle_capacity_rule | 将设施或供应商电量与版本特定资源时间记录和排除项对账 | kWh 与资源时间单位 | 至少每月；有条件时按版本/构建批次 | 完整报告期；缺少更细数据时，年度数据是可接受的最低时间粒度 | 版本边界内所有开发设施和托管资源 | 将 kWh 转为 MJ，将共享电量分摊至版本，汇总后除以合格成品质量 | 电表校准或供应商账单；工作负载日志；对账；覆盖范围与缺口说明 |
| `cp_packaging_electricity` | `physical_media_packaging` | 装配与包装电力 | 包装线电表及生产记录 | meter_start_kWh; meter_end_kWh; packaged_product_kg; downtime_kWh; line_id; timestamp | 读取专用电表，或按实测生产线运行时间分摊经对账的设施电表 | kWh | 每个生产批次并按月汇总 | 生产所代表版本的全部批次 | 范围内全部包装场址 | 扣除有记录的范围外负荷，将 kWh 转为 MJ，再除以合格成品质量 | 电表校准；生产日志；设施对账；停机用电处理 |
| `cp_recorded_disc_mass` | `physical_media_packaging` | 已刻录光盘投入 | 收货、领料、退料、物料清单、称量、不合格品及库存记录 | lot_id; issued_disc_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg; release_id | 对代表性光盘称量，并将领用质量与真正未使用的退料、成品保留量、不合格品及库存移动对账 | kg | 每个来料批次和生产批次 | 所代表版本消耗的全部批次 | 范围内每个包装场址和供应商批次 | 已消耗光盘质量按领用质量减去真正未使用的退料质量计算，包含已消耗不合格品，再除以合格成品质量 | 经校准秤；供应商规格；批次对账；退料记录；不合格品记录；库存台账 |
| `cp_paper_box_mass` | `physical_media_packaging` | 零售纸盒投入 | 物料清单、供应商、领料、退料、称量、不合格品及库存记录 | box_lot_id; box_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg | 对代表性纸盒称量，并将领用质量与真正未使用的退料、成品保留量、废料及库存移动对账 | kg | 每个包装材料批次和生产批次 | 所代表版本消耗的全部纸盒 | 范围内每个包装场址和纸盒供应商 | 已消耗纸盒质量按领用质量减去真正未使用的退料质量计算，包含已消耗不合格品，再除以合格成品质量 | 经校准秤；供应商规格；领退料记录；物料对账；库存台账 |
| `cp_paper_insert_mass` | `physical_media_packaging` | 纸质说明书内页投入 | 物料清单、印刷订单、领料、退料、称量、不合格品及库存记录 | insert_lot_id; insert_count; unit_mass_kg; issued_mass_kg; unused_returned_mass_kg; rejected_mass_kg; stock_adjustment_mass_kg | 对代表性内页称量，并将领用质量与真正未使用的退料、成品保留量、废料及库存移动对账 | kg | 每个印刷批次和生产批次 | 所代表版本消耗的全部内页 | 范围内每个包装场址和印刷供应商 | 已消耗内页质量按领用质量减去真正未使用的退料质量计算，包含已消耗不合格品，再除以合格成品质量 | 经校准秤；印刷商规格；领退料记录；物料对账；库存台账 |
| `cp_product_mass` | `physical_media_packaging` | 合格成品输出 | 成品数量和称量记录 | release_id; product_variant; package_count; sample_unit_mass_kg; total_output_mass_kg; rejected_package_mass_kg | 按有记录的统计抽样称量，或称量完整批次，并与成品数量对账 | kg | 每个生产批次和版本 | 完整报告期 | 范围内每个包装场址 | 仅汇总合格输出质量，并以此作为归一化分母 | 经校准秤；抽样方案；成品对账 |
| `cp_optical_disc_waste` | `physical_media_packaging` | 不合格已刻录光盘废物 | 分类废物容器与不合格品记录 | container_id; gross_mass_kg; tare_mass_kg; release_id; rejection_reason; destination | 在场外处理前称量分类收集的不合格已刻录光盘 | kg | 每个容器和生产批次 | 完整报告期 | 范围内每个包装场址 | 汇总不合格光盘净质量，再除以合格成品质量 | 经校准秤；不合格品记录；废物转移记录；污染检查 |
| `cp_paperboard_waste` | `physical_media_packaging` | 纸板包装废物 | 分类废物容器与物料对账记录 | container_id; gross_mass_kg; tare_mass_kg; release_id; destination; contamination_note | 在处理前称量分类收集的纸板零售包装边角料 | kg | 每个容器和生产批次 | 完整报告期 | 范围内每个包装场址 | 汇总纸板包装废物净质量，再除以合格成品质量 | 经校准秤；物料平衡；废物转移记录；污染检查 |
| `cp_paper_insert_waste` | `physical_media_packaging` | 纸质说明书内页废物 | 分类废物容器、不合格品及物料对账记录 | container_id; gross_mass_kg; tare_mass_kg; release_id; rejection_reason; destination; contamination_note | 在处理前称量分类收集的纸质说明书内页废料 | kg | 每个容器和生产批次 | 完整报告期 | 范围内每个包装场址 | 汇总纸质说明书内页废物净质量，再除以合格成品质量 | 经校准秤；印刷/不合格品记录；物料平衡；废物转移记录；污染检查 |
| `cp_hardware_materiality_assessment` | `software_development_release` | 支持硬件边界评估 | 资产登记、配置、硬件 LCA、利用率及截断工作表 | asset_id; device_type; model_or_configuration; geography; hardware_dataset_id; TE; TiR; EL; RR; ToR; allocated_burden; cutoff_threshold; inclusion_decision; exclusion_justification | 逐台筛查每项实际支持设备；保留计算，并将每项重要设备作为单独产品交换纳入 | 硬件数据集单位及分摊变量 | 每个版本，并在资产或利用率变化时更新 | 完整版本分摊期 | 范围内所有开发、构建、测试、存储及网络资产 | 将资产特定的分摊负荷与已披露截断值比较；不合并地保留重要设备及有记录的排除项 | 资产登记；采购/配置记录；硬件 LCA 来源；调度器/利用率日志；签核截断工作表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_electricity_mj` | 两个电力行 | `electricity_MJ = collected_kWh × 3.6` | 经对账的纳入范围 kWh | 产品归一化前的 MJ | `gsf-sci-1-1` |
| `calc_shared_release_electricity` | 共享开发/构建基础设施 | `release_kWh = total_in_scope_kWh × represented_release_resource_time / total_in_scope_resource_time`；分子分母采用同一报告期和闲置容量规则 | 经对账电量；工作负载资源时间；版本身份 | 分配给所代表版本的 kWh | `gsf-sci-1-1` |
| `calc_hardware_embodied_share` | 每项已评估的支持硬件资产 | `allocated_hardware_burden_asset = TE_asset × (TiR_asset / EL_asset) × (RR_asset / ToR_asset)`；所有变量须采用同一已识别设备与时间基准。将每项重要资产作为单独的具体交换；对每项排除资产保留定量截断计算。 | 资产特定硬件 LCA 负荷；预留时间；预期寿命；预留资源；总资源；已披露截断值 | 分配给所代表版本的资产负荷及纳入决定 | `gsf-sci-1-1` |
| `calc_reference_normalization` | 所有版本与包装行 | `normalized_amount = included_amount / conforming_packaged_product_kg` | 纳入的行数量；经核实的合格输出质量 | 每 1 kg 参考产品的数量 |  |
| `calc_packaging_mass_balance` | 实体介质装配与包装 | 对每种材料计算 `consumed_input = issued_mass - genuine_unused_returns`，并与合格成品中的保留质量、单独实测的离场废物以及有记录的库存或测量调整对账。分别对已刻录光盘、纸盒和纸质说明书内页进行对账；批准前调查每项未解释残差。 | 已领用投入；真正未使用的退料；合格成品组件质量；已刻录光盘、纸板及纸质说明书内页废物；有记录的库存调整 | 材料特定包装物料平衡对账 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品名称、版本、发布标识、所声明应用功能、支持平台、许可范围、实体介质、包装清单，以及产品并非仅供下载的证据。 | 发布记录；产品规格；包装物料清单；CPC 适用性审查 |
| `dq_temporal_alignment` | 开发与包装记录 | 采用一个已披露的分摊期。将电力、工作负载、材料、废物和输出记录对齐至该期间；解释截断、版本重叠和迟后更正。 | 带日期的电表、账单、工作负载日志、生产批次与对账记录 |
| `dq_meter_and_mass_quality` | 电力、材料、产品与废物数量 | 保留每个数值的校准状态、抽样方法、单位换算、缺失数据处理和源记录谱系。 | 校准证书；抽样方案；换算工作表；异常日志 |
| `dq_supplier_specificity` | 电力、已刻录光盘、纸盒和纸质说明书内页 | 尽可能选择与地理范围、电压或技术、材料状态及供应商路线相符的上游数据集；披露代理数据。 | 供应商规格；数据集选择记录；代理理由 |
| `dq_hardware_boundary` | 支持基础设施 | 保留工作站、服务器、存储及网络设备的逐项筛查。将每项重要资产作为不同交换纳入；以定量截断计算记录每项排除。 | 资产登记；硬件 LCA 来源；分摊工作表；截断清单；数据集交换清单 |
| `dq_completeness` | 前景数据包 | 对两个必需过程和九个规定清单行，以及资产筛查识别的每项重要硬件交换进行对账。零值必须表示实测不存在；缺失与不适用必须保持区分。 | 完整性矩阵；过程负责人签核；质量、电量及硬件对账 |
| `dq_range_status` | 重要清单行 | 本候选 PCR 以实际前景记录为依据。不得将无来源的单个案例作为典型范围；在获得两个相互独立、边界兼容的原始来源或经审查的多期前景证据前，保留未解决范围证据需求。 | manifest 中未解决范围证据清单；证据审查记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity_and_route` | 产品适用性 | 若声明产品属于仅供下载、托管/SaaS、定制开发、计算机游戏、系统软件或其他排除的软件子类，则校验失败；核实实体成品配置与所涵盖功能。 | `un-cpc-3-0-47821`; `un-cpc-3-0-84342` |
| `validate_reference_flow` | 参考流 | 归一化后必须恰为 1 kg，并具有已确认的产品流 UUID、Mass 属性、kg 单位和全部必需限定信息。 |  |
| `validate_inventory_completeness` | 过程清单 | 必须包含两个过程部分和全部九个规定 row_id；每个路线适用行必须有数值、实测零或明确不适用状态。硬件评估中的每项重要设备均须作为单独附加交换出现。 |  |
| `validate_atomic_flows` | 清单身份 | 拒绝伞状公用工程、包装、硬件、废物或排放名称。每行只表示一个交换；在确认精确 state-code 100 身份前，`recorded_optical_disc_input` 和 `waste_recorded_optical_disc_output` 保持 UUID 为空。 |  |
| `validate_electricity_conversion` | 电力行 | 复算 kWh 至 MJ 的换算以及版本/输出归一化；每个所用电力数据集必须具有一个明确的电网地理范围和交付边界。 | `gsf-sci-1-1` |
| `validate_mass_balance` | 实体介质装配与包装 | 分别检查光盘、纸盒和内页的领用质量减去真正未使用的退料质量，能否在已披露不确定度内等于合格成品组件保留质量加实测离场材料废物及有记录的库存或测量调整。已消耗不合格品必须保留在投入中；未解释残差构成发现项。 |  |
| `validate_hardware_boundary` | 支持基础设施 | 要求逐项资产重要性筛查。若遗漏重要资产、将不同设备合并于同一行、排除项缺少定量截断计算或将缺失数据视为零，则校验失败。 | `gsf-sci-1-1` |
| `validate_allocation` | 共享基础设施与版本负荷 | 复算分摊分母；排除仅供下载单元及其他产品；要求报告期、资源指标和闲置容量规则一致。 | `gsf-sci-1-1`; `un-cpc-3-0-84342` |
| `validate_no_duplicate_background_emissions` | 外购电力与材料 | 除非为独立计量的前景直接排放，否则拒绝从上游电力或材料数据集中复制直接基本排放。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 以生产者门口 1 kg 产品为基准的实体成品应用软件前景生产数据集 |
| downstream_use | 在完成方法学和翻译审查，并解决或明确接受开放证据需求后，可用作 `secondary_dataset`；`background_dataset` |
| allowed_use | 实体成品通用商务生产力及所涵盖家庭用途应用的生产者门口 LCA；仅当功能、版本范围、实体介质、包装配置、边界、分摊期和地理范围等效时方可比较 |
| excluded_use | 仅供下载的软件、SaaS 或云服务、定制开发、计算机游戏、系统/网络/数据库/开发工具软件、无单独模块的使用阶段声明，以及应用功能或质量不同时仅按 kg 进行的比较 |
| required_metadata | 产品与版本标识；所涵盖功能；支持平台；许可范围；介质与包装配置；地理范围；报告期；所纳入基础设施；逐项硬件筛查；输出质量；分摊方法与分母；电力数据集；供应商材料数据集；排除项及截断计算；代理；未解决 UUID 与范围证据状态 |
| required_quality_disclosure | 原始数据占比；电表与秤覆盖率；时间与场址覆盖；版本分摊方法；硬件资产身份、纳入交换及定量截断；材料特定物料平衡残差；缺失数据与代理处理；是否排除可选模块 |
| update_trigger | 新的主要版本或功能实质变化；介质或包装变化；构建/测试或包装技术变化；场址、电网、供应商或分摊方法变化；解决开放光盘废物 UUID 或定量范围的新证据；或 CPC 边界修订 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `un-cpc-3-0-structure-2025` | official_guidance | 联合国统计司，《产品总分类（CPC）第 3.0 版结构》，2025-06-30，第 47821 行。https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv | 正式分类身份与名称 |
| `un-cpc-3-0-47821` | official_guidance | 联合国统计司，CPC 第 3.0 版分类详情，代码 47821。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/47821（检索于 2026-09-11） | 纳入的应用功能、已出版软件产品边界与分类层级 |
| `un-cpc-3-0-84342` | official_guidance | 联合国统计司，CPC 第 3.0 版分类详情，代码 84342。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/84342（检索于 2026-09-11） | 反证边界：应用软件下载属于单独子类 |
| `gsf-sci-1-1` | standard | Green Software Foundation，《Software Carbon Intensity (SCI) Specification》，1.1.0 版。https://sci.greensoftware.foundation/ | 软件系统边界、电力计量、功能缩放、共享资源与硬件隐含负荷分摊、报告和数据粒度 |
