---
pcr_id: pcr.metal-products-machinery-and-equipment.transport-equipment.civil-aircraft-structural-parts
language: zh-CN
status: candidate
sync_with: pcr.en-US.md
---

# 机加工铝制民用航空器结构细节零件制造

## 1. 范围与适用性

此较窄PCR覆盖民用航空器新单件整体铝翼肋结构细节零件制造，由证实锻轧板材加工并按清洁未涂覆状态验收。受控实际合金状态图样规定产品，不强制默认合金号或翼肋质量。代表路线包括坯料准备材料去除加工去毛刺合格水清洗实际检查净质量放行。溶剂最终清洗发运包装可选。

此为坯料到验收细节件制造前景，不是完整摇篮到大门覆盖。实际板材轧制热处理及此前金属生产须匹配上游数据集。阳极氧化转化涂层涂漆喷丸喷丸成形额外本地热处理复合材料钛钢增材制造粘接铆接分总成航天军用专属件发动机起落架在此限定路线外。需要这些阶段的零件须在最终完工件声明前有支持独立扩展。下游航空器装配飞行服务修理使用报废排除。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.transport-equipment.civil-aircraft-structural-parts |
| classification_refs | CPC 3.0:49640; narrower |
| covered_products | 证实锻轧板新整体民用航空器铝翼肋细节件，清洁未涂覆验收 |
| excluded_products | 加工后涂覆喷丸热处理完工路线复合材料其他金属装配结构航天军用专属发动机起落架零件服务 |
| representative_product | 未涂覆加工验收入口图样受控整体铝翼肋 |
| production_route | 证实锻轧板收货实际切坯；铣钻去毛刺；合格水洗干燥；受控检查净称重；可选IPA清洗包装 |
| market_state | 供声明后续生产新验收未涂覆结构细节件；不是完整航空器适航批准 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 声明图样一种验收配置结构细节件制造 |
| How much | 1 kg |
| How well | 当前受控图样材料零件特异符合及实际签认验收记录；无航空器服务等同 |
| How long or cycle | 一个制造期间；无假设飞行寿命疲劳循环维护间隔 |
| reference_flow_link | finished_rib |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 验收未涂覆整体式锻轧铝民用航空器翼肋 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 零件号图样版次批次序号；民用航空器翼肋匹配左右方向；合金状态坯料批厚度晶粒方向；整体板材路线；完整几何零件完整性；未涂覆清洁交付状态；实际净M kg；实际工单检查验收计划；场址期间供货方；上游入口包装工装排除 |

数据包须随附必需限定信息，缺失则参考定义不完整。采集协议的一台完整设备指此单件完整结构细节零件，不是航空器。M按相同验收图样配置物理实测，不仅由CAD密度或目录航空器质量推断。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | reference product | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | M = 同一配置的一台完整设备的验收净质量，单位 kg；采用 cp_mass 采集。 |
| `material_mass` | mass inventory rows | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 记录每台验收成品设备实测q_item kg，并采用normalize_mass、reference_mass及所述协议。 |
| `electric_energy` | electricity rows | Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 采集实际归属表计kWh；按3.6 MJ/kWh换算后设备采集并采用normalize_mass。公开能量属性不改Mass。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 实际加工厂供货入口证实锻轧铝板批次 |
| starting_condition_role | upstream_abstraction |
| product_classification_scope | CPC 3.0:49640; narrower |
| recursive_input_rule | 不以成品同类别翼肋制造同翼肋，采用实际板坯料。内部返工保留边角料循环不重复外部投入。 |
| upstream_dataset_requirement | 匹配实际板合金状态轧制热处理金属路线地区年，以及实际冷却液水公用供货废物接收。此前同场址阶段仍上游概化，不是无负担。 |
| disclosure | 仅坯料到未涂覆细节件前景；所有缺少实际上游运输接收链接及后续表面处理装配分别披露。不由清洁未涂覆入口声明可安装最终机体制造。 |

### 边界规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `boundary_operations` | all_processes | 纳入实际收货准备加工去毛刺合格洗干检查，含归属拒收返工设置待机。切割溶剂清洗包装须实际执行依据。来源建立坯料细节件与下游装配不同阶段，不建立通用化学检查配方。 | figeac-metal-processing; airbus-production-gates |
| `boundary_exclusions` | later manufacture and use | 此未涂覆参考排除后续阳极氧化涂漆喷丸结构装配；实际范围需要须支持扩展。排除飞行使用疲劳维护报废；工厂直接释放须实际物质介质观察，不是飞行使用排放。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `preparation` | 证实板材收货与实际坯料切割 | required | 可追溯板材收货；仅实际执行切割；保留坯料晶粒方向零件套料 | foreground | 1 kg finished_rib |
| `machining` | 受控翼肋铣削钻孔去毛刺 | required | 从证实板批次按受控图样实际批准加工 | foreground | 1 kg finished_rib |
| `washing` | 合格水洗漂洗干燥 | required | 声明水清洗路线；精确化学准则来自当前批准作业记录 | foreground | 1 kg finished_rib |
| `inspection` | 尺寸配置净质量验收 | required | 实际图样零件要求检查及校准未涂覆零件净称重 | foreground | 1 kg finished_rib |
| `cleaning` | 可选最终IPA清洗 | conditional | 仅实际批准执行CAS67-63-0清洗 | foreground | 1 kg finished_rib |
| `packing` | 可选防护发运包装 | conditional | 仅实际独立供货发运包装 | foreground | 1 kg finished_rib |

### 过程：证实板材收货与实际坯料切割（`preparation`）

#### 输入

##### 产品流

###### 整体式航空器翼肋用证实锻轧铝合金板材坯料（`plate_stock`）

一种实际证实板材合金状态厚度大于0.2mm晶粒方向跨越加工厂入口。记板批次追溯、净收货领用退回kg及归属一种受控图样坯料，含消耗拒收。不将已锻轧坯料视作铝锭一般铸坯箔或航空成品；此前轧制热处理链接上游。不同合金状态须独立坯料记录，不用未指定混合。

- 选定流： 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_preparation`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集清洁锻轧铝合金板材边角料（`cutting_offcut`）

仅实际外运声明合金状态清洁干切割边角料kg，并链接实际厂外回收接收方。保留库存或文件化后续工单可用余料不是弃置废物。按实际合同状态识别可售共产品或废物，无自动回收信用。

- 选定流： 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：受控翼肋铣削钻孔去毛刺（`machining`）

#### 输入

##### 产品流

###### 供货水基矿物油机加工乳化液（`cutting_emulsion`）

仅实际湿加工使用一种文件化供货预混矿物油乳化液：记SDS浓度及净新领用kg。内部循环不是新投入。本地浓缩液调配须分别具名浓缩液与水及实际混合记录，不同时计预混组分。此路线不意味全部航空件湿加工或所有切削液具此化学。

- 选定流： 切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_machining`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集铝合金翼肋机加工屑（`machining_chips`）

测实际外运干金属kg及实际另测夹带乳化液，保留合金批次分流实际厂外回收接收方。仅干金属链接废铝流，移除液用spent_emulsion。未加工板边角料为另一状态；内部再用重熔夹带湿液不重复计外部新废物。

- 选定流： 铝废料 `96c5f842-ea53-419b-b1cd-c02c479efb45`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集已用水基矿物油机加工乳化液（`spent_emulsion`）

仅实际外运已用湿乳化液kg及分析油水金属浓度实际接收方，循环槽液内部保留。核对屑夹带液不重复计屑金属。

- 选定流： 废切削液 `62b6a738-fb6a-4570-a95a-9255ec0dcb2b`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：合格水洗漂洗干燥（`washing`）

#### 输入

##### 产品流

###### 供货工业清洗用水（`wash_water`）

声明合格水洗漂洗路线实际供水，测供货kg及质量供货记录。此技术圈产品区别天然淡水开采收集废水，排除槽循环。替代干清洗及表面处理路线须支持独立清单，不由本卡推断。

- 选定流： 工业用水 `81960a30-5488-4358-a28a-a0ee1f43f0f2`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 供货无水碳酸钠清洗试剂（`wash_carbonate`）

仅当前图样合格清洗计划实际使用一种无水碳酸钠CAS497-19-8试剂时纳入。记含量净kg及实际槽浓度温度，须证明与此合金相容。不编造碱性配方或暗示航空制造必须碳酸钠。其他实际清洗剂添加剂须自身具名化学卡。

- 选定流： 供货无水碳酸钠清洗试剂
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_washing`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用水基碳酸钠翼肋清洗液（`wash_effluent`）

仅实际碳酸盐槽路线外运：湿kg及实测碳酸盐油金属浓度实际接收方。其他清洗化学或无添加漂洗须自身具体液体卡，收集废水不是基础河流水或直接未处理排放。

- 选定流： 收集已用水基碳酸钠翼肋清洗液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

###### 收集无添加剂铝翼肋漂洗废水（`rinse_effluent`）

仅实际无添加剂漂洗废水外运，测湿kg实际铝颗粒油污染接收方。若混碳酸盐槽或其他清洗剂，须记具体分析混液，不对同液计此行两次。此为收集废水，不是天然资源水或假设未处理释放。

- 选定流： 收集无添加剂铝翼肋漂洗废水
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：尺寸配置净质量验收（`inspection`）

#### 输入

##### 产品流

###### 用户端低压交流制造电力（`electricity_inspection`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 产品流

###### 验收未涂覆整体式锻轧铝民用航空器翼肋（`finished_rib`）

一种按受控图样实际验收计划由证实锻轧板加工的完整清洁未涂覆整体翼肋细节零件。声明合金状态厚度晶粒方向图样版次左右方向几何检查条件净交付状态。排除临时连筋工装散装紧固件密封剂涂层包装下游连接结构。此细节件验收不是完整航空器适航批准或可互换服务等同。

- 选定流： 验收未涂覆整体式锻轧铝民用航空器翼肋
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 1 千克
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_mass`
- 来源：

##### 废物流

###### 待处置不可修未涂覆铝航空器翼肋（`rejected_rib`）

仅实际不可修工厂拒收外运，原合金图样缺陷污染接收方净kg。修理返工供货退回不是处置，不推断使用期航空废料或完整机体废物身份。

- 选定流： 待处置不可修未涂覆铝航空器翼肋
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

### 过程：可选最终IPA清洗（`cleaning`）

#### 输入

##### 产品流

###### 供货液态异丙醇最终清洗配方（`ipa_cleaner`）

仅最终零件验收前实际批准执行使用一种CAS67-63-0配方清洗时纳入，保留纯度水浓度领用回收残留余留kg及当前作业授权。不假设必须溶剂脱脂或全蒸发，合格水洗另记。

- 选定流： 供货液态异丙醇最终清洗配方
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_cleaning`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

#### 输出

##### 废物流

###### 收集已用异丙醇清洗溶液（`spent_ipa`）

实际外运湿清洗液kg及分析IPA水污染物接收记录；区分回收溶剂擦拭介质实测残余空气释放。其他实际擦拭介质须独立物理废物行。

- 选定流： 收集已用异丙醇清洗溶液
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_waste。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_waste`
- 来源：

##### 基本流

###### 即时异丙醇向未指定室外空气释放（`ipa_air`）

仅实际观察控制后残余CAS67-63-0向未指定室外空气释放。采用匹配物质特异浓度流量时长采样或解析回收残留余留文件化闭合溶剂平衡量化。保留检出限不确定性，区分未执行未测低于检出。无通用VOC假设100%蒸发；室内长期土壤正丙醇匹配不是此交换。

- 选定流： 异丙醇 `fe0acd60-3ddc-11dd-a843-0050c2490048`
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_emission。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_emission`
- 来源：

### 过程：可选防护发运包装（`packing`）

#### 输入

##### 产品流

###### 成品纸板航空器翼肋发运箱（`shipping_box`）

仅实际供货文件化发运规范独立纸箱纳入，测空净kg并排除零件M。实际衬垫膜带可复用架各须独立具名交换实际再用分配；一般纸盒名称不建立易损零件保护包装。

- 选定流： 成品纸板航空器翼肋发运箱
- 流属性/单位： Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_stock。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_stock`
- 来源：

###### 用户端低压交流制造电力（`electricity_packing`）

用户侧表计测实际归属阶段设备、切料加工洗干计量控制待机返工电力。保留供货地区电压期间及当前因果共享负载记录。高压电网或发电流不建立此供货接口；另记实际额外压缩空气热公用，不合并载能物或推断本地燃烧排放。

- 选定流： 用户端低压交流制造电力
- 流属性/单位： Energy (net calorific value) `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则： 对 q_item 应用 normalize_mass；reference_mass；cp_energy。
- 数值来源模式： `foreground_record`
- 适用范围： `site_specific`
- 归一化基准： 每 1 kg 参考流；采集基准为每台验收成品设备
- 基准类型： `process_output`
- 证据类型： `collected_record`
- 采集协议： `cp_energy`
- 来源：

## 7. 分配与共产品处理

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `allocation_direct` | shared processes | 首先按图样版次合金状态细分实际坯料批套料计划工单阶段表计。共享加工采用证明因果操作时间及实测负载设置待机记录；清洗采用实际循环负载化学记录。不将航空器服务负担分配此件。简单质量份额须证明因果关系敏感性，不用无依据通用因子。 |  |
| `allocation_rejects` | offcuts chips and rejects | 消耗拒收坯料及实际返工保留期间投入并除同配置验收零件数量。保留可用板是库存不是废物；外运屑边角料须实际可售共产品或废物分类。记共产品分配基准价格物理关系敏感性，绝不对同质量同时授予避免金属回收信用可售产出收益。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_mass` | inspection | accepted complete rib | 校准完整零件净称重 | 型号；配置；序号；图样版次批次；验收净质量 M；kg；皮重；原读数；余留膜；排除连筋工装包装；验收数量 | 使用经校准的秤称量已验收的完整设备，排除运输包装；核对同一配置和验收记录。 | kg | 每零件或受控同图样批次且有实际代表个体读数 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 每台验收净质量 | 校准原始皮重净读数签认图样特异验收 |
| `cp_stock` | all_processes | specific stock and consumable inputs | 实际库存领用退回消耗 | 合金状态坯料批；图样套料坯几何；实际坯料kg；具名配方CAS含量；供货浓缩混合物；领用退回库存变化；浓度；验收数量 | 测各实际归属净投入kg含消耗拒收返工；核对收货领用退回坯料保留可用边角料。记实际化学浓度执行作业及新补充循环区别。不从产品营销编造供货等级状态本地液体。 | kg | 每收货领用退回实际期间 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 实际归属投入kg / 同一配置的验收设备数量 | 证实坯料图样校准重量库存平衡SDS |
| `cp_energy` | all_processes | actual stage electricity | 实际用户侧表计记录 | 阶段；表计kWh；实际期间；供货电压地区；实际因果共享负载；验收数量 | 读取校准用户接口阶段表计，并按当前因果记录归属实际切割加工洗干计量待机返工电力。按3.6 MJ/kWh换kWh到MJ后设备采集，主轴额定功率不是实际期间能量。 | MJ | 实际代表期间 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 实际归属电力MJ / 同一配置的验收设备数量 | 原表计校准因果负载供货依据 |
| `cp_waste` | all_processes | actual named exported waste | 外运称重组成接收记录 | 具名废物；合金批次；干湿kg；夹带液；组成；接收方；保留边角再用外运；验收数量 | 测每实际外运分流废物kg及实际组成接收方，核对干金属湿液。保留文件化作业可用坯料不是弃置废物。收集液为往接收方技术圈废物，不是未处理基础水排放。 | kg | 每外运实际期间 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 实际外运废物kg / 同一配置的验收设备数量 | 原重量分析实际合同接收联单 |
| `cp_emission` | cleaning | conditional IPA air release | 物质特异采样或闭合溶剂平衡 | CAS；实际空气子介质；浓度；流量时长；领用回收残留余留；检出不确定性；验收数量 | 按匹配采样或文件化闭合领用回收残留余留平衡量化实际控制后CAS67-63-0室外释放。保留无作业未测低于检出区别，无全蒸发通用VOC因子。 | kg | 实际代表溶剂控制期间 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 实际释放kg / 同一配置的验收设备数量 | 采样校准实验室记录溶剂平衡 |
| `cp_configuration` | all_processes | part drawing and acceptance | 受控材料零件生产记录 | 零件号图样版次序号；合金状态坯料批晶粒；实际加工清洗路线；实际检查范围结果校准处置；未涂覆状态缺少后阶段 | 追溯此民用细节件当前批准坯料证书图样工单计划。记录实际要求尺寸表面清洁及具体要求材料无损检查处置，方法准则来自当前受控记录。不推定通用无损疲劳试验阈值，后续表面装配另声明。 | kg | 每图样材料批次配置改变 | 实际声明代表生产期间 | 声明工厂实际归属阶段供货入口 | 限定随附每验收同配置设备 | 签认坯料图样工单检查处置记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_mass` | 所有清单行 | q_ref = q_item / M; q_item = 每台验收成品设备的交换数量; q_ref = 每 1 kg 参考流的交换数量。 | q_item; M; cp_mass | q_ref |  |
| `period_conversion` | period records | 按当前因果记录归属实际期间库存表计外运总量至一种图样版次合金状态配置；除实际验收数量取得q_item，分子保留消耗拒收返工。不同坯料等级几何后续表面状态不得暗中混合。 | cp_stock; cp_energy; cp_waste; cp_mass | q_item |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `mass_provenance` | cp_mass | 须在全部纳入清洗干燥及声明交付状态零件验收后称重。正M须当前实际校准个体完整零件称重量程分辨校准原皮重净读数签认图样配置序号。M排除验收前移除连筋工装包装。独立核对归属板料到验收零件kg保留库存干边角屑实际拒收并拆湿液。CAD体积密度目录名义重仅核对，不代替实测净M。 | cp_mass; cp_stock; cp_waste; cp_configuration |
| `net_configuration` | finished_rib | 参考为精确图样版次合金状态实际检查条件一种清洁整体未涂覆细节件。仅包括实际永久零件材料文件化余留膜一次；排除工装临时连筋涂层密封剂散装紧固件包装。未执行涂覆无损装配披露，不假设通过。受限接口设备名词指一个完整翼肋。 | cp_mass; cp_configuration |
| `completeness_balance` | all exchanges | 完整整厂声明前展开实际工单供货公用记录：实际锯润滑剂消耗刀片磨料清洗添加剂压缩空气热供货工装磨耗包装擦拭介质额外废物组分须自身具体交换。核对板套料库存零件边角屑拒收及全部液领用回收余留废物排放，不用默认产率。链接实际上游运输接收方，披露遗漏检出限不确定性分配敏感性。 | cp_stock; cp_energy; cp_waste; cp_emission |
| `source_limits` | external sources | 官方Figeac材料去除描述及Airbus细节件大部段总装分开描述仅支持路线入口区别。不证实此翼肋合金状态图样槽化学无损要求实际产量产率适航批准。须当前受控前景计划实际重量独立方法学审查；宣传机床数航空供货百分比不作清单因子。 | figeac-metal-processing; airbus-production-gates |

## 9. 校验规则

| rule_id | applies_to | rule | source_ids |
| --- | --- | --- | --- |
| `validation_reference` | reference_flow | 核验参考产品名等于finished_rib、完整未涂覆整体锻轧板民用翼肋及当前验收图样状态正物理M kg。候选空参考UUID为声明身份缺口，不允许赋复合涂覆件无人机材料集合。 |  |
| `validation_process` | all_processes | 核验证实板批状态晶粒实际坯料工单顺序批准清洗检查原结果处置。仅检查实际要求无损材料项，不推定默认限值。后续表面防护结构装配须独立支持扩展，零件符合不建立完整航空器批准。 | figeac-metal-processing; airbus-production-gates |
| `validation_identity` | flow rows | 核验state100公开原件类型参考属性组单位材料等级路线状态介质子介质官方双语名。保留数量面积体积能量不改质量，仅匹配身份采用实际支持换算。技术圈水收集液不是资源水直接排水；即时室外IPA不是购溶剂室内长期释放。 |  |
| `validation_claims` | claims | PCR机械通过不建立实际实测清单完整摇篮到大门科学批准适航或疲劳服务等同。披露余下身份作业计量清单公用链接独立证据缺口。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 配置民用航空器铝结构细节件坯料到未涂覆加工验收前景；标题不意味着发表 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 按实际实测M相同图样材料状态结构细节件制造，链接实际板公用供货及另声明后续生产 |
| excluded_use | 完整航空器飞行适航疲劳寿命比较涂覆复合装配成品结构修理报废服务 |
| required_metadata | 零件图样版次序号批次合金状态厚度晶粒坯料证书精确几何完整性未涂覆状态实际作业检查验收净M kg原重量套料库存废物液体平衡场址期间供货分配上游后阶段接收链接 |
| required_quality_disclosure | 身份来源作业计量完整性链接缺口实际拒收返工保留边角回收检出不确定性截断分配敏感性 |
| update_trigger | 图样版次坯料合金状态几何加工清洗检查验收净状态后续表面装配工厂供货期间发运包装改变 |

## 11. 数据源

| 来源 id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| figeac-metal-processing | handbook | FIGEAC AERO, Metal processing, undated official page, Our specialised activity: metal machining by material removal; High-technology specialised machines; Continuously improving machining skills. https://www.figeac-aero.com/en/metal-processing | 铝航空结构件及按客户规范从坯料材料去除加工；不转数量产率实际合金状态化学必需试验。 |
| airbus-production-gates | handbook | Airbus, Production, undated official page, Major components and aerostructures production. https://www.airbus.com/en/products-services/commercial-aircraft/the-life-cycle-of-an-aircraft/production | 区分细节件制造结构部段装配最终航空器装配；不采用供货百分比通用零件工艺配方。 |
