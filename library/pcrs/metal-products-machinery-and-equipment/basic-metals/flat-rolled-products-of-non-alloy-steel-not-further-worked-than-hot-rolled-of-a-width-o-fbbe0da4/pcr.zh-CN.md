---
pcr_id: pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-fbbe0da4
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 宽度为600毫米及以上、除热轧外未经进一步加工的非合金钢平板轧材

## 1. 范围与适用性

本 PCR 适用于成品宽度至少为 600 mm、从钢铁厂交付时仅经过热轧而未再进行冶金加工的未加工铁或非合金钢平板轧材。范围包括卷材及定尺切割的薄板或中厚板交付形态，也包括热轧原始表面和酸洗表面状态。当临时涂油仅用于防腐且单独声明时，可作为酸洗产品的随附处理；包覆、镀层、涂漆、聚合物涂层或其他涂层产品不属于本类别。

本 PCR 用于支持电力设备、光伏支架、建筑及一般制造业共用的高频基础材料前景数据包。其建立理由是方法学需要，而不是为了填补分类覆盖：炼钢路线、板坯供应、外部再生料投入、厂内返回废钢、热轧成材率、卷材与板材精整差异以及可选酸洗都会对清单产生实质影响，必须保持可见。

本 PCR 排除冷轧产品、不锈钢、合金钢、宽度小于 600 mm 的产品、涂层产品及下游构件制造。纵剪至小于 600 mm、压型、冲压、折弯、焊接、钻孔、镀锌、涂漆、装配，以及支架、框架、型材、外壳或其他构件制造均属于下游产品系统。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.basic-metals.flat-rolled-products-of-non-alloy-steel-not-further-worked-than-hot-rolled-of-a-width-o-fbbe0da4 |
| classification_refs | CPC 3.0:41211（精确分类范围；接受映射另行治理） |
| covered_products | 宽度至少为 600 mm、卷材、薄板或中厚板形态、除热轧外未经进一步加工的无涂层铁或非合金钢平板轧材；热轧原始表面或酸洗表面状态 |
| excluded_products | 冷轧钢；不锈钢或其他合金钢；宽度小于 600 mm；包覆、镀层、镀锌、涂漆、聚合物涂层或其他涂层产品；下游制造构件 |
| representative_product | 钢铁厂大门处的生产混合热轧非合金钢卷；交付形态已声明且采用匹配产品流身份时，薄板或中厚板仍在范围内 |
| production_route | 声明 BF-BOF、废钢-EAF、DRI-EAF、其他经评审路线或外购板坯热轧；对结果有实质影响时声明连铸或模铸；没有记录的产量加权依据时不得合并路线 |
| market_state | 钢铁厂大门处可发运的净产品，卷材或定尺薄板/中厚板，已声明钢种、厚度、宽度、表面状态、边部状态及酸洗/涂油状态 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 在钢铁厂大门处提供宽度至少为 600 mm、除热轧外未经进一步加工的非合金钢平板轧材 |
| How much | 1 公吨（1,000 kg）净产品质量，不含包装 |
| How well | 符合所声明钢种和尺寸规格；声明交付形态、表面状态、生产路线、再生料投入类别及酸洗/涂层边界 |
| How long or cycle | 一个已识别的生产批次，或通常覆盖连续 12 个月的产量加权期间 |
| reference_flow_link | `ref_hot_rolled_non_alloy_steel` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 钢铁厂大门处 1,000 kg 净产品 |
| 参考产品流 | Steel hot rolled coil `2126a80d-1cd0-46e4-8f30-341bd20a1d64` |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 钢种或规格；厚度；成品宽度；卷材或薄板/中厚板交付；热轧原始表面或酸洗表面状态；边部状态；BF-BOF、废钢-EAF、DRI-EAF、其他经评审路线或外购板坯路线；外部消费前和消费后废钢占比；厂内返回废钢；是否包含酸洗；不含涂层；地理范围；生产期间 |

所选 UUID 作为生产混合热轧钢卷的默认代表性身份，原因是经核验的天工数据行属于 CPC 41211、以 Mass 为定量参考，且没有把炼钢路线限定为某一种命名技术。薄板或中厚板数据包应在可用时采用经核验、适用于板材状态的 CPC 41211 产品流，不得仅为填充必填字段而复用卷材 UUID。范围较窄的高炉路线流 `4f1a1835-7b3b-11dd-ad8b-0800200c9a66` 和元数据相互矛盾的流 `ce3ac926-5d6f-4558-9edc-67179d93dde4` 只能作为候选，不得作为默认流。

构建前景数据包时，`必需限定信息` 中的每一项都必须出现在数据集元数据、过程说明、参考流备注、产品说明或等效字段中。缺失限定信息时，参考流定义不完整。

## 4. 计量与单位规则

| 规则编号 | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 最终参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用钢铁厂大门处计量的净产品质量；从参考数量中排除托盘、捆带、包装膜及其他包装，并在清单中单独记录包装。 |
| `product_dimensions` | 最终参考产品 | 声明尺寸 | mm | 记录成品厚度和宽度并核验宽度至少为 600 mm；保留适用规格及测量依据。 |
| `delivery_surface_state` | 最终参考产品 | 声明属性 | n/a | 记录卷材或薄板/中厚板交付、热轧原始表面或酸洗状态、边部状态及临时涂油；产品声明含冷轧或包覆、镀层、涂漆、聚合物、金属或其他涂层时不予接受。 |
| `route_and_recycled_input` | 钢和板坯供应 | 质量及声明路线 | kg 和质量百分比 | 分别报告炼钢路线、外部消费前废钢、外部消费后废钢和厂内返回废钢；说明再生料含量方法及分母。 |
| `energy_accounting` | 燃料、电力、蒸汽和回收过程气体 | 能量，或带能量换算的质量/体积 | MJ、kWh、kg 或 m3 | 保留计量账单或仪表的原始单位并记录低位发热量及其他换算因子；防止厂内产生并复用的过程气体重复计数。 |
| `water_accounting` | 取水、循环水及排水 | 体积 | m3 | 分别记录取水、补水、循环水、蒸发水和排水；不得把闭路循环水视为新增取水。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 声明前景系统从一体化原料与炼钢工序开始，还是从外购连铸或模铸非合金钢板坯开始；识别板坯钢种、路线、供应商地理范围、再生料投入依据及上游数据集。 |
| starting_condition_role | 该起始条件用于防止在未声明情况下混合从摇篮到大门的钢铁生产与大门到大门的热轧。 |
| product_classification_scope | CPC 3.0:41211，仅限宽度至少为 600 mm、无涂层、除热轧外未经进一步加工的非合金钢平板轧材。 |
| recursive_input_rule | 已属于本 PCR 类别的外购产品继续作为可见产品投入并关联独立上游数据集；不得递归套用本 PCR，也不得将其重新标记为未加工板坯。 |
| upstream_dataset_requirement | 每项外购板坯、铁水、DRI 或同类别钢材投入都必须关联在地理、时间、技术、路线及再生料投入方面有代表性的上游数据集，或明确记录代理数据。 |
| disclosure | 声明从摇篮到大门或大门到大门范围、炼钢路线、铸造路线、产品形态、钢种、尺寸、表面状态、酸洗和涂油、无涂层边界、再生料投入类别、共产品处理、包装、地理范围及生产期间。 |

规范性边界规则如下：

| 规则编号 | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_scope_basis` | 已声明前景系统 | 从摇篮到大门的数据包应纳入原料与能源供应、炼钢与铸造、热轧、厂内辅助服务、废水与废物处理以及发运准备；仅当关联并披露上游板坯数据集和边界时，大门到大门数据包才可从外购板坯开始。 | `worldsteel-lci-methodology-2017` |
| `boundary_hot_rolling_core` | 热轧前景系统 | 纳入原料储存与搬运、适用的表面修整、再加热、除鳞、粗轧与宽度压下、轧至最终尺寸和性能、冷却、带钢卷取、薄板或中厚板切割、修边、轧辊间负荷、厂内运输、公用工程、直接排放、水循环及废物管理。 | `eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `boundary_pickling_state` | 酸洗或涂油交付 | 仅当发运产品声明为酸洗或酸洗并涂油时，纳入酸洗、漂洗、酸再生或中和、相关能源和水、废液和污泥处理、直接排放及临时涂油；其他情况排除这些工序。 | `eu-jrc-fmp-bref-2022`; `worldsteel-hrc-eco-profile-2022` |
| `boundary_product_exclusions` | 产品适用性 | 排除冷轧、不锈钢或其他合金钢、宽度小于 600 mm、包覆、镀层、镀锌、涂漆、聚合物或其他涂层，以及下游纵剪至低于类别宽度、成形、机加工、焊接、装配或构件制造。 | `unsd-cpc-3-2025`; `unsd-hs-7208`; `aisc-steel-construction-pcr-2025` |
| `boundary_route_separation` | 路线与产品混合 | BF-BOF、废钢-EAF、DRI-EAF 和外购板坯路线应保持分开；只有在需要产量加权混合且记录加权期间、产品等效性、地理范围和路线占比时才可合并。 | `worldsteel-lci-methodology-2017`; `worldsteel-hrc-eco-profile-2022` |
| `boundary_packaging` | 发运准备 | 将随产品到达大门的包装作为单独清单投入纳入，同时将其排除在净参考产品质量之外。 | `worldsteel-lci-study-2021` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `p_slab_supply` | 炼钢与板坯供应 | conditional | 报告组织控制炼钢或铸造时作为前景纳入；否则关联有代表性的上游板坯数据集。 | 确立路线、金属炉料、再生料投入、铸造及板坯负荷。 | 供应热轧的铸坯质量 kg |
| `p_hot_rolling` | 板坯再加热、除鳞与热轧 | required | 始终纳入。 | 将板坯转化为热轧带材或板材，同时记录成材率、能源、水、直接排放、氧化铁皮、废钢及废物。 | 离开热轧线的热轧中间产品质量 kg |
| `p_pickling` | 热轧产品酸洗与临时涂油 | conditional | 仅在发运表面状态为酸洗或酸洗并涂油时纳入。 | 去除氧化皮并形成声明的无涂层表面，不包含冷轧或涂层。 | 酸洗热轧产品质量 kg |
| `p_finishing_dispatch` | 精整与发运准备 | required | 始终纳入。 | 对合格产品进行冷却、卷取或切割、修边、检验、包装并在钢铁厂大门放行。 | 发运的 1,000 kg 净合格产品 |

### 过程：炼钢与板坯供应（`p_slab_supply`）

#### 输入

##### 产品流

###### 金属炉料与还原剂（`metallic_charge`）

记录声明路线使用的矿石基含铁料、铁水、DRI/HBI、外购废钢、铁合金材料、碳源及熔剂。外部消费前废钢和消费后废钢必须与厂内返回废钢分开。

- 选定流：路线特定的金属炉料和还原剂流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：归属于板坯生产的实测收货量和库存调整后消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_and_slab_supply`

###### 炼钢能源与公用工程（`steelmaking_energy`）

记录外购电力、燃料、氧气、蒸汽及其他公用工程，并单独报告厂内产生的过程气体，以防止重复计数。

- 选定流：路线特定的能源载体及公用工程流；天工 UUID 未解析
- 流属性/单位：能量、质量或体积 / MJ、kWh、kg 或 m3
- 数量规则：归属于板坯生产的计量用量或经核对的场址能源平衡
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：路线特定（`route_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuels`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 非合金钢铸坯（`cast_slab_output`）

记录转入热轧线的合格非合金钢板坯，并保留钢种、铸造路线及炉次或批次关联。

- 选定流：非合金钢板坯；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：转入热轧的实测铸坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_and_slab_supply`

###### 炼钢共产品与回收材料（`steelmaking_coproducts`）

分别记录每种外供共产品或回收材料及其去向、质量、市场需求和分配处理；厂内复用材料仍作为内部转移处理。

- 选定流：共产品特定的产品流；天工 UUID 未解析
- 流属性/单位：质量或能量 / kg 或 MJ
- 数量规则：扣除厂内复用后的各共产品实测净外供量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_recovery`

##### 废物流

###### 送往处理的炼钢残余物（`steelmaking_residues`）

在扣除经核验的厂内复用或外部回收后，按处理去向记录炉渣、粉尘、污泥、废耐火材料及其他残余物。

- 选定流：残余物特定的废物流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：称量或核对后送往处理的净残余物
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_and_waste`

##### 基本流

###### 炼钢直接排放（`steelmaking_direct_emissions`）

记录在跨越场址边界处实测或按许可方法监测的直接向空气和水体排放；不得以法规限值代替实测清单值。

- 选定流：物质及环境介质特定的基本流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：监测释放量，或依据已记录浓度和流量测量值计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 供应热轧的铸坯
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：板坯再加热、除鳞与热轧（`p_hot_rolling`）

#### 输入

##### 产品流

###### 非合金钢板坯投入（`slab_feed`）

记录进入热轧线的板坯质量及其钢种、铸造路线、供应商或内部批次、炼钢路线和上游数据集链接。

- 选定流：非合金钢板坯；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：装入再加热炉或直装线的实测板坯质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_route_and_slab_supply`

###### 再加热燃料与回收煤气（`reheating_energy`）

记录再加热消耗的外购燃料及厂内产生的过程气体，包括实测数量和低位发热量；厂内气体转移仅核对一次。

- 选定流：燃料及煤气特定的产品流；天工 UUID 未解析
- 流属性/单位：能量、质量或体积 / MJ、kg 或 m3
- 数量规则：再加热炉计量或核对后的消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuels`

###### 轧线电力（`rolling_electricity`）

记录除鳞泵、机架、传动、冷却、卷取机、切割、抽风、水处理及可归属辅助设备的电力。

- 选定流：地理特定的电力产品流；天工 UUID 未解析
- 流属性/单位：能量 / kWh
- 数量规则：计量电力，或依据经核对的场址仪表层级进行有记录的分配
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_energy_and_fuels`

###### 轧制与除鳞用水（`rolling_water`）

分别记录除鳞、轧辊冷却、带钢或板材冷却及氧化铁皮输送的补水和取水，不得与循环水混合。

- 选定流：水源特定的产品流或基本流；天工 UUID 未解析
- 流属性/单位：体积 / m3
- 数量规则：计量取水和补水；循环水另行报告
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_water_balance`

###### 轧制消耗品（`rolling_consumables`）

记录润滑剂、液压油、轧辊消耗、水处理化学品及其他跨越系统边界的材料消耗品。

- 选定流：消耗品特定的产品流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：归属于轧线的库存调整后领用量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_packaging`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 热轧中间产品（`hot_rolled_intermediate`）

记录在可选酸洗或发运精整之前，离开轧制与冷却工序的合格热轧卷材或板材中间产品。

- 选定流：热轧非合金钢中间产品；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：实测合格中间产品输出
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`

###### 回收轧制废钢与氧化铁皮（`rolling_recovered_material`）

当切头尾废钢、轧废和氧化铁皮存在经核验的内部或外部回收路线时，将其分别记录为回收材料输出；厂内返回量不计入外部再生料投入。

- 选定流：回收路线特定的废钢或氧化铁皮产品流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：内部核对后转移至回收的实测净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_recovery`

##### 废物流

###### 轧制残余物和送往处理的废水（`rolling_waste`）

按去向记录未回收氧化铁皮、污泥、废润滑剂、耐火材料或轧辊间废物，以及送往场内或场外处理的废水。

- 选定流：处理路线特定的废物和废水流；天工 UUID 未解析
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除回收和循环后的实测送往处理净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_and_waste`

##### 基本流

###### 再加热、轧制及水排放（`rolling_direct_emissions`）

采用物质及环境介质特定流，记录再加热和机械工序的直接空气排放，以及处理后的最终水排放。

- 选定流：物质及环境介质特定的基本流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：监测释放量，或依据已记录浓度和流量测量值计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 热轧中间产品输出
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：热轧产品酸洗与临时涂油（`p_pickling`）

#### 输入

##### 产品流

###### 待酸洗热轧产品（`pickling_feed`）

记录进入酸洗线的热轧产品，并保留其轧制批次和表面状态关联。

- 选定流：热轧非合金钢中间产品；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：进入酸洗的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 酸洗热轧产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`

###### 酸洗材料、水与能源（`pickling_inputs`）

记录酸的种类与浓度、缓蚀剂、漂洗水、中和化学品、临时防锈油、电力、蒸汽及酸洗线燃料。

- 选定流：材料、水及能源特定的产品流；天工 UUID 未解析
- 流属性/单位：质量、体积或能量 / kg、m3、kWh 或 MJ
- 数量规则：归属于酸洗产品输出的计量用量和库存调整后消耗量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 kg 酸洗热轧产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_operation`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 酸洗热轧产品（`pickled_product`）

记录离开酸洗线的合格酸洗或酸洗并涂油的无涂层热轧产品。

- 选定流：酸洗热轧非合金钢；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：离开酸洗线的实测合格产品质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 酸洗热轧产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`

##### 废物流

###### 废酸、污泥与酸洗废水（`pickling_waste`）

按回收或处理路线分别记录再生或外供废酸、中和污泥、氧化铁皮、漂洗水排污及其他废物。

- 选定流：处理路线特定的酸洗废物流；天工 UUID 未解析
- 流属性/单位：质量或体积 / kg 或 m3
- 数量规则：扣除内部回收后离开酸洗系统的实测废物和废水净量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 酸洗热轧产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_pickling_operation`

##### 基本流

###### 酸洗直接排放（`pickling_direct_emissions`）

记录跨越场址边界的酸雾及其他直接空气排放，以及处理后的最终水排放。

- 选定流：物质及环境介质特定的基本流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：监测释放量，或依据已记录浓度和流量测量值计算
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 kg 酸洗热轧产品
- 基准类型：过程输出（`process_output`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_direct_emissions`

### 过程：精整与发运准备（`p_finishing_dispatch`）

#### 输入

##### 产品流

###### 发运前合格热轧产品（`dispatch_feed`）

记录进入最终检验和发运准备的热轧原始表面或酸洗产品，并保留批次关联。

- 选定流：热轧非合金钢中间产品；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：进入发运精整的实测质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净发运产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_product_identity_and_output`

###### 包装材料（`dispatch_packaging`）

记录随产品交付的捆带、包装膜、护角、托盘及其他包装，并与净产品质量分开。

- 选定流：包装材料特定的产品流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：合格发运批次实际领用或库存调整后的包装量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1,000 kg 净发运产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_materials_and_packaging`

##### 废物流

##### 基本流

#### 输出

##### 产品流

###### 最终合格热轧钢（`reference_product_output`）

记录在钢铁厂大门放行的最终净质量并保留全部必需产品与路线限定信息。卷材采用所选代表性 UUID；薄板或中厚板必须使用经核验且状态匹配的流。

- 选定流：Steel hot rolled coil `2126a80d-1cd0-46e4-8f30-341bd20a1d64`
- 流属性/单位：Mass `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：每个参考流恰好为 1,000 kg 净合格产品
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每个参考流
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）

###### 送往回收的修边废钢（`finishing_scrap`）

按厂内返回或外部回收去向记录修边和切头尾废钢，不得把厂内返回量计作外部再生料投入。

- 选定流：回收路线特定的废钢流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：从精整转移的实测净废钢量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净发运产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_coproducts_and_recovery`

##### 废物流

###### 精整与包装废物（`finishing_waste`）

按处理去向记录未回收边料、报废包装及其他发运废物。

- 选定流：处理路线特定的废物流；天工 UUID 未解析
- 流属性/单位：质量 / kg
- 数量规则：送往处理的实测净废物量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1,000 kg 净发运产品
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_mass_outputs_and_waste`

##### 基本流

## 7. 分配与共产品处理

| 规则编号 | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivision_first` | 可分离路线、生产线和产品 | 在分配共同负荷前，通过路线、生产线、过程和产品特定仪表及质量平衡，并细分可独立计量的操作来避免分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_internal_recycling` | 返回废钢、氧化铁皮、过程气体、水及其他内部循环 | 厂内转移仅记录一次，即作为产生过程的输出和接收过程的投入；使用场址净平衡，不得对厂内循环材料主张外部回收收益，也不得计作外部再生料投入。 | `worldsteel-lci-methodology-2017` |
| `allocation_coproducts` | 具有经核验外部功能和市场需求的共产品 | 优先采用系统扩展或替代，并记录等效外部功能；无法采用时，使用有依据的物理关系，并披露理由及对替代方法的敏感性。 | `worldsteel-lci-methodology-2017` |
| `allocation_shared_hot_rolling` | 共用再加热、轧制、公用工程和精整 | 细分后将直接计量负荷归属于相应产品；只有剩余共同负荷才使用反映过程的有记录物理关系进行分配，且仅当产品接受等效加工并无更佳关系时才按产品质量分配。 | `worldsteel-lci-methodology-2017` |
| `allocation_scrap_reporting` | 外部废钢投入及未来回收情景 | 分别报告外部消费前和消费后废钢投入及返回废钢；下游采用寿命终结回收方法时，应与从摇篮到大门结果分开披露并防止重复计数。 | `worldsteel-lci-methodology-2017`; `aisc-steel-construction-pcr-2025` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_product_identity_and_output` | `p_hot_rolling`; `p_pickling`; `p_finishing_dispatch` | 产品身份与输出 | 生产、实验室、检验与发运记录 | 钢种/规格；炉次/批次；宽度；厚度；卷材/板材；表面状态；边部状态；酸洗；涂油；涂层状态；毛质量；包装质量；净产品质量 | 核对经检定衡器、生产执行记录、检验证书及发运记录。 | kg；mm | 每批次和发运批；每月核对 | 通常连续 12 个月 | 每条纳入的轧制、酸洗和精整线 | 按声明产品状态汇总合格净输出；分别保留不合格品、返工和废钢。 | 衡器检定、检验证书、批次谱系及发运核对 |
| `cp_route_and_slab_supply` | `p_slab_supply`; `p_hot_rolling` | 路线、再生料投入与板坯供应 | 采购、炼钢、铸造、供应商及转移记录 | 炼钢路线；铸造路线；板坯钢种；板坯质量；供应商；外部消费前废钢；外部消费后废钢；返回废钢；DRI/HBI；铁水；上游数据集 id | 核对收货、库存变化、炼钢炉料单、铸造记录、厂内转移和供应商声明。 | kg；质量百分比 | 每炉次或批次；每月核对 | 通常连续 12 个月 | 为纳入产出供料的全部场址和供应商 | 按可追溯炉次/批次或有记录的产量加权路线混合归属板坯和炉料记录。 | 地磅与库存核对、炉料单、供应商证据和路线占比计算 |
| `cp_energy_and_fuels` | `p_slab_supply`; `p_hot_rolling`; `p_pickling` | 外购及厂内转移能源 | 仪表、账单、燃料分析及煤气平衡记录 | 电力；燃料数量；蒸汽；氧气；过程气体产生与使用；低位发热量；仪表层级；分配动因 | 读取经校准仪表和账单，并将厂内煤气和蒸汽转移与场址能源平衡核对。 | kWh；MJ；kg；m3 | 连续或每批；月度结账 | 通常连续 12 个月 | 每个纳入过程及共用公用工程 | 汇总计量用量；优先使用直接仪表，并按声明物理动因分配剩余共用量。 | 校准记录、账单、燃料证书及能源平衡闭合 |
| `cp_water_balance` | `p_hot_rolling`; `p_pickling` | 取水、补水、循环水与排水 | 流量计、水处理日志和排放记录 | 水源；取水；补水；循环水；蒸发；排污；排水；去向 | 核对经校准的水源、过程回路及最终排放流量计。 | m3 | 连续或每日；月度结账 | 通常连续 12 个月 | 每个纳入水回路及最终排放点 | 分别报告总取水、补水、循环水和最终排水；按实测补水或其他有记录物理动因分配共用回路。 | 仪表校准、水量平衡闭合及处理/排放日志 |
| `cp_materials_and_packaging` | `p_hot_rolling`; `p_finishing_dispatch` | 轧制消耗品与发运包装 | 采购、仓储、领用及库存记录 | 材料身份；期初库存；收货；期末库存；领用量；退料；产品归属 | 采用库存调整后消耗量，并在可用时采用发运批次特定包装记录。 | kg | 每次领用或发运；月度结账 | 通常连续 12 个月 | 每个纳入过程与发运操作 | 期初库存加收货减期末库存和有记录退料，优先按直接领用归属。 | 库存核对、领料单及包装规格 |
| `cp_pickling_operation` | `p_pickling` | 酸洗材料、回收、能源、水及废物 | 槽液分析、仪表、生产日志、酸再生、废物及处理记录 | 酸种类/浓度；缓蚀剂；漂洗水；能源；油；投入质量；产出质量；废酸；再生酸；污泥；废水；排放监测 | 核对槽液添加与排出、仪表、生产线产量、酸回收及废物联单。 | kg；m3；kWh；MJ | 每批次或连续线；月度结账 | 通常连续 12 个月 | 每条纳入的酸洗与酸再生线 | 仅按酸洗产品输出归一化，并将再生酸保留为内部循环或经核验的外部回收。 | 槽液实验室结果、仪表校准、质量平衡和废物联单 |
| `cp_mass_outputs_and_waste` | `p_slab_supply`; `p_hot_rolling`; `p_finishing_dispatch` | 产品、废钢、氧化铁皮、污泥及废物去向 | 衡器、生产日志、转移单及废物联单 | 投入质量；产品质量；切头尾废钢；轧废；氧化铁皮；污泥；不合格品；返工；废物质量；回收/处理去向 | 使用经检定衡器和经核验转移记录核对过程及场址质量平衡。 | kg | 可用时每批次；月度结账 | 通常连续 12 个月 | 每个纳入过程与处理边界 | 分开记录厂内返回、外部回收、处理、处置及库存变化；调查无法解释的不平衡。 | 衡器检定、转移单、废物联单及签署的平衡评审 |
| `cp_coproducts_and_recovery` | `p_slab_supply`; `p_hot_rolling`; `p_finishing_dispatch` | 共产品与回收材料 | 衡器、销售/转移记录、规格及去向证据 | 材料；质量；品质；厂内用途；外部用途；去向；市场需求；替代功能；分配方法 | 核验扣除厂内复用后的净外供量，并保留接收功能或处理证据。 | kg；MJ | 每次转移；月度结账 | 通常连续 12 个月 | 场址边界及每个接收路线 | 报告外供前先净额抵销厂内转移；分别保留每种材料和去向。 | 地磅记录、规格、合同或转移证据及分配评审 |
| `cp_direct_emissions` | `p_slab_supply`; `p_hot_rolling`; `p_pickling` | 直接向空气和水体释放 | 连续监测、周期测试、废水分析及流量计 | 物质；环境介质；浓度；流量；运行时间；测试方法；检出限；处理状态 | 采用适用的连续或周期监测，并依据已记录浓度和流量数据计算质量释放。 | kg；mg/Nm3；mg/L；Nm3；m3 | 连续或许可规定的周期频率 | 与活动数据相同的生产期间 | 每个纳入排放点及最终排水点 | 在运行期间积分，或将匹配的浓度与流量相乘；保留未检出值处理与不确定性。 | 校准、认可测试报告、实验室结果及计算轨迹 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 每项清单数量 | 归一化数量 = 可归属数量 × 1,000 kg / 合格净发运产品质量 | 可归属流数量；合格净发运产品质量 | 每 1,000 kg 参考产品的数量 |  |
| `calc_net_product_mass` | 发运输出 | 净产品质量 = 经检定发运毛质量 - 单独称量或记录的包装质量 | 发运毛质量；包装质量 | 合格净产品质量 kg |  |
| `calc_hot_rolling_yield` | 热轧与精整 | 成材率 = 合格净产品质量 / 合格板坯投入质量；分别报告切头尾废钢、轧废、氧化铁皮、不合格品、返工及库存变化 | 板坯投入；合格产品；废钢；氧化铁皮；不合格品；返工；库存变化 | 质量平衡与成材率披露 | `eu-jrc-fmp-bref-2022` |
| `calc_recycled_input` | 炼钢路线披露 | 外部再生料投入占比 =（外部消费前废钢 + 外部消费后废钢）/ 金属炉料总量 × 100；返回废钢另行报告，并说明任何替代性适用方法 | 外部消费前废钢；外部消费后废钢；金属炉料总量；返回废钢 | 质量百分比及类别披露 | `worldsteel-lci-methodology-2017` |
| `calc_energy_conversion` | 燃料与过程气体 | 能量 = 实测质量或标准体积 × 有记录的低位发热量；厂内产生与消耗仅核对一次 | 燃料或气体数量；低位发热量；内部转移平衡 | 可归属能量 MJ | `worldsteel-lci-methodology-2017` |
| `calc_direct_release` | 受监测排放 | 质量释放 = 匹配浓度 × 归一化干基或湿基烟气流量，或浓度 × 排水体积，并记录单位换算和运行时间 | 浓度；流量或排水体积；运行时间；测量基准 | 释放物质质量 kg | `eu-jrc-fmp-bref-2022` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_identity` | 最终产品及全部生产批次 | 证明非合金钢种、成品宽度至少 600 mm、仅热轧状态、卷材或薄板/中厚板交付、表面状态及无涂层；隔离不合格产品。 | 规格、检验证书及批次谱系 |
| `dq_route` | 钢与板坯供应 | 识别炼钢和铸造路线、地理范围、供应商或场址、外部消费前和消费后废钢及返回废钢；不得采用无解释的生产混合。 | 炉料单、路线记录、供应商声明及产量加权计算 |
| `dq_temporal` | 前景活动数据 | 采用通常覆盖连续 12 个月的代表性期间；数据早于五年或期间较短时，应记录代表性偏差理由。 | 报告期间登记表及偏差说明 |
| `dq_measurement` | 材料、能源、水与排放 | 优先采用实测数据，其次采用计算数据；明确识别估算，并保留仪表、衡器、实验室、换算因子和计算证据。 | 校准、账单、实验室报告及计算轨迹 |
| `dq_completeness` | 所有纳入过程 | 覆盖全部必需过程及被触发的条件过程，并核对投入、产品、共产品、回收材料、废物、库存变化和直接排放记录；记录排除和截断。 | 签署的完整性清单及质量/能源/水量平衡 |
| `dq_upstream` | 外购板坯及其他重要上游投入 | 使用在地理、时间、技术、路线及再生料投入依据方面有代表性的上游数据集；记录每个代理以及与研究目标相关的敏感性。 | 数据集元数据、供应商证据及代理登记表 |
| `dq_reproducibility` | 完整前景数据包 | 保留足够的原始字段定义、汇总逻辑、分配决策和来源链接，使具有授权数据访问权限的独立从业者能够复现归一化清单。 | 数据字典、计算工作簿或脚本及评审记录 |

## 9. 校验规则

| 规则编号 | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_product_identity` | 参考产品 | 钢种为不锈钢或其他合金钢、宽度小于 600 mm、产品经过冷轧或下游制造，或存在任何包覆、镀层、镀锌、涂漆、聚合物、金属或其他涂层时，判定不符合。 | `unsd-cpc-3-2025`; `unsd-hs-7208` |
| `validate_reference_flow` | 参考流与输出 | 要求每个参考流恰为 1,000 kg 净合格产品，以 Mass 为定量属性，包装不计入净产品质量，并具备全部必需限定信息；卷材可采用所选 UUID，薄板或中厚板必须采用经核验且状态匹配的流。 | `worldsteel-hrc-eco-profile-2022` |
| `validate_route_and_scrap` | 路线披露 | 要求声明炼钢和铸造路线、外部消费前和消费后废钢数值、单独报告的返回废钢、混合路线占比，以及再生料含量方法和分母。 | `worldsteel-lci-methodology-2017` |
| `validate_process_coverage` | 过程图 | 要求纳入 `p_hot_rolling` 和 `p_finishing_dispatch`；要求前景 `p_slab_supply` 或关联有代表性的上游板坯数据集；仅当发运产品状态为酸洗或酸洗并涂油时要求 `p_pickling`。 | `eu-jrc-fmp-bref-2022`; `worldsteel-lci-methodology-2017` |
| `validate_surface_boundary` | 表面状态 | 数据集声明酸洗产品却遗漏酸洗负荷，或声明热轧原始表面却含有未归属酸洗时，判定不符合；本 PCR 结果中不得纳入涂层负荷和下游制造。 | `unsd-hs-7208`; `eu-jrc-fmp-bref-2022` |
| `validate_balances` | 质量、能源与水 | 要求核对产品和过程质量平衡、厂内能源和材料循环只计一次，并分别记录取水、循环水和排水；调查并披露无法解释的不平衡。 | `worldsteel-lci-methodology-2017` |
| `validate_allocation` | 共用负荷、共产品与回收 | 要求先细分后分配，剩余共用负荷采用有记录的物理动因，披露共产品处理，按净额核算厂内循环，并防止废钢或未来回收收益重复计数。 | `worldsteel-lci-methodology-2017`; `aisc-steel-construction-pcr-2025` |
| `validate_data_quality` | 前景数据包 | 要求报告期间、场址和供应商覆盖、校准与实验室证据、上游数据集元数据、代理登记表及可复现计算轨迹；报告偏差，不得静默填补缺失值。 | `worldsteel-lci-methodology-2017` |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 热轧非合金钢钢厂产品的前景生产数据包；经评审后可发布为 `secondary_dataset` 或 `background_dataset`。 |
| downstream_use | 当声明钢种、尺寸、交付形态、表面状态、地理范围、期间及路线兼容时，支持电力设备、光伏支架、建筑及制造业的产品、过程和 lifecyclemodel 构建。 |
| allowed_use | 从摇篮到大门钢材产品建模，或关联上游板坯数据集的大门到大门热轧建模；在另行应用适用项目规则及其他生命周期模块时，可用于产品足迹和 EPD 工作。 |
| excluded_use | 冷轧、不锈钢、合金钢、涂层、窄幅或制造钢产品；功能或边界不兼容产品的直接比较；法律合规声明；未经核验将卷材身份用于板材。 |
| required_metadata | PCR id；CPC 背景；产品流、流属性和单位组 UUID；钢种/规格；厚度；宽度；卷材或薄板/中厚板；表面和边部状态；酸洗和涂油；无涂层；炼钢和铸造路线；路线占比；再生料投入类别；板坯来源；地理范围；场址；生产期间；边界；分配；上游数据集；包装。 |
| required_quality_disclosure | 前景与上游数据；仪表和衡器覆盖；12 个月代表性或偏差；路线和供应商覆盖；质量、能源和水量核对；实测/计算/估算占比；代理使用；截断；共产品与回收方法；未解析 UUID；评审状态。 |
| update_trigger | 钢种边界、宽度或交付状态、炼钢/铸造路线或路线占比、外部废钢依据、板坯供应商、酸洗或涂油、涂层状态、过程技术、能源或水系统、分配或回收方法、地理范围、生产期间，或新核验的参考流/单位组身份发生变化。 |

## 11. 数据源

| Source id | Type | Reference | Used for |
| --- | --- | --- | --- |
| `unsd-cpc-3-2025` | 官方指南（`official_guidance`） | 联合国统计司，《CPC 第 3.0 版解释性说明》，2025 年 6 月 30 日，第 207 页，<https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf>（检索日期：2026-08-07） | CPC 41211 官方身份、层级、宽度、材料及仅热轧范围 |
| `unsd-hs-7208` | 官方指南（`official_guidance`） | 联合国统计司，HS 2012 品目 7208 分类详情，<https://unstats.un.org/unsd/classifications/Econ/Detail/EN/32/7208>（检索日期：2026-08-07） | 卷材/非卷材和厚度变体、酸洗卷材纳入，以及包覆、镀层或涂层产品排除 |
| `worldsteel-lci-methodology-2017` | 官方指南（`official_guidance`） | 世界钢铁协会，《生命周期清单方法学报告》，2017，<https://worldsteel.org/wp-content/uploads/Life-cycle-inventory-methodology-report.pdf>（检索日期：2026-08-07） | 从摇篮到大门和大门到大门边界、路线图、一次数据质量、厂内回收、共产品、废钢、分配及回收规则 |
| `worldsteel-lci-study-2021` | 数据集（`dataset`） | 世界钢铁协会，《生命周期清单（LCI）研究：2021 年数据发布》，<https://worldsteel.org/wp-content/uploads/2021-LCA-Study-Report.pdf>（检索日期：2026-08-07） | 产品清单、钢厂数据背景，以及钢捆带等包装的单独核算 |
| `worldsteel-hrc-eco-profile-2022` | 数据集（`dataset`） | 世界钢铁协会，《全球热轧卷——建筑用生态概况》，2022 年 5 月，<https://worldsteel.org/wp-content/uploads/worldsteel_eco-profiles_global-HRC-2022_Construction-1.pdf>（检索日期：2026-08-07） | 1 公吨声明产品、热轧卷状态、从摇篮到大门加寿命终结边界、BOF/EAF 生产路线及共产品/回收分开报告背景 |
| `eu-jrc-fmp-bref-2022` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，《黑色金属加工行业最佳可行技术参考文件》，2022，<https://eippcb.jrc.ec.europa.eu/sites/default/files/2022-12/FMP_BREF_2022.pdf>（检索日期：2026-08-07） | 热轧过程分解、再加热、除鳞、轧制、冷却、卷取/切割、酸洗、水循环、残余物及排放监测 |
| `aisc-steel-construction-pcr-2025` | 标准（`standard`） | 美国钢结构学会，Smart EPD Part B PCR 1000-008 v3.0《产品类别规则》概览，2025 年 4 月 3 日，<https://www.aisc.org/sustainability/product-category-rule/>（检索日期：2026-08-07） | 未加工板材和卷材的钢厂产品边界、与制造/构件加工的区分、声明吨、模块及回收披露 |
