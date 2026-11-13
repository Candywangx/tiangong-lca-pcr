---
pcr_id: pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.refrigerated-storage-services
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
---

# 冷藏仓储服务

## 1. 范围与适用性

本规则适用于在仓库验收入库至放行出库期间，使已识别批次货物保持明确声明的冷藏或冷冻状态的仓储服务。包括合同范围内的收货检查、上架、温湿度控制、储存、归属的库内搬运、拣选和备货。货物可以按约定储存温度入库，也可以在仓储合同内接受相伴速冻。相伴速冻须纳入实际公用工程、制冷剂衡算、支持和设备份额；与独立出售的专门食品冻结区分，后者不属本类别。[来源：`un-cpc-refrigerated`]货物及原有包装是受托保管物，损失必须与服务产出分别记录。冷藏仓储参考流不代表被储货物生产或货运活动。

排除常温仓储、散装液体或气体储罐服务、货运、独立货物装卸、食品制造、零售展示和家用制冷。合同内附带搬运只计一次；独立采购的装卸服务不得重复计入。声明实际货品状态、温度区间、容量利用率和时间覆盖。仅比较等效储存条件，不设通用安全温度或能耗强度。FAO肉类专用指导支持操作条件和记录的重要性，不构成所有货物的通用条件。[来源：`fao-cold-equipment`；`fao-cold-operation`]

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.distributive-trade-services-accommodation-food-and-beverage-serving-ser-18ff339a.supporting-transport-services.refrigerated-storage-services |
| classification_refs | CPC 3.0 67210 |
| covered_products | 已识别冷藏或冷冻批次的合同仓储服务，包括实际发生的相伴速冻以及合同内组成操作 |
| excluded_products | 常温仓储；散装储罐服务；独立销售的初次冷却、冻结或解冻；货运；独立装卸；货物生产 |
| representative_product | 在一种声明条件分层下，已验收冷藏仓储服务的一吨日 |
| production_route | 验收批次 → 合同内相伴速冻（适用时） → 上架 → 保持受监控条件 → 提取并放行 |
| market_state | 具有批次身份、约定条件和停留时间记录的已交付冷藏保管服务 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 使声明批次保持约定的冷藏或冷冻状态 |
| How much | 1吨日，按实际净储存质量及已历储存时间计算 |
| How well | 声明货物、状态、温度区间、相关湿度、监控覆盖以及有记录的验收和偏离判据 |
| How long or cycle | 一吨货物等效停留24小时，归属的收发货操作按实际停留时间分摊 |
| reference_flow_link | `storage_service` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 冷藏仓储服务，声明条件 |
| 参考流属性 | 质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` |
| 参考单位组 | 质量*时间 `59f191d6-5dd3-4553-af88-1a32accfe308` |
| 参考单位 | tday |
| 必需限定信息 | 仓库及库房；批次及货物；冷藏或冷冻状态；不含包装的净质量；验收温度与湿度限值；温度历史和超限；实际入出库时间戳；收发货边界；报告期；占用率；相伴速冻纳入状态及批次状态、温度和能源；制冷型式及每种制冷剂；供电地区与电压；供应商和自有资产覆盖 |

此处tday表示一吨日，即1,000 kg储存24小时。本地文字标记tday明确为归档单位组正式单位t*d的别名，不是新注册单位。实际数据须以正式单位t*d导出：1 tday = 1 t*d；按单位组记录的换算转为其参考单位kg*a。各批次净质量以吨计，与其以日计的实际停留时间积分，得到总交付服务S；仅对等效条件分层求和。不足整日按实际时间戳计算。分配至该分层的清单分子数量除以其正值S。空库保温和制冷仍是须分配至交付服务的负荷，不能形成虚构的占用吨日。温度失控和货损批次须单独记录并披露；失败服务不能加入合格产出。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `storage_basis` | 参考产品 | 质量乘时间 | tday | 用cp_service取得批次净质量和时间戳；1 tday = 1吨 × 1日；1日 = 24小时。未经实测换算不得使用托盘日或名义库容替代。 |
| `condition_strata` | 参考产品 | 质量×时间 | tday | 不同货物状态、温度区间及是否包含相伴速冻分别分层；活动分配及采集须保持相同分母。 |
| `refrigerant_balance` | ammonia_air; r134a_air; co2_air | 质量 | kg | 用cp_refrigerant逐物种核对制冷剂；补充量本身不能证明大气排放。 |
| `asset_basis` | 资产分配的归一化分母 | 质量×时间 | tday | 用cp_assets记录有凭据的寿命期服务量和实际利用率；财务折旧不等于物理使用寿命。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 按已记录入库状态验收的批次；实际发生时由相伴速冻建立声明储存状态；已安装仓库和制冷设备，其上游制造份额须披露 |
| starting_condition_role | foreground_start |
| product_classification_scope | 冷藏保管服务及合同内库内搬运；不含货物生产或货运 |
| recursive_input_rule | 独立采购的冷藏仓储阶段以其经核验的上游服务清单进入；识别串联阶段并各计一次。同设施内部转移不产生另一次完整仓储服务。 |
| upstream_dataset_requirement | 供电特定电力；实际水、材料及制冷剂生产；废水和废物处理；已分配资产制造和寿命终结 |
| disclosure | 初始状态；服务条件分层；库内搬运截止点；占用率；损失；自有和供应商边界；资产寿命；缺失上游数据 |

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `boundary_service` | 纳入验收入库至放行出库的归属制冷及库房支持；相伴速冻作为独立计量操作纳入，记录批次质量及进出状态，其能源和支持负荷归属于相同批次仓储服务；冻结本身不产生额外储存吨日。独立出售的专门食品冻结不属本PCR。 |  |
| `boundary_assets` | 筛查建筑、制冷装置、托盘、维护和寿命终结负荷；分配实际上游份额并披露缺口。资产组件不得同时包含于供应商总体数据和独立行中。 |  |
| `boundary_losses` | 逐批次及原因记录缺失或损坏货物；分别披露保管损失及处理。研究边界包括上游替代生产时，须明确其独立产品数据集；不得将损失货物改称排放或仓储产出。 |  |
| `boundary_species` | 筛查每种实际制冷剂及释放。示例物种卡有适用条件；其他实际制冷剂及混合工质释放的每个基本组分均须增加化学身份明确的独立卡。 | epa-refrigerant-balance |

## 6. 过程清单结构

下列卡均是原子交换，仅在有记录证明实际存在时适用。计量全部相关冷库负荷；实际使用的柴油备用机、其他清洁剂、其他制冷剂、废弃货物和新增资产均须有独立具体行及采集记录。没有示例卡不能成为省略实际交换的理由。不默认存在燃料使用、制冷剂释放或处理抵扣。

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| cold_store | 收货、制冷、保管及放行批次 | required | 实际合同与库房配置；各行适用条件有效 | foreground_production | 每参考流 |

### 过程：收货、制冷、保管及放行批次（`cold_store`）

#### 输入

##### 产品流

###### 交流电 (`electricity`)

计量保温制冷、风机、除霜、照明、控制和电动库内搬运的归属电量；排除另列的相伴速冻电力，共享负荷按实测热负荷或服务驱动因素划分。

- 选定流：交流电
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 相伴速冻电力（`freezing_electricity`）

仅在仓储服务内实际进行相伴速冻时适用。使用独立速冻机电表及实际批次、温度历史，此数量不得再计入保温制冷电力卡。每批冻结作业仅一次分配至实际入库货物，再归属其正值交付仓储服务。独立专门冻结合同不属本PCR。

保温制冷电力不含另列相伴速冻电力；须以独立计量及账单核对避免重复。

- 选定流：交流电力
- 流属性/单位：能量 / kWh
- 数量规则：每参考流归属的实测交换数量；cp_freezing。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_freezing`
- 来源：`un-cpc-refrigerated`

###### 自来水 (`water`)

实际水冷冷凝或清洁时纳入；记录新鲜补充水，不把循环泵流量当作取水。

- 选定流：自来水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_utilities。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_utilities`
- 来源：

###### 无水氨 (`ammonia_input`)

仅适用于氨制冷回路：记录实际购买和充注转移，区分初次充注、补充量以及设备供应商已覆盖的充注量。校正库存与退回后分配实际消耗；留待未来期间的购入库存不是本期消耗。

- 选定流：无水氨
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 1,1,1,2-四氟乙烷制冷剂R134a (`r134a_input`)

仅适用于已确认的R134a回路；不得将此纯制冷剂代替混合工质或其他氢氟碳化物。购入量须按储存库存和退回量校正，再分配投入消耗。

- 选定流：1,1,1,2-四氟乙烷制冷剂R134a
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 二氧化碳制冷剂R744 (`co2_input`)

仅适用于R744回路；保留供应来源及实际充注库存。购入量须按储存库存和退回量校正，再分配投入消耗。

- 选定流：二氧化碳制冷剂R744
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 多元醇酯制冷压缩机润滑油 (`lubricant`)

仅在实际使用此润滑油化学类型时纳入；其他润滑油须另列具体交换。

- 选定流：多元醇酯制冷压缩机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 氢氧化钠水溶液，质量分数30% (`sodium_hydroxide`)

仅在实际采用此浓度清洁剂时纳入；分别记录配方质量及有效浓度。

- 选定流：氢氧化钠水溶液，质量分数30%
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

###### 木质仓储托盘 (`pallet_share`)

仅适用于自有托盘：按有凭据的寿命期使用次数分摊制造和维修；供应商服务已含托盘时不得重复计入。

- 选定流：木质仓储托盘
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 工业螺杆制冷压缩机 (`compressor_share`)

仅适用于已安装的螺杆压缩机；按有记录的寿命期服务量分摊上游制造。其他设备型式另列独立行。

- 选定流：工业螺杆制冷压缩机
- 流属性/单位：件数 / item
- 数量规则：每参考流归属的实测交换数量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 保温冷藏仓库建筑 (`building_share`)

分摊仓库建筑上游数据一次，并声明保温层边界；已在建筑数据集内的保温层不得再重复计入。

- 选定流：保温冷藏仓库建筑
- 流属性/单位：面积 / m2
- 数量规则：每参考流归属的实测交换数量；cp_assets。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_assets`
- 来源：

###### 低密度聚乙烯拉伸缠绕膜 (`ldpe_film`)

仅在仓储服务实际提供托盘缠绕包装时纳入；客户原有入库包装是受托保管物，不能视为本服务新生产的薄膜。

- 选定流：低密度聚乙烯拉伸缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_materials。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_materials`
- 来源：

#### 输出

##### 产品流

###### 冷藏仓储服务（`storage_service`）

符合cp_service中同一条件分层及保管边界的一单位合格服务。

- 选定流：冷藏仓储服务，声明条件
- 流属性/单位：质量*时间 `b3f0f892-c5a3-4c66-a432-c09e3d1e9bd6` / tday
- 数量规则：1 tday
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_service`
- 来源：

##### 废物流

###### 冷库清洁废水 (`cleaning_wastewater`)

记录送往明确处理去向的实际废水；须明确组成和处理负荷，不预设处理抵扣。

- 选定流：冷库清洁废水
- 流属性/单位：体积 / m3
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废多元醇酯制冷压缩机润滑油 (`spent_lubricant`)

实际更换润滑油时纳入；采集危险性分类和接收方凭据。

- 选定流：废多元醇酯制冷压缩机润滑油
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废低密度聚乙烯拉伸缠绕膜 (`waste_ldpe`)

本服务边界内实际产生废薄膜时纳入；按独立数据去向区分回收、焚烧和处置，不自动抵扣原生生产。

- 选定流：废低密度聚乙烯拉伸缠绕膜
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_waste。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

##### 基本流

###### 氨，排入空气 (`ammonia_air`)

仅记录核对后的氨向空气损失；不得将充注购买量等同泄漏量。

- 选定流：氨，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 1,1,1,2-四氟乙烷，排入空气 (`r134a_air`)

仅记录核对后的R134a空气排放，以物质质量记录，再由生命周期影响评价表征。

- 选定流：1,1,1,2-四氟乙烷，排入空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

###### 二氧化碳，制冷剂释放至空气 (`co2_air`)

仅记录实际R744损失；选定基本流身份前须披露化石或生物源属性及接收环境。

- 选定流：二氧化碳，制冷剂释放至空气
- 流属性/单位：质量 / kg
- 数量规则：每参考流归属的实测交换数量；cp_refrigerant。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_refrigerant`
- 来源：`epa-refrigerant-balance`

## 7. 分配与共产品处理

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `allocation_meters` | 优先按库房和回路分表计量；独立销售时细分收货、储存及发货。共享公用工程须记录实测热负荷和操作驱动因素；无因果证明时不得仅按收入或质量分配冷藏与常温业务。全部分配份额与设施总量核对。 |  |
| `allocation_service` | 同一等效条件分层内，以归属清单除以实际交付吨日；共享空库及支持负荷在同一报告期透明分配。不同温区须独立计量或具有工程依据的分配份额。 |  |
| `allocation_assets` | 按实测资产利用率及有依据的寿命期交付服务分配制造、维护和寿命终结份额；托盘使用次数或建筑面积的独立分母须在映射至吨日前保留。不得臆造寿命或复制财务折旧期限。 | fao-cold-operation |
| `allocation_recovery` | 制冷剂实际转往回收的量在衡算中分别报告。回收库存不是空气排放，也不自动成为负排放或原生生产抵扣。 | epa-refrigerant-balance |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_service | cold_store | storage_service | 仓储日志 | 批次；货物；状态；净质量；入出库时间戳；温区；异常；内部转移 | 核对经校准净重记录、保管时间戳及条件监控历史；质量或条件变化时拆分区间。 | tday | 每批次及条件区间 | 完整声明报告期 | 明确库房及等效条件分层 | 每参考流 | 衡器校准；时间戳核查；温度记录仪校准；合同验收 |
| cp_freezing | cold_store | freezing_electricity | 速冻批次记录 | 批次与货物ID；批次净质量；进出温度和状态；速冻电表期初期末；速冻时长；分配份额；关联入库批次 | 对实际速冻操作独立计量；将账单及冻结批次质量与入库货物核对，记录实际冻结验收，防止与保温制冷重复。相伴速冻回路纳入逐物种制冷剂衡算及资产账。 | kWh | 每速冻批次 | 与cp_service相同期间及批次链 | 相伴速冻机及实际入库批次 | 每参考流 | 电表校准；批次日志；温度记录；仓储关联及公用工程核对 |
| cp_utilities | cold_store | electricity; water | 计量记录 | 表号；期初期末读数；库房；回路；操作时段；分配驱动因素；供应规格 | 采用校准分表差值；与场址发票及共享负荷份额核对；区分新鲜水和循环流量。 | kWh; m3 | 计量区间 | 与cp_service同期间 | 同库房及条件分层 | 每参考流 | 仪表校准；发票；计量覆盖图；分配核对 |
| cp_refrigerant | cold_store | ammonia_input; r134a_input; co2_input; ammonia_air; r134a_air; co2_air | 质量衡算 | 物种；气瓶期初期末库存；取得量；离场转移；回收；设备期初期末充注量；维护事件；实际接收环境 | 称量或核验各物种库存及设备充注量；核对购买、承包商补充、回收和充注变化。承包商转移与场址库存领用不得重复计算。 | kg | 每次转移及期初期末 | 与cp_service同期间 | 明确的保温/速冻制冷回路及所分配条件分层 | 每参考流 | 气瓶称量；维护记录；回收凭证；衡算核对 |
| cp_materials | cold_store | lubricant; sodium_hydroxide; ldpe_film | 材料记录 | 化学品或聚合物身份；浓度；领用量；退回；期初期末库存；批次分配 | 逐种材料核对仓储领用、退回及物理消耗；保留浓度和供应商证据。 | kg | 每次领用及期间衡算 | 与cp_service同期间 | 仓储合同操作 | 每参考流 | 库存卡；发票；配方规格 |
| cp_assets | cold_store | pallet_share; compressor_share; building_share | 资产服务记录 | 资产编号；上游数据集边界；制造负荷；实测利用率；安装及退役；维护；寿命期服务证据；分配份额 | 逐资产关联制造及处置清单；记录实际活动和有凭据的寿命期服务；寿命不确定情景单独审查。 | item; m2 | 资产变更及年度核对 | 有凭据的寿命期及报告期 | 归属库房的自有资产 | 每参考流 | 资产台账；维护日志；供应商清单；寿命证据 |
| cp_waste | cold_store | cleaning_wastewater; spent_lubricant; waste_ldpe | 废物转移记录 | 具体废物；数量；接收过程；组成；日期；处理边界；批次或场址份额 | 逐种计量废物并核对转移联单与实际处理；处理只计一次。 | kg; m3 | 每次转移 | 与cp_service同期间 | 仓储操作及明确接收方 | 每参考流 | 转移联单；处理合同；必要时的组成化验 |

### 计算规则

| rule_id | 适用对象 | 公式或规则 | 输入 | 输出 | source_ids |
| --- | --- | --- | --- | --- | --- |
| service_integral | storage_service | S = 每个条件不变区间的净批次吨数乘停留日数之和；实际小时数除以24得到日数。交付参考产出为1 tday。 | cp_service | 交付服务S |  |
| inventory_attribution | 所有清单行 | 逐交换将实测分子分配至声明条件分层，再除以其正值交付服务S。保留分子单位及统一吨日分母。 | cp_service; cp_utilities; cp_materials; cp_waste | 每参考流交换数量 |  |
| species_loss | ammonia_air; r134a_air; co2_air | 逐物种释放量 = 期初储存库存 + 取得量 + 期初设备充注量 - 期末储存库存 - 离场转移量 - 期末设备充注量。回收制冷剂只在期末库存或离场转移量中计一次；负值或不闭合衡算须调查，不得直接截零。归属释放量除以同一S。 | cp_refrigerant; cp_service | 每参考流排入空气的物种质量 | epa-refrigerant-balance |
| asset_attribution | pallet_share; compressor_share; building_share | 用有记录的服务利用率和寿命期交付服务分配资产制造、维护及处置清单，再分配声明条件份额并除以正值S。说明不确定性，防止总成与组件负荷重复。 | cp_assets; cp_service | 每参考流资产数量份额 |  |

### 数据质量要求

| requirement_id | 适用对象 | 要求 | 证据 |
| --- | --- | --- | --- |
| dq_conditions | storage_service | 完整批次质量与时间及校准条件历史；声明失效、缺失区间和货物损失，不得默认为合格产出。 | cp_service |
| dq_closure | 所有清单行 | 按相同期间核对购入公用工程、材料库存、废物去向、设备份额及交付服务；不预设默认范围。 | cp_utilities; cp_materials; cp_assets; cp_waste |
| dq_refrigerant | ammonia_air; r134a_air; co2_air | 逐实际物种核对充注及回收变化；区分观测到零释放与数据缺失；混合工质组分须有独立基本流身份。 | cp_refrigerant; epa-refrigerant-balance |
| dq_identity | 所有清单行 | 数据库关联使用前核定流、流属性及单位组身份；语义明确的原子名称不能证明UUID已确认。 | 供应商规格；身份直读核验 |

## 9. 校验规则

| rule_id | 规则 | source_ids |
| --- | --- | --- |
| `validate_reference` | 要求唯一关联storage_service产出、1 tday、正值交付服务及全部条件和保管限定信息；吨公里、托盘数量和名义库容不能替代实测吨日。 |  |
| `validate_balance` | 每种实际化学品、材料、废物和空气排放物种须为独立行；接受释放量之前核对制冷剂库存、设备充注、取得、回收及离场转移。 | epa-refrigerant-balance |
| `validate_period` | 要求活动及公用工程期间匹配、份额之和与实测总量一致、寿命期资产分配有依据并明确上游缺口；仅有仪表数据的清单不能声称完整摇篮到大门覆盖。 |  |
| `validate_double_count` | 拒绝已经在另一纳入数据集中覆盖的初次冷却、外部装卸、客户包装、供应商资产或货运负荷重复。 |  |
| `validate_unit_export` | tday仅为质量×时间正式单位t*d的本地显示别名：1 tday = 1 t*d。导出时使用正式单位t*d，保持同一物理数量和参考分母。若接收系统要求单位组参考单位kg*a，须依据核实的单位组换算关系仅换算一次并保留系数及来源；不得将未换算数值直接改标为kg*a，也不得对已按参考流归一化的数量再次归一化。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 单元过程冷藏仓储服务清单 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 等效货品状态、温湿度区间及保管和资产边界，并披露分配及期间 |
| excluded_use | 货物生产；货运；独立销售的初次冻结；通用冷链系数；温度或占用条件不兼容时直接套用 |
| required_metadata | 全部参考限定信息；交付S；计量和份额；制冷剂身份及衡算；寿命期资产；废物去向；采集和计算来源 |
| required_quality_disclosure | UUID缺口；上游覆盖；时间及条件完整性；异常和损失；分配及资产寿命不确定性 |
| update_trigger | 库房或货品状态、温区、制冷剂、供电、占用率、资产配置、合同边界或重要数据质量发生变化 |

## 11. 数据源

| 来源编号 | 类型 | 参考文献 | 用途 |
| --- | --- | --- | --- |
| un-cpc-refrigerated | official_guidance | UNSD CPC 3.0 67210分类说明。https://unstats.un.org/unsd/classifications/Econ/Structure/Detail/EN/2100/67210 | 纳入与仓储相伴的速冻；独立承包的专门食品冻结不属该子类。仅支持分类范围，不提供能耗或温度因子。 |
| fao-cold-operation | official_guidance | FAO，Manual on meat cold store operation and management，Costs and investment / Storage and handling administration。https://www.fao.org/4/t0098e/t0098e06.htm | 冷库活动及能源记录；区分财务折旧与使用寿命。适用背景为肉类；未采用数值成本、寿命或能耗系数。 |
| fao-cold-equipment | official_guidance | FAO，Manual on meat cold store operation and management，Refrigeration equipment。https://www.fao.org/4/t0098e/T0098E04.htm | 温度、湿度及空气循环监测的相关性；未将肉类温度条件强加于其他货物。 |
| epa-refrigerant-balance | official_guidance | 美国环保署，Direct Fugitive Emissions from Refrigeration, Air Conditioning, Fire Suppression, and Industrial Gases，第2.3节，公式4–5。https://www.epa.gov/sites/default/files/2020-12/documents/fugitiveemissions.pdf | 逐物种制冷剂物料衡算逻辑；不构成产品生命周期评价边界、泄漏系数、全球变暖潜势或法规适用性声明。 |
