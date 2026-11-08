---
pcr_id: pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oil-free-compressed-air
language: zh-CN
sync_with: pcr.en-US.md
status: candidate
content_maturity: authored_methodology
---

# 风冷螺杆站无油压缩空气

## 1. 范围与适用性

本方法适用于以环境空气为原料、电驱干式无油螺杆压缩、以环境空气散热，并经中冷／后冷及实际分水后，在压缩机站交付的工业压缩空气。压缩腔不注入润滑油或水；齿轮和轴承可有隔离润滑回路。它是一个实际气体混合物产品，不是纯氮、纯氧或多种无机化学品的集合。供货压力、湿度、颗粒物和油含量由实际验收规定；“无油”标签不证明零水分、零颗粒物或吸入空气无污染。

排除润滑剂或水注入式压缩、液体冷却作为主要外部冷源、独立干燥／吸附处理、冷冻机、充瓶、高压增压、呼吸／医用／仪表空气认证、前景压缩机设备制造以及交付后厂区管网和最终用气。储气罐若在声明站边界内则计入；交付点与配置不得任意缩小以省略已知负荷。需要额外处理的产品不可把本未干燥中间物冒充最终空气。

官方ENE 3.7支持按完整站系统、压力／纯度和需求计量；DOE支持区分无油螺杆的隔离润滑和冷凝分水，以及同时测流量、压力和电量。Atlas原件的风冷图支持实际路线，但相邻说明含可选干燥器和重复水流文字：使用实际型号的原厂回路图核验，不由该图推定无液体补充。三份资料的历史统计、案例、额定功率和节能比例均不成为默认清单数量。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.other-transportable-goods-except-metal-products-machinery-and-equipment.basic-chemicals.oil-free-compressed-air |
| classification_refs | CPC 3.0 34250; narrower product and route boundary |
| covered_products | 上述路线的站出口未干燥工业压缩空气 |
| excluded_products | 其他化学品、汞物种、混汞齐、纯气体及上述排除路线 |
| representative_product | 经后冷分水的压缩空气，按实测供货状态 |
| production_route | 进气过滤 → 干式无油螺杆压缩／中冷 → 后冷分水 → 站内储气（实际有时） → 交付；隔离润滑和维护伴随 |
| market_state | 站接口的气体混合物；声明压力、温度、水分和质量 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在产品核算验收关口核算满足声明站供压力/质量的新首次验收工业压缩空气，并披露范围内实际验收后去向及服务 |
| How much | 在唯一声明实际站供参考状态P_ref_abs/T_ref_K/蒸气-组成/Z_ref下，新首次验收压缩空气湿混合物1 m3。Q为唯一实测真实首次验收事件体积之和，后续泄漏或其他去向不撤销验收。该生产核算参考不是额外外部实物输出，也不声称全部验收气均已发运 |
| How well | 相同声明的出口边界、干式无油螺杆路线、压力、温度、湿度／压力露点、颗粒和油验收要求；非呼吸用途且未经独立干燥。组成／质量不同的工况应分开建数据集，除非实测完整核对的换算能证明等价 |
| How long or cycle | 同一代表性生产期间，涵盖加载／卸载、启停、待机、未验收运行和维护；以往已验收库存保留原批次及原分母 |
| reference_flow_link | `delivered_air` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825` |
| 参考流属性 | 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` |
| 参考单位组 | 体积 `93a60a57-a3c8-12da-a746-0800200c9a66` |
| 参考单位 | m3 |
| 必需限定信息 | 末级冷却/分水及检测后的站内产品核算验收关口; 外部实物边界及所纳入储气罐/管存与实际首验点; 型号和干式无油配置; 实际冷却/冷却剂回路且无干燥器; 唯一实际站供参考状态P_ref_abs/T_ref_K/蒸气-组成/Z_ref; 原始P_abs及表压转绝压关系; 原始T_K; RH/压力露点和水蒸气比例; 气体组成及经验证密度/状态方程/Z; 校准及原始计量约定/补偿; 供应数量约定及验证的同状态换算; 实际颗粒/油验收限值和检测; 共同期间及带实测体积增量的唯一首次验收事件ID; 由事件锁定的权威正Q; 同基准互斥净D_new/F_new_close/L_new去向桥并涵盖范围内全部验收后流出; 原料/在制/新旧验收气和液体期初末库存; 退回/循环/返工谱系且不重复验收计数; 完整未分配Qt_i实物和能量账; 逐交换Qb_i实际新批次归属及未嵌入供应的原料/在制继承需求; 旧验收库存服务沿用原Q; 资产/供应边界及因果服务份额/寿命证据; 电力地域/电压 |

构建数据包时必须声明全部限定信息。Volume/m3身份不规定自由空气、标准状态或管内体积；流身份成立与现场／背景数量基准兼容是两项独立审查。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `volume_basis` | 参考产品 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | Q = sum_e(v_e)，来自cp_delivery的唯一真实首次验收事件；各v_e为互不重叠的实测新增验收气量，并换算至唯一声明参考状态。保留事件ID/谱系和验收后锁定的Q，包含后来泄漏/泄压/提取/降级/返工的气体。按同期间同范围互斥实际净去向核对Q = D_new + F_new_close + L_new，即净外发、期末验收库存和其余全部净去向。仅有证据L_new = 0时可采用D_new + F_new_close简式桥。退回/毛循环/复检及同份气体重复验收不新增事件，未验收原料/在制及期初已验收气不新增Q。真实计量/身份错误须留可追溯事件历史修正，不因后来损失撤销验收。去向基准不相容时保留桥接未解决，不另算Q。归一须Q为正，Q零/未知时保留原记录及未知归一值。不设默认状态/密度/Z或重复补偿。 |
| `mass_closure` | ambient_air, delivered_air, vented_air, condensate, cooling_water, cooling_waste | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 采用cp_air、cp_delivery和cp_wastes，按各气流自身P_abs、T、RH、组成和Z验证密度，将各实测体积增量换成湿质量。delivered_air仍以Volume为参考；质量只作分析账，不新增同一产品交换。用实测组成及同一湿／干质量基准核对氧、氮、其他干组分和气／液态水。冷凝液来自进气水分并按实际排水点记录。组分分析是空气总量的拆分，不再作为独立空气输入／输出相加。保留气／液库存变化和不确定性。 |
| `electric_energy` | electricity_mv, electricity_lv | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留原件净热值属性，电表kWh按单位组1 kWh = 3.6 MJ换算；不把它解释为热交付。包括风机、控制器和实际辅助系统电量；不以额定kW乘不分状态小时替代实测电量。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际环境进气及声明接口的供电、补充材料和设备背景 |
| starting_condition_role | 前景站运行入口；上游供给另行链接 |
| product_classification_scope | CPC34250的压缩空气窄子集；不推导其他化学品工艺 |
| recursive_input_rule | 本路线不购买同类压缩空气作为压缩原料；实际增压或购买空气的配置超出本边界，不能无限递归拆解 |
| upstream_dataset_requirement | 每项供货需真实地理／时间／技术、交付状态、属性单位与边界匹配；废物接收需实际处理背景，不由UUID自动建立 |
| disclosure | 交付接口、设备所含组件／初装液、实际冷却液、库存、缺测、异常和所有边界扩展 |

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `station_complete` | compression-station | 将过滤、压缩、中冷、后冷、分水、实际储气、排水、控制、隔离润滑和维护聚合为一个前景单元，保留各阶段独立计量。内部气体交接两端同量，不再计一个同UUID成品。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `boundary_fates` | all waste outputs | 按实际接收方区分送处理废物与直接空气／水体排放。覆盖站内实际空气出口；不得凭“无油”省略已知泄漏。实际直接液体排入水体或新物种排放时，必须新增并核验具体介质／物种原子行后才称清单完整。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `route_configuration` | compression-station | 核验原厂型号回路与实际改装，禁止把带干燥器或水注入配置直接当成本范围。外部循环水、乙二醇冷却液或其他配方若实际使用，补充相应单一供货／废物行并审查适用边界，不作零量假设。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `asset_material_completeness` | compression-station | 设备制造不在前景加工内，但可归属服务负荷经背景保留。实际包装、密封件、润滑油、初装液、更换件和移除设备分别按具体实物身份建账，包括退回／回用／库存；核对背景已含组件，质量及负荷均不重复计。 | `ilcd-general-guide`, `doe-compressed-air` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `compression-station` | 无油风冷螺杆压缩空气站 | required | 实际声明路线与冷却／分水后出口 | 前景生产 | 声明实际验收出口状态下1 m3 |

### 过程：无油风冷螺杆压缩空气站（`compression-station`）

#### 输入

##### 产品流

###### 交流电（`electricity_mv`）

该UUID限定CN中国用户侧1–35千伏电网平均消费组合。仅用于已核实兼容的中国站边界供电；其他地理或供电组合须选其已验证的独立电力身份。若电动机在下游，应包括可归属变压损失；同一电量不得再计为低压输入。

- 选定流: 交流电 `3d76981f-964a-4865-b588-0e067a2a1163`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_energy与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 交流电（`electricity_lv`）

该UUID限定CN中国用户侧<1千伏电网平均消费组合。仅用于已核实兼容的中国站边界供电；其他地理或供电组合须选其已验证的独立电力身份。按实际供电接口使用；本行与electricity_mv对同一供电是替代接口，不是可重复相加的表示。

- 选定流: 交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位: 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 单位组: 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_energy与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_energy`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 压缩机轴承与齿轮润滑油（`gear_lubricant`）

一种实际供货润滑油配方，声明SKU、基础液、添加剂及黏度。其用于与压缩腔隔离的轴承和齿轮；无油压缩不等于设备不使用润滑剂。记录更换与补充，排除内部循环及设备背景已含的初装量；不指定石油基或PAO配方。

- 选定流: 压缩机轴承与齿轮润滑油
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_materials与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 压缩机进气空气滤芯（`inlet_filter`）

一个实际更换的进气空气滤芯；仅在作为同一供货件时包含一体壳体。由实际零件取得净质量和滤材组成。内燃机过滤器或冷却液油雾滤芯不能替代。

- 选定流: 压缩机进气空气滤芯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_materials与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 压缩机润滑油滤芯（`oil_filter`）

一个隔离齿轮润滑回路中实际更换的滤芯；零件、滤材、干净质量和更换周期与进气滤芯分别记录。

- 选定流: 压缩机润滑油滤芯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_materials与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 空气泵或真空泵，空气或其他气体压缩机（`compressor_asset`）

命名计算规则asset_service明确适用于compressor_asset和receiver_asset，并由cp_assets关联cp_delivery执行。期间产品核算分子S_asset是归属新验收生产的实际分配制造／服务暴露供应需求，单位kg，包含可追溯在制继承服务及本期新增归属服务各一次；旧成品服务仍归原批次。它不是气站消耗的设备实物质量。数量S_asset / Q与其他输入一样仅按期间归一化一次。完整实测设备净质量×因果服务份额关系保留于asset_service，不表示设备台数转每千克产品。完整设备进入／移除／退回／回用和库存另存。

该广义身份仅定位一台实际制造的无油风冷干式螺杆机组，不表示混合机械。声明型号、设备净质量，以及电动机、中冷器、后冷器、控制器、风机和初装液是否已含。按asset_service中已证明的物理服务因果及实际服役／寿命依据归属设备隐含负荷；不假定单机质量或寿命。

- 选定流: 空气泵或真空泵，空气或其他气体压缩机 `7c9988b6-d0cf-4a08-801a-097d31f374d7`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: S_asset / Q；S_asset为cp_assets及cp_cohorts采集核对的期间新验收产品设备供应分子，单位kg；Q为cp_delivery相同的正验收m3；只除一次，不表示设备实物质量消耗
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assets`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 钢制压缩空气储气罐（`receiver_asset`）

命名计算规则asset_service明确适用于compressor_asset和receiver_asset，并由cp_assets关联cp_delivery执行。期间产品核算分子S_asset是归属新验收生产的实际分配制造／服务暴露供应需求，单位kg，包含可追溯在制继承服务及本期新增归属服务各一次；旧成品服务仍归原批次。它不是气站消耗的设备实物质量。数量S_asset / Q与其他输入一样仅按期间归一化一次。完整实测设备净质量×因果服务份额关系保留于asset_service，不表示设备台数转每千克产品。完整设备进入／移除／退回／回用和库存另存。

仅在站边界内实际有独立钢制储气罐时适用。记录制造罐体净质量、压力证明及背景边界；计入一次，不重复设备背景已含的储气罐。

- 选定流: 钢制压缩空气储气罐
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: S_asset / Q；S_asset为cp_assets及cp_cohorts采集核对的期间新验收产品设备供应分子，单位kg；Q为cp_delivery相同的正验收m3；只除一次，不表示设备实物质量消耗
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_assets`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 去离子水（`cooling_water`）

仅在实际辅助冷却回路有去离子水补充或维护充装记录时适用。风冷描述散热方式，并不证明液体清单为零。只计外加水，不计内部循环。乙二醇或缓蚀剂预混冷却液是另一配方流，完成数据集前必须建立其独立原子行和供货身份。

- 选定流: 去离子水 `4f197bf0-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_materials与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_materials`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### 废物流

本路线无此类跨界交换；实际存在时补充独立原子行并审核边界。

##### 基本流

###### 空气（`ambient_air`）

环境空气吸入：资源／来自空气的资源／来自空气的可再生材料资源。由校准流量、压力、温度、湿度、组成及经验证密度测得进气湿质量，保留损失和库存变化；不得用污染物排放或技术系统仪表空气记录替代。

- 选定流: 空气 `fe0acd60-3ddc-11dd-aaa4-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_air与cp_cohorts取得的该行实际新批次供应/资源需求，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

#### 输出

##### 产品流

###### 压缩的空气（`delivered_air`）

唯一产品核算参考是站内冷却/分水并通过实际验收测试后，在声明关口及站供状态新首次验收的未干燥压缩空气。湿混合物恰为1 m3，与定义Q的唯一真实事件量采用相同基准。它不是额外外部实物输出；实际净发运、期末库存和范围内其他验收后去向另行核对，不重复气体数量。水分为实测限定信息，不是另一产品，也不创建该参考UUID的中间副本。

- 选定流: 压缩的空气 `46e2b1e4-5a4e-4579-b6a2-65b03f9ce825`
- 流属性/单位: 体积 `93a60a56-a3c8-22da-a746-0800200c9a66` / m3
- 单位组: 单位组 `93a60a57-a3c8-12da-a746-0800200c9a66`
- 数量规则: 1 m3
- 数值来源模式: `fixed_value`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `method_formula`
- 采集协议: `cp_delivery`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### 废物流

###### 送废水处理的压缩空气分水器冷凝液（`condensate`）

由进气湿度形成并实际排出的液态冷凝水，取样查污染物。声明排水点、湿质量、组成和下水道或厂外接收方。其为送处理背景的未处理废物，不是水体基本流排放、产品水或可售副产品；特定处理后废水UUID不能证明本未处理物流身份。

- 选定流: 送废水处理的压缩空气分水器冷凝液
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_wastes与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastes`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 废润滑油（`spent_lubricant`）

采集实际废轴承／齿轮润滑油，声明基础液、污染和接收处理。广义废润滑油身份不证明再生、焚烧或处置背景；不得与分水器水性冷凝液合并。

- 选定流: 废润滑油 `55d93375-7f04-4166-b2a2-88ce929051a5`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_wastes与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastes`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 废压缩机进气空气滤芯（`spent_inlet_filter`）

一个带截留粉尘的废进气滤芯，称量废弃总质量并明确滤材和污染。仍留在滤芯中的粉尘不是颗粒物排放；实际有单独收集的松散粉尘时，另建一个原子废物流。

- 选定流: 废压缩机进气空气滤芯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_wastes与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastes`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 废压缩机润滑油滤芯（`spent_oil_filter`）

一个废润滑回路滤芯，记录残油及污染。明确沥出油是否另称，并避免在滤芯与spent_lubricant中重复计油。

- 选定流: 废压缩机润滑油滤芯
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_wastes与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastes`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 废辅助冷却回路水（`cooling_waste`）

仅在实际处置辅助回路水时适用；杂质、维护事件和处理接收方与空气冷凝液分别声明。乙二醇或缓蚀剂混合液必须另设配方废物流；不假定直接排入水体。

- 选定流: 废辅助冷却回路水
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_wastes与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_wastes`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

##### 基本流

###### 使用后的空气（`vented_air`）

卸荷、泄压、排水和站内泄漏排出的湿载气，空气排放、子介质未特指。明确每个实际出口及其经通风进入室外的路径。保留实物气体账；载气行不能替代污染物基本流，也不证明影响表征。质量加总时从载气中扣除另行计量的污染物质量。

- 选定流: 使用后的空气 `fe0acd60-3ddc-11dd-ae96-0050c2490048`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_air与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_air`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 颗粒物，粒径未特指（`particulate_air`）

仅在实测有颗粒物跨越环境边界时适用。采用实测不重叠、粒径未分级的颗粒物部分，排除另计润滑剂气溶胶。核实采样定义、组成、回收率及实际室外空气路径。已知粒径时核对对应互斥粒径段；不得把PM2.5、PM10与总颗粒物作为独立质量相加；不使用熟料案例因子。

- 选定流: 颗粒物，粒径未特指 `0ce3dedb-caca-407b-a856-a90470eb8ec0`
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_emissions与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 排入室外空气的压缩机齿轮润滑剂气溶胶（`oil_aerosol`）

仅在压缩腔隔离情况下仍观测到润滑剂气溶胶外排，例如通风口或维护泄漏时适用。声明实际配方／物种及出口，不用甘油或修正流替代。监测与数据库定义要求时拆分已识别物种；核对其是否计入总颗粒物采样，确保只计一次。

- 选定流: 排入室外空气的压缩机齿轮润滑剂气溶胶
- 流属性/单位: 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 单位组: 质量 `93a60a57-a4c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_emissions与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_emissions`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

###### 排向室外空气的压缩废热（`rejected_heat`）

中冷器、后冷器、油冷却器及实际风机通风向室外空气散发的热能；不表示水体热排放或售出热产品。采用cp_heat实测／经验证热衡算，记录冷却气流、温度、湿度、散热路径、边界与不确定性；保留其他散热项，不把未闭合残差自动当作本行量。

- 选定流: 排向室外空气的压缩废热
- 流属性/单位: 热能 / MJ
- 单位组: 能量 `93a60a57-a3c8-11da-a746-0800200c9a66`
- 数量规则: Qb_i / Q；Qb_i为由cp_heat与cp_cohorts取得的该行保留来源/日期/接收方的实际新批次归属输出/效应，只继承已消耗且未被已链接供应包含的兼容先前前景向量。完整未分配Qt_i/实物库存另存；旧验收库存服务保留原Q。本模型量不缩减真实实物毛输出，也不表示第二个外部气体输出；归属未知时保持不可用
- 数值来源模式: `foreground_record`
- 适用范围: `site_specific`
- 归一化基准: 每参考流
- 基准类型: `reference_flow`
- 证据类型: `collected_record`
- 采集协议: `cp_heat`
- 来源: `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt`

## 7. 分配与共产品处理

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `air_product_only` | compression-station | 本边界一个参考空气产品，无默认联产品。冷凝液、废油和废滤芯按实际废物身份链接处理，不给水产品或回收收益。热量排入环境保留能量账，本未出口热路线不虚设售热产品。 若实际出口有用热，按接收方、实测传热和有效温度／服务基准新增独立产品交换并审核边界扩展；不自动给予替代热抵扣。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `physical_before_burden` | all inventory rows | 先保留完整实物流、湿／干空气、水、油、滤芯及库存账；分配后环境负荷账单独保存。多用户同压力同质量时按实测交付体积（相同实际状态及组成约定）划分共同站负荷；不同压力／质量须先拆分实测站工况，不按体积机械共分。实物交付量及内部链接不乘负荷分配份额。 | `ilcd-general-guide`, `doe-compressed-air` |

## 8. 前景数据采集、计算与质量规则

Q是声明产品核算关口真实唯一事件的权威实测首验产量sum_e(v_e)。保留已验收事件ID、互不重叠实测增量、谱系及锁定原分母。验收后损失、泄压、消耗、提取、降级或回到返工的气体仍属于原验收量；不能由存活库存/销售反推Q，也不将Q另当外部实物输出。

D_new、F_new_close和L_new仅作对账桥。D_new是新验收批次匹配实际退回后的净外发；F_new_close是该批次期末验收库存，包括符合条件的退回气体；L_new是范围内其余实际验收后净去向，包括泄漏/泄压、提取、消耗、降级和转返工。三项须互斥且采用相同声明验收产品基准，不加入毛循环或重复经过、重复退回份额、验收前拒收或范围外下游损失。故核对Q = D_new + F_new_close + L_new；仅证明其余全部验收后去向不存在时才能采用D_new + F_new_close特例桥。状态/组成变化须保留实测质量/组分/水对应关系；换算无支持时明确桥未完成，不能抹去真实首验事件。

Qt_i是同期间新/旧/未完/其他全部接收方的站内完整未分配实物交换，保留于实际控制体质量、组分、水及能量账；Qt_i/Q仅可作实物分析。每个已链接新产品清单/供应需求卡改用Qb_i/Q，其中Qb_i为station_ratio及cp_cohorts规定的该行真实新验收批次交换分子。排除当前旧成品/其他接收方服务；旧服务沿用原Q另列。实际实物输出优先按实测批次身份/物理分区跟踪，不能用环境负荷份额缩减真实外部输出。新产品归属不改写实测场址排放、废物、热量、库存或转移总量。

各期初原料、在制和成品气批次须保留原始实物量、原实测基准／分母、上游负荷向量及资产／维护服务向量。在制尚无最终验收产量分母时保留原始量和服务分子，不虚构以前的Q；已验收气体保留原Q。新生产只继承实际投入原料／在制负荷，并将新增实际归属活动计入一次；收货量不等于消耗量。期初已验收气体即使发运、退回、混合或复测，仍为旧批次，沿用原归一分母，不使用新Q。当前新增储存、泄漏、再压缩或服务归给实际被服务批次，不重复原制造／服务，也不得将缺记录当零。保留真实原料／在制／成品库存和转移等式，包括实物拒收及内部关联。Q为零或未知时保留原始记录、状态不确定性和未知归一值，不除零或虚构产量。

S_asset为每个资产行按命名规则asset_service和cp_assets得出的、兼容背景供应单位（此处kg）下的期间新验收产品制造／服务暴露分子，与实物设备购入／报废、润滑油／滤芯／材料消耗分开。保留完整设备及组件／首装边界、包装、退回／回用和以前服务分配；不设默认单机重量、寿命、负载率或服务份额。仅可合并质量／组成兼容的验收工况。

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| cp_delivery | compression-station | 权威首次验收事件Q及互斥验收后去向桥 | 现场测量 | 固定验收关口和外部实物边界；OEM回路；事件/批次ID及谱系；互不重叠实测首验增量v_e；验收时刻/测试；锁定原Q和修正历史；净D_new；F_new_close；各净L_new去向及日期/接收方；验收前后拒收区分；期初旧成品；旧发运；退回/毛循环/复检/返工；原料/在制；计数复位；原始P_abs/表压偏移；T_K；RH/露点；蒸气/组成；Z/状态方程/密度；计量补偿；供应基准；储气罐/管存和液体库存 | 采用经校准气体计量和同步验收/状态记录识别每次真实首验，在同参考状态计量互不重叠的新气量；由事件锁定Q，验收后损失不撤销首次验收。同期间依据实际转移/库存/出口记录独立核对互斥净D_new/F_new_close/L_new；用谱系匹配退回和重复经过，不叠加毛穿越量。量化范围内全部验收后去向，否则保留桥不完整；仅有证据其他去向为零时使用两项桥。混合储罐采用可追溯转移或验证的混合/组分平衡及不确定度。状态/组成换算和水相变化须有真实支持对应关系，不设通用标准状态、默认密度或重复补偿。 | m3 | 每次真实首验、去向/转移及期初末盘点 | 共同期间，包括启停/待机/未验收运行；保留原验收日期 | 实际产品核算关口、外部实物边界、纳入的储气罐/管存和真实出口 | 每参考流 | 唯一实测验收事件账、锁定Q历史、互斥净去向/库存桥、实际状态/质量/校准/状态方程记录及不确定度 |
| cp_energy | compression-station | 完整站电量Qt_energy | 现场测量 | 国家／电网；电压与变压边界；电表起止；带时间戳实测有功功率；加载／卸载／启停／待机；风机／控制／排水；电能回用／外送；Q | 校准有功电能分表，或按各真实工况对实测有功千瓦作时间积分；包括全部真实辅助负荷及可归属变压损失。先核对完整未分配站电量，再通过station_ratio与cp_cohorts形成实际新批次Qb_i并分列旧库存服务后归一；不以铭牌功率或默认功率因数估算，不重复电压接口。 | kWh; MJ | 每个代表工况和维护事件 | 与Q同期间 | 实际站供电接口 | 每参考流 | 校准、实际功率／电量日志及供电／归属核对 |
| cp_materials | compression-station | 实际材料消耗 | 现场测量 | SKU；组成；净质量；收货；期初／期末库存；维护事件；内部循环；Q | 对每一种实际供货润滑油、滤芯或补充水分别校准称量并做库存核对；保留实际安全数据表／零件规格及初装边界。通过station_ratio与cp_cohorts取得实际新批次消耗/供应需求及兼容未嵌入继承量，旧接收方服务分开，原始收货与库存保持完整。 | kg | 每个代表工况和维护事件 | 同一声明期间，涵盖各班次／负荷 | 实际站边界 | 每参考流 | 校准、原始记录、库存／交付核对和不确定性 |
| cp_assets | compression-station | compressor_asset及receiver_asset的实际期间分配供应分子S_asset；完整设备实物账另存 | 前景服务和资产实测／记录 | 精确资产行／id／型号／配置；制造净质量kg；实际台数；可追溯称重；供应单位／参考属性／边界；完整资产期初／购入／转移／退回／期末／报废；组件／首装、包装和密封件；期间工况／时长及所有服务用途；寿命／退役证据或明确情景；以前已分配份额；按接收批次的当前f_service_j；u_provider_j；新生产继承服务；S_current；S_asset；服务接收批次；原分母；Q | 经校准称重或可追溯同配置净质量记录，并记录设备实有台数。核对期初＋购入／转入＝期末＋退回／转出＋报废，不虚构实物消耗。另对精确资产行执行asset_service：由实测服务和寿命证据确定因果份额，将兼容供应kg×本期新生产份额汇总为S_current，仅加入新生产实际消耗的可追溯原料／在制继承服务形成S_asset；旧成品服务沿用原Q另存。全部接收批次关联cp_delivery和cp_cohorts。保留初始制造与独立维护供应、剩余寿命、回用／退役及敏感性。kg基准储气罐供应未解决时明确缺口，不作零值。 | 期间供应当量kg；原始账分开保留kg／台数／工况单位 | 每次资产／服务／退役事件及期末 | 共同期间及全寿命／以前归属证据 | 每个实际压缩机组和独立储气罐、兼容供应边界及服务批次 | 每参考流 | 实际资产／质量／工况记录；完整设备实物等式；供应／组件边界；因果寿命情景；以前份额账；S_asset算术及独立量纲审查 |
| cp_air | compression-station | 完整进气、放空与气体库存质量 | 现场测量 | 各出口流量／计数；P_abs；T；RH／水蒸气比例；含氧／氮的实测干组分；经验证密度／状态方程／Z；卸载／泄压／排水漏气；外部吹放；内部循环；气／液库存；Q | 调查全部实际出口并分负荷计气体流量。每项体积增量按其自身经验证湿气密度换质量；氧、氮、其他干组分及水的实测质量分数另存。核对实际验收气、水蒸气、各排水点冷凝液、排放、回用和库存，并区分验收前后及新旧批次。通过station_ratio与cp_cohorts仅形成模型Qb_i，原始实物总量不乘环境负荷份额。内部循环两端同量，不成为第二个外部交换。 | kg | 每个工况及真实外排事件 | 与Q同期间 | 完整站进气、最终分水器、储气罐及全部实际气体出口 | 每参考流 | 回路／出口图、校准测量、组成、换算与不确定性 |
| cp_wastes | compression-station | 每项实际废物 | 现场测量 | 物流；湿质量；水分；污染／物种；沥油划分；接收方；运输／处理；库存；Q | 对每项分开的废物称量，保留代表性分析和转移记录；明确实际下水道／厂外接收方，另查实际直接环境液体出口。完整保留实物Qt_i，通过cp_cohorts及station_ratio跟踪实际新批次Qb_i并分列旧服务，不缩减真实废物输出。 | kg | 每个代表工况和维护事件 | 同一声明期间，涵盖各班次／负荷 | 实际站边界 | 每参考流 | 校准、原始记录、库存／交付核对和不确定性 |
| cp_emissions | compression-station | 实际颗粒物与润滑剂气溶胶 | 现场测量 | 出口；室外路径；采样定义；空白；回收率；粒径段；物种／组成；流量；工况时数；不确定性；Q | 先调查实际放空、泄漏和维护排放，再按有文件且适用的测量方法采样；分别报告正排放、未检出和无此项证据；量化互斥污染物段，保存油气溶胶／颗粒物重叠核对。保留完整实测源Qt_i，另用station_ratio及cp_cohorts形成有证据的新批次Qb_i与旧批次增量，绝不改写实际外排记录。 | kg | 每个代表工况和维护事件 | 同一声明期间，涵盖各班次／负荷 | 实际站边界 | 每参考流 | 校准、原始记录、库存／交付核对和不确定性 |
| cp_heat | compression-station | 排向空气的热量 | 现场测量 | 冷却气流；进出温度／湿度；密度／焓；散热出口；边界；工况；不确定性；Q | 按实际散热器／通风出口校准测流量和进出状态，以适用且经验证的焓关系计算净散热；保留辐射与其他传热及衡算残差，避免重复冷却回路内循环。完整实物Qt_heat保留，另用station_ratio与cp_cohorts形成实际新批次Qb_i及旧服务，不用能量余差补测量缺失 | MJ | 每个代表工况 | 同一声明期间 | 实际站边界及室外受纳空气 | 每参考流 | 校准记录、实际回路和能量账 |
| cp_cohorts | compression-station | 原料/在制/成品继承、逐交换Qb_i及原批次服务向量 | 现场记录 | 批次/事件ID；原关口/日期/状态/实测基准；验收气原Q及未验收在制原始分子；锁定首验量；互斥D_new/F_new_close/L_new及各去向；按流/来源/日期/接收方完整Qt_i；当前新/旧/未完/其他实际接收方数量及因果驱动量；N_i_to_new；兼容继承I_i_to_new及供应已嵌入标记；Qb_i；原料/材料/气体期初/收货/消耗/期末；退回/循环/复检；供应边界；服务向量和未知来源 | 核对按时间排序的事件/转移/出口及验证储罐混合记录，不重复首验。逐实际行执行station_ratio和cohort_carry：优先实际跟踪当前新批次消耗/输出，再用有证据逐交换因果分配真正共用效应，并保留完整未分配实物Qt_i。仅加入已消耗原料/在制中未被已链接投入供应包含的先前前景交换向量，保留原流/单位/来源/日期；背景已含负荷仅作分解。旧验收库存制造与本期新增服务沿用原Q另列。接收方/库存/状态/供应证据未解决时Qb_i未知，不自动将全部Qt_i给新生产。 | 原始kg/m3与精确供应/服务/排放单位分开 | 每次变动/首验/去向及归属时段；期末 | 原批次及共同新期间；保留原交换日期 | 完整声明站内库存、全部被服务方、实际源边界及供应 | 每参考流 | 唯一事件及去向桥；原始库存/完整输出闭合；原分母/向量；逐交换接收方/因果份额及供应重叠审查；历史缺失披露 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `station_ratio` | all inventory rows | qphysical_i = Qt_i / Q仅作未分配实物分析，绝非所选已链接新产品量。各普通行Qb_i = N_i_to_new + I_i_to_new，且a_i = Qb_i / Q仅一次。N_i_to_new为实际跟踪的当前新批次交换/供应需求；其余真正共用效应须有覆盖全部被服务方的逐交换因果归属证据。排除旧成品/未完/其他接收方份额，另存其台账/基准。I_i_to_new仅为已消耗原料/在制携带、实际流/供应单位/边界匹配且未被任何已链接投入供应包含的可追溯先前前景交换；上游已含负荷只作分解，不新增前景需求/排放。保留继承来源/日期/介质，历史排放继承不是新的当前外排。来源/单位/状态不相容时分列子记录。真实实物毛输出、库存/转移数量及参考气体不乘环境负荷份额。Q是由真实首次事件锁定的产量，按互斥D_new/F_new_close/L_new核对，不是第二个外部实物输出；delivered_air为1 m3产品核算参考。compressor_asset和receiver_asset采用完整命名asset_service关系的Qb_asset = S_asset，asset_per_m3 = S_asset / Q仅一次，均不是实物设备消耗。旧库存服务保留原Q；Qb_i/Q未知时不可用，不能改用全部Qt_i。 | Qt_i; N_i_to_new; I_i_to_new; Qb_i; S_asset; Q; cp_delivery; cp_assets; cp_cohorts | 独立完整实物账及每参考流实际新批次已链接交换/供应需求 | `doe-compressed-air`, `ilcd-general-guide` |
| `gas_volume_conditions` | ambient_air, delivered_air, vented_air | 各原始增量的湿质量 = 原始体积 × 经验证密度(原始P_abs、T_K、蒸气／组成、Z)。相同质量换算参考体积 = 质量 / 密度(P_ref_abs、T_ref_K、相同组成、Z_ref)，保留流量计算法及已做补偿。仅组成相同时，等价状态方程写法为V_ref = V_raw × (P_raw_abs/P_ref_abs) × (T_ref_K/T_raw_K) × (Z_ref/Z_raw)。采用实测绝压、开尔文温度及验证压缩因子，不得假设Z=1。水分比例变化或冷凝须有实测组分／水账及处理记录，不能套用组成不变简式。不兼容状态／组成分开。湿／干、实际／自由空气／标准体积和供应基准均显式保留。不设通用密度或采用来源示例参考状态。 | cp_air; cp_delivery; measured volume/mass; concurrent raw state/composition; declared reference state; validated meter/EOS | 完整气体实物质量及同基准验收Q与不确定度 | `nist-gas-flow`, `doe-compressed-air` |
| `asset_service` | compressor_asset, receiver_asset | 对一个兼容质量基准资产的当前服务贡献：q_ref = q_item × f_service / Q；q_item为实际采集的已识别设备净质量，单位kg，不是气体产品分母；q_ref为每1 m3参考流的分配供应当量kg。一般期间形式：S_current = sum_j(u_provider_j × f_service_j_to_new)；S_asset = S_inherited_to_new + S_current；asset_per_m3 = S_asset / Q。S_inherited_to_new为新生产实际消耗原料／在制所携带、先前已发生且未包含于已链接投入供应中的可追溯前景资产需求。材料／在制背景供应已含服务仅在该供应内保留分解向量，不得再次记入这些设备行；排除旧成品气服务。无继承服务的单个新质量基准资产贡献中u_provider_j = q_item_j，完整保留原公式。各供应／资产类别分别求和，不得合并单位或边界不兼容的供应。cp_assets保留各资产id、实测质量／台数、供应单位／边界、实测因果期间服务、全寿命服务、剩余归属、退役和情景。f_service_j_to_new为当前归属新生产的无量纲服务份额，与全部旧成品和其他服务份额分开。各f_service_j为该资产专属、有证据的无量纲份额，基于实际工况／时长，或已证明具因果的同状态产量服务，并在有因果时纳入拒收／空载工况；不设通用体积份额。只有期间／寿命验收体积确实决定该资产服务、采用相同真实首验事件关口／计数规则且已核对其他用途及状态／质量基准时，才可采用体积份额。不同资产可用不同份额。全寿命／批次份额合计不得大于一，保留以往分配，回用时不得重置全部制造负荷。这两个清单行要求兼容的kg基准供应；按台提供的供应数据须先有实测、同配置kg/台关系并核对属性／单位，否则保留供应缺口。实物设备变动及子材料／首装账独立；完整机组制造和其中已含组件不得重复计入。S_asset或q_ref不得重复除以Q。不设默认重量、寿命、工况、份额或回用抵扣。 | q_item; u_provider_j; f_service_j; f_service_j_to_new; S_inherited_to_new; S_current; S_asset; Q; cp_assets; cp_delivery; cp_cohorts | 每资产行的供应当量kg期间分子S_asset及kg/1 m3的asset_per_m3，保留q_ref等价关系 | `ilcd-general-guide` |
| `actual_power_integral` | electricity_mv, electricity_lv | Qt_energy_MJ＝3.6×实测有功功率P_kW对小时作时间积分，含选定接口全部实际站负荷。优先用校准电能表差值；两种方法互核，不同时相加。负荷分配前保留完整未分配电能、实际库存／回用／外送和实测热／气体转移。 | cp_energy; 时间分辨实测功率或校准电能计数 | 完整站电能MJ | `doe-compressed-air` |
| `cohort_carry` | all inventory rows | 各实物库存按期初＋实际收货/转入/生产＝期末＋发运/消耗/转出/拒收核对，保留真实气态/组分/水变化。继承负荷/服务向量随实际消耗量和原基准携带，供应已含向量不重复加入。新Q = sum_e(v_e)，来自唯一真实首验事件，验收后损失/返工不改变其锁定值。按同基准互斥净去向独立核对Q = D_new + F_new_close + L_new；仅有证据L_new为零时可用两项桥。毛循环/退回/复检不重复事件，同一退回份额仅一个净去向。旧验收气不新增Q，保留原分母/服务历史。当前新产品Qb_i排除旧/未完/其他接收方；继承/归属/状态向量未知时保持未知。Q零/未知不强行求商，不因事件Q虚设重复外部实物输出。 | cp_cohorts; cp_delivery; cp_assets; actual acceptance/fate/stock/transfer/recipient records; original cohort denominators/vectors | 完整实物库存/去向桥、锁定事件Q及独立真实新旧批次交换/服务分子 | `ilcd-general-guide`, `doe-compressed-air` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `same_period` | all inventory rows | 同期间、同配置和锁定真实首验Q；保留验收后去向、实际新旧接收方、异常、缺测、启停和低负荷 | cp_delivery; cp_energy; cp_materials |
| `physical_ledgers` | compression-station | 分别核对空气干组分、水、油及滤芯质量与库存；完整未分配站控制体能量账须覆盖实测电能及全部进出气／液、热、功与能量库存变化；采用经验证实际状态焓，包括水蒸气／冷凝及实际回用。披露残差和不确定性，不把差额强塞入未知排放 | cp_air; cp_materials; cp_wastes; cp_energy |
| `provider_basis` | all product inputs | 流身份、参考属性／单位、实际供货状态与背景数量定义分别验证；相同名字不是背景兼容证明 | 实际供货／背景原件和计量说明 |
| `emission_completeness` | all elementary outputs | 检出限不等于零；正排放须真实物种／介质；总PM与油气溶胶不重复；未发生项须记录调查范围而非虚构调查结果 | cp_emissions; cp_wastes |
| `asset_dimension_review` | compressor_asset, receiver_asset | 采用可复现量纲和库存算例独立核对完整命名asset_service公式、精确资产／供应单位、实测期间分子、正Q、因果寿命份额及批次历史。有限共同参考计量通过只证明显式期间基准，不证明资产服务归属的通用公式类型、物理有效性或科学审批。 | cp_assets; cp_delivery; cp_cohorts; actual provider originals; independent review |
| `cohort_numerator` | all inventory rows | 所选普通新产品量均为实际Qb_i/Q，资产量为S_asset/Q。计算前核查实测当前接收方和已消耗先前前景未嵌入向量；保留完整原始Qt_i及全部实物输出，不按环境负荷份额缩减。旧验收库存服务沿用原Q。归属或验收后去向/状态桥缺少支持时不能宣称完整数据集。 | cp_cohorts; cp_delivery; all linked row protocols; original provider/source/stock records |

## 9. 校验规则

| rule_id | applies_to | 规则 | source_ids |
| --- | --- | --- | --- |
| `reference_unique` | delivered_air | 在声明状态下仅有一个1 m3、Volume产品核算参考。由实际唯一互不重叠首次验收事件复算正的锁定Q；后续泄漏/泄压/降级绝不抹去已验收事件。同期间同基准核对互斥净D_new/F_new_close/L_new，只有证明其余全部验收后净去向不存在时才单用D_new+F_new_close。毛循环、重复退回份额、旧成品发运及复检不能当新验收。Q不是第二个外部实物输出。分别核查全部模型卡Qb_i、旧批次原基准、真实状态/供应相容性和完整未分配原始输出/库存/组分/能量闭合。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `route_and_balance` | compression-station | 检查实际无油干式螺杆、风冷、无独立干燥、边界组件和原厂／改装回路；分别闭合湿／干气、水、油及能量账，在测量不确定性内评估残差。未经证实的冷却液组成或流量不得宣称符合。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `exact_id_and_fate` | all inventory rows | 逐项验证流UUID及其名称、CAS（适用时）、路线、介质、参考属性和单位。空UUID仍是具体原子流，但链接未完成；未决身份／供给或处理背景不得报告完整数据集。真实额外交换先新增原子行。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |
| `no_proxy_emissions` | all elementary outputs | 污染物不得由宽泛载气、其他行业废水或修正流替代。核对室内放空至室外的路径、水性废物接收及任何直接水体出口；所有排放只用真实测量／经验证计算，不设默认正排放或虚构零值。 | `eu-ene-bref`, `doe-compressed-air`, `atlas-zrzt` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | secondary_dataset; background_dataset |
| downstream_use | 压力/质量/体积基准已核实的首验生产关口压缩空气清单；披露实际净发运及范围内全部验收后去向 |
| allowed_use | 仅同路线及声明首次验收数量基准的完整已链接压缩空气；下游实物交付气需求须另有经验证关口/数量对应及供应相容性，并明确验收后损失 |
| excluded_use | 整类34250、其他化学品、设备制造、医用气体、干燥产品、高压瓶装及缺失介质／背景的完整性声明 |
| required_metadata | 全部参考限定信息、锁定真实验收事件、同期间互斥净D/FG/L桥、外部实物边界、批次特定Qb_i及未分配Qt_i、旧库存原分母、未嵌入的继承需求、地域、原厂回路、计量、上游/废物背景及缺口 |
| required_quality_disclosure | 校准、覆盖、不确定性、检出限、残差、寿命情景及身份／背景未决 |
| update_trigger | 设备／冷却液／干燥／交付压力质量、参考体积约定、负荷、供给或处理背景改变 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `eu-ene-bref` | official_guidance | European Commission, Reference Document on Best Available Techniques for Energy Efficiency, February 2009, corrected 09/2021. §3.7, printed pp.206–214 / PDF pp.238–246; https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2021-09/ENE_Adopted_02-2009corrected20210914.pdf; 检索于 2026-10-13T18:10:42.859Z | 横向站系统、压力纯度需求、组件及排放调查；不采用统计节能或通用配方 |
| `doe-compressed-air` | official_guidance | U.S. Department of Energy, Improving Compressed Air System Performance: A Sourcebook for Industry, Third Edition, 2016, DOE/EE-1340. Printed pp.8,11,14–15,60–61,84 / PDF pp.13,16,19–20,65–66,89; https://www.govinfo.gov/content/pkg/GOVPUB-E-PURL-gpo176573/pdf/GOVPUB-E-PURL-gpo176573.pdf; 检索于 2026-10-13T18:10:38.197Z | 无油隔离润滑、附件／冷凝、流量压力能耗同时计量和体积基准；不移植润滑注入式数据或示例数量 |
| `atlas-zrzt` | handbook | Atlas Copco, Oil-free rotary screw compressors ZR/ZT 110-160 (FF), undated brochure. Printed/PDF pp.7,16–18,22; https://www.atlascopco.com/content/dam/atlas-copco/compressor-technique/oil-free-air/documents/ZRZT-110-160-%28VSD%29-FF.pdf; 检索于 2026-10-13T18:10:38.311Z | 生产者无油风冷图、隔离油回路、分水、可选干燥与FAD限定；型号例证而非默认量，重复水流文字须现场原厂回路澄清 |
| `nist-gas-flow` | official_guidance | Wright et al., NIST SP 250-80, Gas Flowmeter Calibrations with the Working Gas Flow Standard, 2009. §§6,8–10, printed pp.8,13–15 / PDF pp.10,15–17; https://doi.org/10.6028/NIST.SP.250-80; 检索于 2026-10-13T18:14:57.112Z | 校准、实际局部状态／组成、质量与体积的密度换算及不确定性；干燥校准气体和参考条件不成为未干燥产品默认值 |
| `ilcd-general-guide` | official_guidance | European Commission JRC, ILCD Handbook, General guide for Life Cycle Assessment—Detailed guidance, first edition March 2010, DOI 10.2788/38479. §§7.2.1,7.9.3.2; printed pp.154–155,257–263 / PDF pp.174–175,277–283; https://eplca.jrc.ec.europa.eu/uploads/ILCD-Handbook-General-guide-for-LCA-DETAILED-GUIDANCE-12March2010-ISBN-fin-v1.0-EN.pdf; 检索于 2026-10-13T18:15:00.159Z | 完整设备／维护边界及有物理因果依据的服务分配；不设压缩机重量、寿命或通用体积分配默认值 |
