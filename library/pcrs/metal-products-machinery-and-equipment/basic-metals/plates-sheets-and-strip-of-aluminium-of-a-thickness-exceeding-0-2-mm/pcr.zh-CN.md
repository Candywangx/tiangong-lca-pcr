---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-aluminium-of-a-thickness-exceeding-0-2-mm
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 厚度超过 0.2 mm 的铝板、铝片和铝带

## 1. 范围与适用性

本 PCR 适用于成品公称厚度大于 0.2 mm、以平板、卷材或定尺形式在轧制或精整工厂门口交付的变形铝或铝合金板、片和带。范围包括非合金和合金产品、矩形和非矩形产品，以及轧制表面或经表面处理的交付状态；表面处理必须声明并纳入前景边界。

本 PCR 不限定下游应用。它可支持电池壳体、光伏结构、交通、建筑等用途的前景数据包，但不得以单一应用、合金、状态、厚度、轧制路线或涂层代表整个类别。仅当产品组合、按产量加权方法和路线覆盖均有记录时，才允许建立类别平均数据集。

厚度不超过 0.2 mm 的铝箔、尚未达到声明交付状态的再轧坯、挤压型材、棒、杆、线、管、铸件、已制造的壳体或结构，以及下游冲压、成形、连接、安装、使用和寿命终止活动不属于本产品类别。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.plates-sheets-and-strip-of-aluminium-of-a-thickness-exceeding-0-2-mm |
| classification_refs | CPC 3.0: 41534，精确 |
| covered_products | 成品公称厚度 > 0.2 mm、以卷材或定尺形式交付的变形铝或铝合金板、片和带，包括已声明的轧制表面、清洗、预处理、阳极氧化、包覆、涂漆或其他表面处理状态 |
| excluded_products | 铝箔 ≤ 0.2 mm；未达到声明交付状态的再轧坯；挤压材、棒、杆、线、管和铸件；已制造部件；下游产品制造、安装、使用和寿命终止 |
| representative_product | 生产者门口 1,000 kg 声明的铝板、铝片或铝带；具体数据集代表其声明的合金、状态、厚度、路线、表面和交付状态，而非将类别视作单一无差别牌号 |
| production_route | 声明铸锭/铸坯热轧、连续铸造或铸轧、冷轧顺序、退火或其他热处理、表面处理、切边/分条和包装；识别外购与现场生产的铸轧坯 |
| market_state | 生产者门口、已达到声明客户交付状态的半成品平轧铝产品 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 成品公称厚度大于 0.2 mm、处于声明生产者门口交付状态的铝或铝合金板、片或带 |
| How much | 1,000 kg 可销售产品净质量，不含包装 |
| How well | 符合声明的合金牌号、状态、公称厚度与公差、几何形状、表面处理、表面质量和交付规范 |
| How long or cycle | 一个生产批次或按报告期分配并归一化到参考量的生产 |
| reference_flow_link | `4f197be4-7b3b-11dd-ad8b-0800200c9a66` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1,000 kg |
| 参考产品流 | 铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 合金牌号与成分规范；状态与热处理状态；成品公称厚度 > 0.2 mm 及公差；板、片或带形式以及卷材/定尺几何；热轧、冷轧或连续铸造/铸轧路线；铸锭、铸坯、铝液或连铸坯来源；退火及其他热处理；表面处理、包覆或涂层；原生铝、消费前再生铝和消费后再生铝比例及计算方法；内部轧制边料回用路线；轧制表面和最终交付状态；工厂、地理范围和参考期 |

构建前景数据包时，必须在数据集元数据、过程说明、参考流注释、产品说明或等效字段中声明 `必需限定信息` 所列各项。缺少任一必需限定信息时，该数据包的参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 可销售参考产品净量 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 将数据包归一化为声明交付状态的 1,000 kg 不含包装产品；包装单独报告。 |
| `thickness_identity` | 参考产品 | 公称厚度 | mm | 记录成品公称厚度及适用公差；所有被代表产品必须大于 0.2 mm。 |
| `area_to_mass` | 按面积采集的数据 | Mass | kg | 使用实测批次质量，或结合产品特定厚度和密度的声明几何换算；披露换算方式，不得以单一合金密度掩盖混合产品组合。 |
| `metal_balance` | 含铝输入和输出 | Mass | kg | 采用统一的干金属质量基准，核对净库存变化、可销售产品、内部回用废料、外送废料、铝渣和未回收金属。 |
| `recycled_share` | 金属炉料组成 | 质量分数 | % | 根据可追溯炉料记录计算原生、消费前和消费后比例；单独报告内部回用料，并说明其是否不计入再生含量声明。 |
| `energy_carriers` | 电力和燃料 | Energy | kWh 或 MJ | 各能源载体及单位保持明确；仅在保留原始实测量和换算因子时才可换算汇总。 |

## 5. 系统边界

前景边界始于报告工厂接收声明的金属原料；当铸造由同一产品系统控制时，可始于接收铝液；终止于铝板、铝片或铝带达到声明交付状态并在生产者门口形成可销售净产品。应纳入全部所选路线操作、公用工程、消耗品、直接排放、现场废物处理以及边界内受控的内部废料重熔。上游原生铝、再生铝锭、合金元素、电力、燃料、化学品、水、包装和场外处理作为相应产品或废物流连接适当上游数据集。

### 边界抽象

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 报告工厂接收已识别的铸锭、轧制铸坯、铝液、连铸带坯或外购再轧坯 |
| starting_condition_role | 上游产品输入，披露其原生/再生来源、合金族、地理范围和供应商数据集；现场铸造受报告系统控制时作为前景过程 |
| product_classification_scope | CPC 3.0 41534，成品厚度 > 0.2 mm 的板、片和带；铝箔 ≤ 0.2 mm 及其他铝产品形态不在范围内 |
| recursive_input_rule | 外购同类别板、片、带或再轧坯仍作为显式产品输入；前景仅建模实际执行的下游转化，并连接外购输入的上游数据集，不得递归重建同类别生产 |
| upstream_dataset_requirement | 对原生铝、再生变形合金锭、铸轧坯、合金添加物、能源、化学品、水、包装和场外废物处理采用供应商特定或其他具有代表性的数据集；披露地理、技术和时间不匹配 |
| disclosure | 声明路线、铸轧坯来源、合金/状态、厚度、退火、表面处理、原生/再生比例、内部和外送废料路线、交付状态、截断及报告工厂之外实施的操作 |

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `boundary_route_complete` | 前景生产路线 | 纳入达到声明交付状态所需的全部受控操作：适用时包括原料准备或现场铸造、热轧或连续铸造/轧制路线、冷轧、退火/热处理、表面处理、切边/分条、内部废料处理和包装。 | `european-aluminium-epr-2024` |
| `boundary_upstream_visible` | 外购金属原料 | 将原生铝、再生变形合金锭、铸坯、铝液和再轧坯保留为可见的上游产品输入，采用来源特定数据集并披露原生/再生比例。 | `european-aluminium-epr-2024` |
| `boundary_recursive_input` | 外购同类别输入 | 不得把外购同类别板、片或带递归建模为报告工厂生产；应连接其上游数据集，并仅纳入实际发生的下游转化。 | `iso-14044-2006` |
| `boundary_downstream_excluded` | 下游应用 | 排除制造电池壳体、光伏支架、车辆、建筑产品或其他部件，也排除生产者门口之后的配送、安装、使用和寿命终止，除非单独声明的研究扩展了系统。 | `unsd-cpc-3-0-41534` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cast_stock_preparation` | 金属原料接收、熔体准备和铸轧坯生产 | 必需（`required`） | 始终记录接收的金属原料；熔炼、合金化、熔体处理、铸造和均匀化仅在前景系统控制时纳入 | 建立合金、铸轧坯来源和金属炉料平衡 | 每 1,000 kg 可销售净产品 |
| `hot_rolling` | 铸坯加热和热轧 | 条件纳入（`conditional`） | 铸锭/铸坯热轧路线纳入 | 生产热轧板、片或卷以及路线特定废料 | 每 1,000 kg 本过程输出 |
| `continuous_casting_rolling` | 连续铸造或铸轧 | 条件纳入（`conditional`） | 铝液不经传统铸锭路线而直接铸成带坯或薄板坯并轧制时纳入 | 生产连铸带坯或卷材及路线特定废料 | 每 1,000 kg 本过程输出 |
| `cold_rolling` | 冷轧 | 条件纳入（`conditional`） | 热轧或连铸坯经冷轧减薄或精整时纳入 | 达到声明厚度、力学状态和表面 | 每 1,000 kg 本过程输出 |
| `annealing_heat_treatment` | 退火和其他热处理 | 条件纳入（`conditional`） | 纳入达到声明状态所需的每个批式或连续退火、固溶、时效或稳定化步骤 | 建立声明状态和交付状态 | 每 1,000 kg 处理后输出 |
| `surface_treatment` | 清洗、预处理、包覆、阳极氧化或涂层 | 条件纳入（`conditional`） | 任何表面处理属于销售产品时纳入；未经处理的轧制表面产品须明确 | 建立声明表面和涂层状态 | 每 1,000 kg 处理后输出 |
| `finishing_delivery` | 切边、分条、检验和包装 | 必需（`required`） | 纳入使卷材或定尺产品达到声明可销售交付状态所需的操作 | 产生参考流并闭合金属平衡 | 每 1,000 kg 可销售净产品 |

### 过程：金属原料接收、熔体准备和铸轧坯生产（`cast_stock_preparation`）

#### 输入

##### 产品流

###### 金属炉料和外购铸轧坯（`metallic_charge`）

分别记录每种原生铝、再生变形合金锭、合金添加物、轧制铸坯、铝液或外购再轧坯。保留供应商、合金、质量、消费前/消费后来源及是否为内部回用料。

- 选定流：原生铝、再生铝、合金材料、铝液、轧制铸锭/铸坯或外购再轧坯；每种不同材料身份建立一个交换
- 流属性/单位：Mass / kg
- 数量规则：实测验收质量，并按有记录的库存变化调整
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg `cast_stock_preparation` 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cast_stock_records`
- 来源：`european-aluminium-epr-2024`

###### 铸造公用工程和消耗品（`casting_utilities`）

纳入现场熔炼或铸造时，将电力、燃料、熔剂、晶粒细化剂、除气介质、冷却水和其他消耗品分别记录。

- 选定流：载体或材料特定产品流；不得用汇总通用流替代
- 流属性/单位：Energy 或 Mass / 实测载体单位、MJ、kWh 或 kg
- 数量规则：归属于所纳入批次的计量或采购量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg `cast_stock_preparation` 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cast_stock_records`
- 来源：`european-aluminium-epr-2024`

##### 废物流

#### 输出

##### 产品流

###### 准备后的轧制坯料（`prepared_rolling_stock`）

记录转移到下一纳入操作的合金铸坯、铸锭或其他路线特定轧制坯料。

- 选定流：合金和路线特定的轧制坯料
- 流属性/单位：Mass / kg
- 数量规则：实测转移质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg `cast_stock_preparation` 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cast_stock_records`
- 来源：`european-aluminium-epr-2024`

##### 废物流

###### 铝渣、撇渣和未回收金属（`casting_residues`）

按实际去向和金属回收路线区分铝渣、撇渣、过滤残渣和其他含金属残渣。

- 选定流：去向特定的含铝残渣或废物流
- 流属性/单位：Mass / kg
- 数量规则：实测外送或内部处理质量以及实测回收金属
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg `cast_stock_preparation` 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cast_stock_records`
- 来源：`iai-aluminium-scrap-2025`

##### 基本流

###### 铸造直接排放（`casting_direct_releases`）

对归属于所纳入熔炼和铸造操作的每种受监测空气或水排放建立独立基本交换。

- 选定流：数据集构建时确认的物质特定天工基本流
- 流属性/单位：物质适用属性 / 实测报告单位
- 数量规则：监测排放量或经允许的质量平衡计算，不得用通用排放流替代
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg `cast_stock_preparation` 输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cast_stock_records`

### 过程：铸坯加热和热轧（`hot_rolling`）

#### 输入

##### 产品流

###### 热轧输入（`hot_rolling_inputs`）

将轧制坯料、燃料、电力、轧制油、冷却水和轧辊车间消耗品分别记录；保留铸锭/铸坯来源和合金身份。

- 选定流：路线特定轧制坯料，以及分别记录的载体和材料特定输入
- 流属性/单位：Mass 或 Energy / kg、kWh、MJ 或实测载体单位
- 数量规则：归属于热轧批次的实测领用、计量或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 热轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_records`
- 来源：`european-aluminium-epr-2024`

##### 废物流

#### 输出

##### 产品流

###### 热轧板、片或卷（`hot_rolled_output`）

保留合金、出口厚度、路线，以及该输出是中间品还是声明可销售状态的信息。

- 选定流：合金、厚度和路线特定的热轧中间品或可销售产品
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 热轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_records`

##### 废物流

###### 热轧切边和切头废料（`hot_rolling_scrap`）

区分产品系统内部回用与跨越边界的废料；记录合金分选和去向。

- 选定流：路线和去向特定的铝废料
- 流属性/单位：Mass / kg
- 数量规则：重熔或外送前的实测废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 热轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_records`
- 来源：`iai-aluminium-scrap-2025`

##### 基本流

###### 热轧直接排放（`hot_rolling_releases`）

分别记录每种受监测排放，并保留其与轧制批次及相关治理设备的关联。

- 选定流：每种受监测直接排放对应独立物质特定基本流
- 流属性/单位：物质适用属性 / 实测报告单位
- 数量规则：归属于该批次的炉窑、空气治理和废水排放监测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 热轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_hot_rolling_records`

### 过程：连续铸造或铸轧（`continuous_casting_rolling`）

#### 输入

##### 产品流

###### 连续路线输入（`continuous_route_inputs`）

分别记录铝液或其他声明金属原料、电力、燃料、冷却水、润滑剂和铸轧辊消耗品。

- 选定流：路线特定铝液，以及分别记录的载体和材料特定输入
- 流属性/单位：Mass 或 Energy / kg、kWh、MJ 或实测载体单位
- 数量规则：归属于批次的实测进料、计量或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 连铸/轧制输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_continuous_route_records`
- 来源：`european-aluminium-epr-2024`

##### 废物流

#### 输出

##### 产品流

###### 连铸带坯或卷材（`continuous_route_output`）

在后续操作中保留合金、出口厚度及连续铸造或铸轧路线身份。

- 选定流：合金、厚度和路线特定的连铸带坯、薄板坯或轧制卷
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 连铸/轧制输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_continuous_route_records`

##### 废物流

###### 连续路线废料和残渣（`continuous_route_scrap`）

将内部回用金属与送往其他处理或回收路线的残渣、废料分开。

- 选定流：去向特定的铝废料、铝渣或铸造残渣
- 流属性/单位：Mass / kg
- 数量规则：内部回用、处理或外送前的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 连铸/轧制输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_continuous_route_records`
- 来源：`iai-aluminium-scrap-2025`

##### 基本流

### 过程：冷轧（`cold_rolling`）

#### 输入

##### 产品流

###### 冷轧输入（`cold_rolling_inputs`）

分别记录进入的热轧或连铸坯、电力、轧制润滑剂、冷却剂和清洗介质。

- 选定流：声明的铝坯，以及分别记录的载体和材料特定输入
- 流属性/单位：Mass 或 Energy / kg、kWh、MJ 或实测载体单位
- 数量规则：归属于批次的实测领用、计量或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`european-aluminium-epr-2024`

##### 废物流

#### 输出

##### 产品流

###### 冷轧板、片或带（`cold_rolled_output`）

为转移或销售的输出保留进入路线、达到的厚度、合金和状态阶段。

- 选定流：合金、厚度、状态阶段和路线特定的冷轧中间品或可销售产品
- 流属性/单位：Mass / kg
- 数量规则：实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 冷轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`

##### 废物流

###### 冷轧切边废料和废介质（`cold_rolling_wastes`）

将铝切边料与废轧制油、过滤物和废水处理残渣分开。

- 选定流：去向特定的铝废料或非金属废物流
- 流属性/单位：Mass / kg
- 数量规则：按废物身份和去向记录实测产生质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 冷轧输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cold_rolling_records`
- 来源：`iai-aluminium-scrap-2025`

##### 基本流

### 过程：退火和其他热处理（`annealing_heat_treatment`）

#### 输入

##### 产品流

###### 热处理输入（`heat_treatment_inputs`）

分别记录铝中间品、电力、每种炉窑燃料及保护或工艺气体，并识别批式或连续处理。

- 选定流：声明铝中间品，以及分别记录的能源载体和工艺气体流
- 流属性/单位：Mass 或 Energy / kg、kWh、MJ 或实测载体单位
- 数量规则：归属于热处理周期的实测装炉、计量和采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`
- 来源：`iso-2107-2023`

##### 废物流

#### 输出

##### 产品流

###### 热处理铝产品（`heat_treated_output`）

将合格输出关联到炉次，并保留合金、厚度和形成的状态牌号。

- 选定流：合金、状态、厚度和路线特定的处理后中间品或可销售产品
- 流属性/单位：Mass / kg
- 数量规则：与记录炉次关联的实测合格输出质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_heat_treatment_records`

##### 废物流

##### 基本流

###### 热处理直接排放（`heat_treatment_emissions`）

仅计算归属于所记录处理周期的排放，并将每种排放物质分别记录。

- 选定流：每种受监测直接排放对应独立物质特定基本流
- 流属性/单位：物质适用属性 / 实测报告单位
- 数量规则：归属于处理周期的监测排放或燃料平衡直接炉窑排放
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：根据采集计算（`calculated_from_collection`）
- 采集协议：`cp_heat_treatment_records`

### 过程：清洗、预处理、包覆、阳极氧化或涂层（`surface_treatment`）

#### 输入

##### 产品流

###### 表面处理输入（`surface_treatment_inputs`）

分别记录铝基材、水、电力、清洗剂、蚀刻剂、转化处理化学品、阳极氧化电解液、包覆材料、油漆或其他涂层材料。

- 选定流：声明铝基材，以及处理特定材料、水和能源流
- 流属性/单位：Mass、体积或 Energy / kg、m3、kWh、MJ 或实测单位
- 数量规则：归属于处理产品的实测领用、槽液补加、计量或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`
- 来源：`iso-6361-1-2011`

##### 废物流

#### 输出

##### 产品流

###### 表面处理铝产品（`surface_treated_output`）

在产品记录中保留基材、处理身份和保留处理材料的质量。

- 选定流：产品特定的处理后铝板、片或带；不得用其代表未经处理的整个类别
- 流属性/单位：Mass / kg
- 数量规则：包括保留涂层质量的实测合格输出，并披露铝基材和涂层质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`

##### 废物流

###### 表面处理废水和废槽液（`surface_treatment_wastes`）

按组成和实际处理去向分别记录液体、污泥、过滤物和涂层废物。

- 选定流：去向特定的废水、废槽液、污泥、过滤物或涂层废物
- 流属性/单位：Mass 或体积 / kg 或 m3
- 数量规则：按处理去向实测排放或外送质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`

##### 基本流

###### 表面处理直接排放（`surface_treatment_releases`）

将现场处理后的受监测残余排放分别记录为物质特定基本交换。

- 选定流：现场处理后每种受监测排放对应独立物质特定基本流
- 流属性/单位：物质适用属性 / 实测报告单位
- 数量规则：归属于处理产品的空气或水排放监测量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 处理后输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_records`

### 过程：切边、分条、检验和包装（`finishing_delivery`）

#### 输入

##### 产品流

###### 精整输入（`finishing_inputs`）

分别记录进入的铝产品、电力、保护膜、纸张、托盘、捆带和其他包装。

- 选定流：声明铝中间品，以及分别记录的能源和包装材料流
- 流属性/单位：Mass 或 Energy / kg、kWh、MJ 或实测单位
- 数量规则：归属于可销售输出的实测领用、计量或采购记录
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`

##### 废物流

#### 输出

##### 产品流

###### 可销售铝板、铝片或铝带净产品（`reference_product`）

仅当全部声明的路线、热处理、表面和交付状态要求均已满足时，该流才是参考产品。

- 选定流：铝板材 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：恰好 1,000 kg 不含包装的可销售净产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：1,000 kg 参考产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

##### 废物流

###### 最终切边废料和包装废物（`finishing_wastes`）

将最终切边/分条废料与包装废物分开记录，并说明每股废料是在产品系统内部回用还是跨越系统边界。

- 选定流：去向特定的铝废料或包装废物流
- 流属性/单位：Mass / kg
- 数量规则：按身份和去向记录实测产生质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场地特定（`site_specific`）
- 归一化基准：每 1,000 kg 可销售净产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_finishing_records`
- 来源：`iai-aluminium-scrap-2025`

##### 基本流

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `allocation_subdivide` | 多种合金、厚度、状态、路线或表面状态 | 优先按批次、产线和过程细分并直接计量。不得把单一合金、单一涂层或单一应用数据集外推到整个类别。 | `iso-14044-2006` |
| `allocation_shared_operations` | 共用公用工程和精整操作 | 使用反映因果关系的物理关系，如实测能耗、炉窑占用、产线时间或处理质量；披露依据，并在选择会显著改变结果时进行敏感性检验。 | `iso-14044-2006` |
| `allocation_internal_scrap` | 同一产品系统内部回用的切边、切头和修边废料 | 通过废料总产生量及重熔/回用记录使回路可见，纳入受控重熔负荷；不得把同一内部废料同时作为避免原生铝和外部再生含量输入。 | `iai-aluminium-scrap-2025` |
| `allocation_boundary_scrap` | 进入或离开产品系统边界的过程废料 | 说明采用截断法、替代法或共产品处理，并对废料产生和废料使用一致应用；不得组合多种方法的抵扣。 | `iai-aluminium-scrap-2025` |
| `allocation_recycled_content` | 原生铝和再生铝比例 | 在分别识别内部回用、消费前和消费后废料后，根据可追溯金属炉料计算比例；披露产品系统边界和再生含量定义。 | `iai-aluminium-scrap-2025` |
| `allocation_dross` | 铝渣和撇渣 | 显式记录处理和回收金属；按其实际边界和去向建模残渣及回收操作，不得假定所有铝渣均为可销售共产品。 | `iai-aluminium-scrap-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_cast_stock_records` | `cast_stock_preparation` | 金属炉料、铸轧坯、公用工程、残渣和直接排放 | 地磅、炉料单、库存移动、仪表、实验室和环境记录 | 批次；供应商；合金；来源类别；输入/输出质量；库存变化；载体量；残渣质量；回收金属；排放量 | 按铸次核对炉料、生产和环境记录 | kg、kWh、MJ、m3 或物质报告单位 | 每个铸次/批次，按月核对 | 有代表性的连续 12 个月或声明批次 | 所有纳入熔炼/铸造产线，识别外包步骤 | 汇总合格记录，扣除有记录库存变化并按合格铸轧坯输出归一化 | 经校准秤具/仪表、成分证书、供应商声明、联单和环境报告 |
| `cp_hot_rolling_records` | `hot_rolling` | 轧制坯料、能源、消耗品、产品、废料和排放 | 生产订单、仪表、罐、地磅和环境记录 | 批次；铸坯标识；合金；输入/输出质量；燃料；电力；油；水；废料质量/去向；排放量 | 按轧制批次关联记录并核对金属质量 | kg、kWh、MJ、m3 或物质报告单位 | 每批次，按月核对 | 有代表性的连续 12 个月或声明批次 | 所有纳入热轧机和加热炉 | 优先分配直接记录，之后使用有记录的因果物理驱动量 | 校准记录、生产核对和废物联单 |
| `cp_continuous_route_records` | `continuous_casting_rolling` | 铝液、能源、消耗品、带坯、废料和残渣 | 铸造日志、仪表、罐、地磅和环境记录 | 批次；合金；铝液输入；带坯输出；燃料；电力；水；润滑剂；废料/残渣质量及去向 | 按铸造批次关联记录并核对金属质量 | kg、kWh、MJ、m3 或物质报告单位 | 每批次，按月核对 | 有代表性的连续 12 个月或声明批次 | 所有纳入铸造/轧制线 | 优先分配直接记录，之后使用有记录的因果物理驱动量 | 经校准仪表/秤具、铸造日志和废物联单 |
| `cp_cold_rolling_records` | `cold_rolling` | 进入坯料、能源、润滑剂、输出和废物 | 卷材谱系、生产订单、仪表、润滑剂和废物记录 | 卷号；合金；状态阶段；进/出厚度；输入/输出质量；电力；润滑剂；水；废料；废介质 | 按卷材/批次关联并核对金属质量 | kg、kWh、m3 或实测单位 | 每卷/批次，按月核对 | 有代表性的连续 12 个月或声明批次 | 所有纳入冷轧机 | 汇总产品特定记录；共用负荷采用已披露物理驱动量 | 卷材谱系、经校准仪表/秤具和废物联单 |
| `cp_heat_treatment_records` | `annealing_heat_treatment` | 装炉、能源、气体、输出和直接排放 | 炉批、配方、仪表和排放记录 | 炉号；周期；合金；进/出状态；装炉/输出质量；时间/温度；燃料；电力；气体；监测排放 | 将炉次与处理批次关联并按合格输出归一化 | kg、kWh、MJ、Nm3 或物质报告单位 | 每个炉次 | 有代表性的连续 12 个月或声明批次 | 所有纳入炉窑，识别外包处理 | 直接批次记录，或采用已披露的占用率/处理质量分配 | 炉窑日志、经校准仪表和符合性检验记录 |
| `cp_surface_treatment_records` | `surface_treatment` | 基材、化学品、涂层、水、能源、产品、废水和排放 | 处理批次、槽液日志、涂层记录、仪表、排放和废物记录 | 批次；处理；基材/涂层质量；化学品补加；水；能源；废水；污泥；排放量 | 关联处理批次和槽液记录；按因果驱动量分配共用槽液损失 | kg、m3、kWh、MJ 或物质报告单位 | 每批次，并核对槽液及月度数据 | 有代表性的连续 12 个月或声明批次 | 每条纳入处理/涂层线，识别外包步骤 | 直接批次记录，或有记录的面积/质量/产线时间驱动量 | 槽液分析、涂层检验、仪表校准、排放报告和联单 |
| `cp_finishing_records` | `finishing_delivery` | 进入产品、可销售输出、切边废料、包装和能源 | 卷材/定尺谱系、秤具、检验、包装和发运记录 | 产品标识；合金；状态；厚度；路线；表面；输入/输出质量；废料；包装质量；交付状态 | 将最终谱系与合格输出和发运关联；参考质量不含包装 | kg、kWh 或实测单位 | 每个可销售批次，按月核对 | 有代表性的连续 12 个月或声明批次 | 所有精整和包装线 | 汇总合格批次记录至 1,000 kg 参考产品 | 经校准秤具、检验证书、装箱单和发运记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 所有清单交换 | 归一化量 = 报告期交换量 × 1,000 kg / 报告期不含包装的可销售产品净质量 | 交换量；不含包装的可销售净质量 | 每 1,000 kg 参考产品的交换量 | `iso-14044-2006` |
| `calc_metal_balance` | 含铝流 | 金属输入 + 期初库存 = 可销售净产品 + 内部回用 + 外送废料 + 铝渣/残渣金属 + 期末库存 + 有记录未回收金属；报告核对差异 | 炉料质量；产品；废料；残渣；库存变化 | 金属平衡表和闭合差异 | `european-aluminium-epr-2024` |
| `calc_recycled_shares` | 金属炉料 | 按声明金属输入基准计算原生、消费前和消费后铝比例；单独列示内部回用并应用声明的废料方法 | 供应商声明；炉料记录；内部回用；废料来源 | 原生/再生比例及分母披露 | `iai-aluminium-scrap-2025` |
| `calc_area_mass` | 面积记录 | 质量 = 实测面积 × 声明成品厚度 × 产品特定密度；有直接批次质量时优先使用；涂层质量单独保留 | 面积；厚度；密度/成分；涂层质量 | 铝基材 kg 和涂层 kg | `iso-6361-1-2011` |
| `calc_shared_burden` | 共用产线和公用工程 | 对各产品组应用所选因果物理驱动量，并记录分母、覆盖和敏感性 | 实测总量；产线时间；炉窑占用；产量；产品组 | 按产品组分配的前景交换 | `iso-14044-2006` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 为每个被代表产品组保留合金牌号/成分标准、状态、厚度/公差、形态/几何、路线、铸轧坯来源、退火、表面处理和交付状态。 | 检验证书、成分证书、生产路线和发运记录；`iso-6361-1-2011`；`iso-2107-2023` |
| `dq_route_coverage` | 产品组合 | 类别平均数据集必须记录按产量加权和重要路线覆盖；否则发布产品或路线特定数据集。 | 生产台账和加权计算 |
| `dq_recycled_origin` | 金属炉料 | 供应商证据必须区分原生铝、消费前废料、消费后废料和内部回用，并提供质量和地理来源。 | 供应商声明、采购/炉料记录和废料追溯；`iai-aluminium-scrap-2025` |
| `dq_temporal` | 前景记录 | 除非声明批次特定数据集，否则使用有代表性的 12 个月；记录停产、异常生产和库存变化。 | 报告期完整性检查 |
| `dq_completeness` | 所有纳入操作 | 核对生产订单、仪表、采购、废物、直接排放和外包步骤；解释遗漏流，并证明其不损害研究目标。 | 签署的核对结果和遗漏登记；`iso-14044-2006` |
| `dq_uuid_identity` | 含 UUID 引用 | 确认每个选定天工流且不存储数据集版本；更窄的合金、涂层或厚度候选不得替代类别参考流。 | PCR 内容外保存的天工身份回读记录 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | 来源 |
| --- | --- | --- | --- |
| `validate_reference_identity` | 参考流 | 要求产品流 `4f197be4-7b3b-11dd-ad8b-0800200c9a66`、Mass 属性 `93a60a56-a3c8-11da-a746-0800200b9a66`、Units of mass 单位组 `93a60a57-a4c8-11da-a746-0800200c9a66`、kg，以及恰好 1,000 kg 不含包装的可销售净产品。 | `unsd-cpc-3-0-41534` |
| `validate_thickness_scope` | 产品范围 | 拒绝成品公称厚度不大于 0.2 mm 的任何被代表产品，并拒绝铝箔、挤压材、铸件或已制造部件输出。 | `unsd-cpc-3-0-41534` |
| `validate_required_qualifiers` | 数据集元数据 | 拒绝缺少合金/状态、厚度、路线、铸轧坯来源、退火、表面处理、原生/再生比例、废料回用路线或交付状态声明的数据包；明确标为不适用时须说明理由。 | `iso-6361-1-2011`；`iso-2107-2023` |
| `validate_no_narrow_proxy` | 代表性声明 | 拒绝仅基于单一合金、状态、涂层、厚度、应用或狭窄天工候选的类别平均声明，除非数据集标为产品特定且不作类别平均声明。 | `iso-14044-2006` |
| `validate_route_sequence` | 过程图 | 要求一个声明的铸轧坯起始条件，并要求热轧或连续铸造/轧制、冷轧、热处理、表面处理和精整的完整适用顺序；明确排除不适用步骤。 | `european-aluminium-epr-2024` |
| `validate_metal_balance` | 含铝流 | 要求披露金属平衡方程、库存变化和核对差异；内部回用废料不得同时计作外部输入或净输出。 | `iai-aluminium-scrap-2025` |
| `validate_scrap_method` | 废料和再生含量 | 要求分别记录内部、消费前和消费后数量，并对跨越边界的过程废料一致采用且披露一种截断、替代或共产品方法。 | `iai-aluminium-scrap-2025` |
| `validate_surface_mass` | 表面处理产品 | 要求处理身份和保留涂层/包覆质量；不得将涂层产品数据集作为未经处理产品或整个类别的默认值。 | `iso-6361-1-2011` |
| `validate_data_period` | 前景数据质量 | 要求声明地理范围、工厂/产线、参考期、产品组合覆盖、分配驱动量和外包操作证据。 | `iso-14044-2006` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 声明的铝板、铝片或铝带产品，或有记录的按产量加权产品组合的生产者门口前景数据集 |
| downstream_use | 当产品身份、地理范围、时期、路线和分配符合预期用途时，作为下游 process 或 lifecyclemodel 构建的次级数据集和背景数据集 |
| allowed_use | 产品或路线特定 LCA；供应商数据包；消耗声明半成品的电池、光伏、交通或建筑模型；有记录的按产量加权类别组合 |
| excluded_use | 代表铝箔 ≤ 0.2 mm、挤压材、铸件或已制造部件；声称单一合金/涂层/应用代表整个类别；产品功能或遗漏生命周期阶段不同的比较声明 |
| required_metadata | PCR id；参考流 UUID；合金和成分规范；状态；厚度/公差；形态/几何；路线和铸轧坯来源；退火；表面处理；原生/消费前/消费后比例；内部/外送废料路线；交付状态；工厂/地理范围；参考期；分配和截断方法 |
| required_quality_disclosure | 产品组合覆盖；前景记录覆盖；供应商数据覆盖；金属平衡闭合；仪表/秤具质量；时间和地理代表性；代理数据；外包步骤；分配敏感性；未解决身份缺口 |
| update_trigger | 合金/产品组合、铸轧坯或原生/再生来源、轧制路线、退火、涂层、废料处理、能源供应、工厂技术、分配方法、数据期或参考流身份发生重大变化 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-0-41534` | 官方指南（`official_guidance`） | 联合国统计司，Central Product Classification Version 3.0，子类 41534 解释性说明和结构，https://unstats.un.org/unsd/classifications/Econ/CPC（检索于 2026-08-09） | 产品类别边界、>0.2 mm 阈值，以及与铝箔和其他铝产品形态的区分 |
| `iso-6361-1-2011` | 标准（`standard`） | ISO 6361-1:2011，Wrought aluminium and aluminium alloys — Sheets, strips and plates — Part 1: Technical conditions for inspection and delivery，https://www.iso.org/standard/51842.html（2022 年确认继续有效；检索于 2026-08-09） | 交付状态身份、平轧产品范围、检验信息以及产品特定厚度/表面披露 |
| `iso-2107-2023` | 标准（`standard`） | ISO 2107:2023，Aluminium and aluminium alloys — Wrought products — Temper designations，https://www.iso.org/standard/85023.html（检索于 2026-08-09） | 强制识别状态和热处理状态 |
| `iso-14044-2006` | 标准（`standard`） | ISO 14044:2006 及 Amendments 1:2017、2:2020，Environmental management — Life cycle assessment — Requirements and guidelines，https://www.iso.org/standard/38498.html（2022 年确认继续有效；检索于 2026-08-09） | 系统边界、清单、分配、数据质量和报告框架 |
| `european-aluminium-epr-2024` | 数据集（`dataset`） | European Aluminium，Environmental Profile Report 2024，https://european-aluminium.eu/wp-content/uploads/2025/07/Environmental-Profile-Report_2024-V20.pdf（检索于 2026-08-09） | 铝价值链分解；铸坯到板片的轧制边界；原生、再熔变形合金及半成品路线区分；前景过程覆盖 |
| `iai-aluminium-scrap-2025` | 官方指南（`official_guidance`） | International Aluminium Institute，How to Treat Scrap Flows in Carbon Footprint Calculations for Aluminium Products，2025 年 10 月，https://international-aluminium.org/wp-content/uploads/2025/10/Carbon-Footprint-of-Recycled-Aluminium-IAI-Document-Final.pdf（检索于 2026-08-09） | 内部废料与过程废料定义、再生含量披露、铝渣处理以及一致的截断/替代/共产品建模 |
