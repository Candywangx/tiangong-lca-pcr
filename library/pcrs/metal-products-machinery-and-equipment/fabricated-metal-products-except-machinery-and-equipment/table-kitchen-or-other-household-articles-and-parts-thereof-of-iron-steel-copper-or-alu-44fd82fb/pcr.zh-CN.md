---
pcr_id: pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.table-kitchen-or-other-household-articles-and-parts-thereof-of-iron-steel-copper-or-alu-44fd82fb
language: zh-CN
status: candidate
content_maturity: authored_methodology
translation_status: aligned
sync_with: pcr.en-US.md
---

# 铁、钢、铜或铝制餐桌、厨房或其他家用物品及其零件；家用非电热烹调或加热用铜制器具；铁、钢、铜或铝制刷锅器、擦洗或抛光垫、手套及类似品；铁棉或钢棉；用于食品或饮料的制备、调理或供应、重量不超过10千克的手动机械器具

## 1. 范围与适用性

本 PCR 适用于铁、钢、铜或铝为主要材料的餐桌、厨房及其他家用物品，所列家用非电热铜制烹调或加热器具，金属刷锅器、擦洗或抛光垫、手套、铁棉或钢棉，以及重量不超过 10 kg 的手动食品或饮料制备、调理或供应器具的工厂门生产。具体数据包必须声明一种产品、主要金属及合金、结构、表面处理、组件和包装配置；不得仅凭宽泛的 CPC 名称，在没有抽样方案时合并不同产品。

代表性路线为使用外购平板轧材制造的成形并机械抛光的不锈钢家用物品。这是一条可审计的通用路线，并不表示全部适用产品均为不锈钢。实际存在的铸造、金属丝成形、铜制加热、涂层、连接、把手、刀片、齿轮或多材料装配必须作为独立条件过程和原子交换补充。

电动家用器具；以玻璃、陶瓷、塑料、木材或纺织品为主要材料的家用品；单独分类的餐具；工业食品加工机械；以及初级金属生产不属于本 PCR 身份。工厂门后的配送、家庭使用、维护和报废处理不在前景边界内，除非研究明确扩展边界。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.metal-products-machinery-and-equipment.fabricated-metal-products-except-machinery-and-equipment.table-kitchen-or-other-household-articles-and-parts-thereof-of-iron-steel-copper-or-alu-44fd82fb |
| classification_refs | CPC 3.0: 42912，精确分类语境；规范 PCR 身份保持分类无关 |
| covered_products | 金属餐桌用品、厨房用品及其他家用物品和零件；家用非电热铜制烹调或加热器具；金属刷锅器、擦洗或抛光垫、手套及类似品；铁棉或钢棉；10 kg 以下手动食品或饮料器具 |
| excluded_products | 电动家用器具；单独分类的餐具；工业食品加工机械；以及主要材料并非铁、钢、铜或铝的家用品 |
| representative_product | 工厂门处已检验、已包装的一件成形并机械抛光的不锈钢家用物品 |
| production_route | 外购深加工不锈钢平板轧材；原料准备；切割、成形和修边；条件性热处理；表面精整和水性清洗；检验和包装 |
| market_state | 工厂门成品，干燥且可用；单独列报净产品质量和随附包装 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 提供一种已声明适用金属家用物品的家用制备、供应、清洁、烹调或加热功能 |
| How much | 工厂门处 1 kg 成品净质量，不含包装 |
| How well | 符合已声明的合金、结构、尺寸、表面处理、组件配置以及适用产品性能或安全规范 |
| How long or cycle | 声明该具体物品的设计使用寿命或额定循环次数；需披露寿命，但工厂门清单仍按 1 kg 归一化 |
| reference_flow_link | 参考流是实现已声明产品功能所需的成品净质量；全部前景投入和产出归一化到 1 kg 成品净质量 |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 kg 成品净质量，不含瓦楞纸箱和 LDPE 保护膜 |
| 参考产品流 | 金属制家用物品成品 |
| 参考流属性 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | Units of mass `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 具体产品族和功能；主要金属和合金牌号；产品净质量；单件质量和件数；尺寸或容量；制造路线；表面处理和涂层；连接组件和非金属组件；再生成分声明及证据；工厂地域和技术；包装配置；质量或安全规范；设计使用寿命或额定循环次数 |

构建前景数据包时，`必需限定信息` 中列出的信息应在数据集元数据、过程说明、参考流备注、产品说明或等效数据包字段中明确声明。缺失必需限定信息的数据包视为参考流定义不完整。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_net_mass` | 参考产品 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 最终检验后、包装前称量合格产品。排除全部包装质量，并将每项前景交换归一化到 1 kg 成品净质量。 |
| `item_to_mass` | 按件计数的生产和包装记录 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用实测的产品特定平均单件质量换算件数，并保留样本量、称量日期和离散程度；不得直接采用未经核验的目录标称质量。 |
| `electricity_energy` | 全部电力行 | Net calorific value `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 原始记录保留计量 kWh，并按 1 kWh = 3.6 MJ 换算；披露电压、电网地域、合同供电方式以及是否包含损耗。 |
| `gas_volume_basis` | 天然气行 | Volume `93a60a56-a3c8-22da-a746-0800200c9a66` | m3 | 记录计量体积及温度、压力和干湿基准；只能采用有文件依据的场址或供应商方法换算。 |
| `water_mass_basis` | 工艺用水行 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 优先按质量计量；使用体积表时，保留体积以及用于换算的实测或有文件依据的密度。 |
| `material_balance` | 金属原料、产品、废料和捕集粉尘 | Mass `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 对同一报告期和产品分配下的含金属投入、合格产品、转移中间体、废料、捕集粉尘及实测直接排放进行平衡核对。 |

## 5. 系统边界

前景边界从外购、符合规范的金属原料和其他组件在工厂接收开始，到干燥、检验合格并完成包装的物品在工厂门交付为止。边界包括原料搬运、切割、成形、修边、路线所需热处理、机械或化学表面准备、精整、清洗、直接公用工程、直接排放、废物收集、检验和包装。外购金属、化学品、燃料、电力和包装的上游生产及交付由关联背景数据集表示。不得在前景中重复初级金属生产。

条件过程仅在已声明产品路线实际采用时纳入。数据包不得用笼统材料、公用工程、废物或排放集合替代具体交换。

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 在前景工厂接收点、符合已声明合金、形态、表面状态和供应商规范的外购金属原料及组件 |
| starting_condition_role | 前景门投入；其上游生产和入厂运输由关联背景数据集表示 |
| product_classification_scope | 分类仅用于确认适用产品身份；路线、合金、结构和市场状态独立声明 |
| recursive_input_rule | 若外购投入本身属于适用范围内的家用物品成品，则将其作为单独产品投入，附供应商身份和上游数据集，不在前景系统内递归重复制造 |
| upstream_dataset_requirement | 每项外购金属、化学品、能源载体、组件和包装均关联地域、技术、状态和交付边界相容的上游数据集；任何代理均须披露，不得静默替代 |
| disclosure | 声明产品身份、合金、原料形态、路线、已纳入及省略的条件过程、涂层和表面处理、包装、场址地域、报告期、分配和全部前景排除项 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_factory_gate` | 前景系统 | 纳入从外购原料接收到检验合格并完成包装的产品发运之间的全部工厂过程；外购投入关联上游数据集，配送、使用和报废处理保留在本门到门前景边界之外。 | `ec-pef-method-2021` |
| `boundary_route_instantiation` | 产品路线 | 只实例化已声明产品实际采用的过程，但每种材料、能源、废物和直接基本交换均保留独立原子行。 | `us-epa-fabricated-metal-sector-notebook-1995` |
| `boundary_surface_treatment` | 化学或电解表面处理 | 采用水性表面处理线时，纳入预处理、核心处理、漂洗、干燥、水和能源、槽液化学品、带出液、废水、废槽液、污泥和直接空气排放。 | `ec-jrc-stm-bref-2006` |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `stock_receipt_and_preparation` | 原料接收和坯料准备 | required | 代表性外购原料路线始终适用 | 接收、检验原料并切割为坯料 | 转入成形的坯料 kg |
| `forming_and_trimming` | 成形和修边 | required | 代表性成形产品路线始终适用 | 压制成形坯料并修整产品几何形状 | 转入后续过程的成形件 kg |
| `thermal_treatment` | 热处理 | conditional | 已声明合金及成形路线需要退火、消除应力或热调理时纳入 | 形成适于表面处理的冶金状态 | 热处理件 kg |
| `surface_finishing_and_cleaning` | 表面精整和清洗 | required | 始终适用；仅实例化实际使用的机械和水性操作 | 形成已声明表面并清洁产品 | 包装前检验合格物品 kg |
| `final_inspection_and_packaging` | 最终检验和包装 | required | 始终适用；使用已声明瓦楞纸箱和 LDPE 薄膜配置时适用对应包装行 | 放行工厂门参考产品 | 1 kg 成品净质量 |

### 过程：原料接收和坯料准备（`stock_receipt_and_preparation`）

#### 输入

##### 产品流

###### 代表性不锈钢原料（`stock_stainless_flat_roll`）

外购不锈钢平板轧材跨越工厂边界，并依据收货和物料清单记录称量。

- 选定流：深加工不锈钢平板轧材 `add37984-82d6-4c91-85e3-9911c0135944`
- 流属性/单位：Mass / kg
- 数量规则：归属于合格坯料和接收阶段不合格品的收货质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_material_receipts`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

###### 接收和落料电力（`stock_receipt_electricity`）

计量接收、检验和坯料切割所用电力，并分配给合格生产。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于原料接收和坯料准备的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 已准备不锈钢坯料（`prepared_blank_output`）

成形前称量合格切割坯料，或根据核验件数和实测平均坯料质量计算。

- 选定流：已准备不锈钢坯料
- 流属性/单位：Mass / kg
- 数量规则：转入成形的实测或件数换算坯料质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 已准备坯料产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 废物流

###### 接收和落料钢废料（`stock_scrap_output`）

将不合格原料端部和落料边角料分开，并在离开本过程时称量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：送往已声明去向的实测接收不合格品和落料废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_waste`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 基本流

本过程不规定直接基本流产出。

### 过程：成形和修边（`forming_and_trimming`）

#### 输入

##### 产品流

###### 已准备不锈钢坯料投入（`prepared_blank_input`）

记录内部坯料转移以保持过程级质量平衡。

- 选定流：已准备不锈钢坯料
- 流属性/单位：Mass / kg
- 数量规则：从原料准备过程转入的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成形件产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

###### 成形和修边电力（`forming_electricity`）

压机、修边机及直接相关抽排设备使用分表计量，或按有文件依据的机器时间从稳定表组分配。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于成形和修边的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`ec-pef-method-2021`

###### 切削液（`forming_cutting_fluid`）

记录供应给修边设备的油基切削液，并扣除回收和退回的液体。

- 选定流：切削液 `576d250f-4f36-4385-939d-0f03b8f95a10`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去未改变的退回量和回收复用量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_cutting_fluid`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 成形不锈钢本体（`formed_body_output`）

在任何热处理或精整步骤之前记录已成形和修边的内部本体。

- 选定流：成形不锈钢家用物品本体
- 流属性/单位：Mass / kg
- 数量规则：从成形转出的实测或件数换算质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 成形件产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 废物流

###### 成形和修边钢废料（`forming_scrap_output`）

将金属边角料和不合格成形件分开，并在回收或其他处理前称量。

- 选定流：工业后钢废料 `c143745d-be4f-4d8f-b403-2dcbfe685349`
- 流属性/单位：Mass / kg
- 数量规则：送往已声明去向的实测成形和修边废料质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_scrap_waste`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

###### 废切削油（`waste_cutting_oil_output`）

称量离开场址的废油基切削液，并关联其处理去向。

- 选定流：废切削油 `80d926e3-0f76-4a19-9b1e-ffec9deb1216`
- 流属性/单位：Mass / kg
- 数量规则：转移出场的实测废切削油质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_cutting_fluid`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 基本流

本过程不另行规定直接基本流产出；精整粉尘按后续过程计量。

### 过程：热处理（`thermal_treatment`）

#### 输入

##### 产品流

###### 进入热处理的成形件（`formed_body_thermal_input`）

仅在需要退火、消除应力或其他热调理时记录此内部转移。

- 选定流：成形不锈钢家用物品本体
- 流属性/单位：Mass / kg
- 数量规则：装入热处理单元的成形件质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热处理件产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

###### 热处理天然气（`thermal_natural_gas`）

按有文件依据的参考条件计量纳入炉次的气态天然气。

- 选定流：气态天然气 `4f19ca0e-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Volume / m3
- 数量规则：归属于已纳入热处理的计量天然气体积
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_thermal_fuel`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 热处理不锈钢本体（`heat_treated_body_output`）

炉次结束时称量调理后的本体，或根据件数换算质量。

- 选定流：热处理不锈钢家用物品本体
- 流属性/单位：Mass / kg
- 数量规则：转入精整的实测或件数换算本体质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 热处理件产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 废物流

本过程不规定废物产出；实际存在的炉渣或耐火材料废物必须另设具体行。

##### 基本流

###### 直接化石二氧化碳（`thermal_fossil_co2`）

现场天然气燃烧的直接化石二氧化碳采用实测值，或根据所采集燃料和有文件依据的场址特定碳数据计算；本行不包含上游电力排放。

- 选定流：二氧化碳（化石源） `08a91e70-3ddc-11dd-923d-0050c2490048`
- 流属性/单位：Mass / kg
- 数量规则：实测直接排放，或所采集天然气乘以有文件依据的场址特定碳含量和氧化方法
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_direct_co2`
- 来源：`ec-pef-method-2021`

### 过程：表面精整和清洗（`surface_finishing_and_cleaning`）

#### 输入

##### 产品流

###### 待表面处理成形件（`surface_ready_body_input`）

进入精整的内部本体反映成形以及任何适用热处理后的已声明路线。

- 选定流：待表面处理成形不锈钢家用物品本体
- 流属性/单位：Mass / kg
- 数量规则：转入精整线的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前检验合格物品产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_intermediate_mass_transfer`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

###### 精整电力（`finishing_electricity`）

记录抛光、抽排、水性清洗、泵送和干燥所用电力。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于表面精整和清洗的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`ec-jrc-stm-bref-2006`

###### 水性清洗用氢氧化钠（`finishing_sodium_hydroxide`）

进入已声明碱性清洗槽的氢氧化钠按纯化学品当量质量记录，并保留溶液浓度。

- 选定流：氢氧化钠 `e0abcced-0611-4c24-9290-5a2c5a0c4169`
- 流属性/单位：Mass / kg
- 数量规则：槽液配制和补加消耗的外购或领用纯品当量质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 清洗和漂洗工艺用水（`finishing_process_water`）

在精整线边界计量供应给清洗、漂洗和已纳入槽液配制的工艺用水。

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：Mass / kg
- 数量规则：进入清洗、漂洗和槽液配制的实测工艺用水质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_surface_treatment_inputs`
- 来源：`ec-jrc-stm-bref-2006`

###### 白色熔融氧化铝抛光磨料（`finishing_white_fused_alumina`）

记录机械抛光领用的白色熔融氧化铝，并扣除报告期内回收复用的洁净磨料。

- 选定流：白色熔融氧化铝 `429f2b7f-592a-434c-92e2-43a6b4859300`
- 流属性/单位：Mass / kg
- 数量规则：领用质量减去内部回收的洁净复用磨料
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_surface_treatment_inputs`
- 来源：`us-epa-fabricated-metal-sector-notebook-1995`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 包装前检验合格物品（`prepack_article_output`）

包装前称量符合已声明表面和检验要求的干燥物品。

- 选定流：包装前检验合格不锈钢家用物品
- 流属性/单位：Mass / kg
- 数量规则：转入包装的实测或件数换算合格物品质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 kg 包装前检验合格物品产出
- 基准类型：过程产出（`process_output`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product`
- 来源：`ec-pef-method-2021`

##### 废物流

###### 碱性金属精整废水（`alkaline_finishing_wastewater`）

在任何过程外现场处理或场外转移之前，记录已声明碱性清洗和漂洗步骤的合并废水。

- 选定流：碱性金属精整废水
- 流属性/单位：Mass / kg
- 数量规则：离开精整线边界的实测废水质量，保留 pH 和金属含量限定信息
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_wastewater`
- 来源：`ec-jrc-stm-bref-2006`

###### 捕集研磨和抛光粉尘（`grinding_dust_output`）

将过滤器、局部抽排或清扫所捕集的粉尘作为独立废物称量。

- 选定流：研磨和筛分产生的粉尘 `e0f3b3af-7794-4c25-ae58-5e4302b226d2`
- 流属性/单位：Mass / kg
- 数量规则：送往已声明处理去向的实测捕集粉尘质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：技术特定（`technology_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_and_pm`
- 来源：`ec-jrc-stm-bref-2006`

##### 基本流

###### 机械精整直接 PM10（`pm10_air_output`）

仅在已确认受纳空气隔室的情况下，按实测或计算记录机械精整未捕集颗粒物（PM10）；隔室特定 Tiangong UUID 仍待审查。

- 选定流：颗粒物（PM10），直接排入空气
- 流属性/单位：Mass / kg
- 数量规则：离开前景场址的源测试或经验证计算的直接 PM10 质量
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_dust_and_pm`
- 来源：`ec-jrc-stm-bref-2006`

### 过程：最终检验和包装（`final_inspection_and_packaging`）

#### 输入

##### 产品流

###### 检验合格物品投入（`prepack_article_input`）

合格干燥物品作为内部产品转移进入包装。

- 选定流：包装前检验合格不锈钢家用物品
- 流属性/单位：Mass / kg
- 数量规则：从精整转入包装的质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_finished_product`
- 来源：`ec-pef-method-2021`

###### 包装线电力（`packaging_electricity`）

最终检验、贴标、封装和包装用电与上游生产电力分开记录。

- 选定流：电力 `890a70b7-b677-4e2a-8a1b-7d017e0a10ae`
- 流属性/单位：Net calorific value / MJ
- 数量规则：归属于最终检验和包装的实测电力
- 数值来源模式：前景记录（`foreground_record`）
- 适用范围：场址特定（`site_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：采集记录（`collected_record`）
- 采集协议：`cp_process_energy`
- 来源：`ec-pef-method-2021`

###### 瓦楞纸箱（`corrugated_box_input`）

依据包装物料清单或经核验的供应商规范称量随参考产品提供的瓦楞纸箱。

- 选定流：瓦楞纸箱 `4f197bec-7b3b-11dd-ad8b-0800200c9a66`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗的包装物料清单质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`ec-pef-method-2021`

###### LDPE 保护膜（`ldpe_film_input`）

依据包装物料清单或经核验的供应商规范称量随参考产品提供的低密度聚乙烯薄膜。

- 选定流：低密度聚乙烯薄膜（PE-LD） `2cecd3a7-d90e-44b4-aec5-1d9dfb907477`
- 流属性/单位：Mass / kg
- 数量规则：合格产品消耗的包装物料清单质量
- 数值来源模式：计算值（`calculated_value`）
- 适用范围：产品特定（`product_specific`）
- 归一化基准：每 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：由采集数据计算（`calculated_from_collection`）
- 采集协议：`cp_packaging_materials`
- 来源：`ec-pef-method-2021`

##### 废物流

本过程不规定废物投入。

##### 基本流

本过程不规定基本流投入。

#### 输出

##### 产品流

###### 工厂门参考产品（`reference_product_output`）

合格物品按不含包装的净质量称量，并关联完整产品规范；未找到精确公共 Tiangong 参考产品 UUID。

- 选定流：金属制家用物品成品
- 流属性/单位：Mass / kg
- 数量规则：固定参考产出 1 kg 成品净质量
- 数值来源模式：固定值（`fixed_value`）
- 适用范围：通用（`generic`）
- 归一化基准：工厂门处 1 kg 成品净质量
- 基准类型：参考流（`reference_flow`）
- 证据类型：身份引用（`identity_reference`）
- 来源：`un-cpc-3-0-2025`

##### 废物流

不得设置笼统包装废物行。实际产生的纸箱、薄膜、标签或不合格产品废物必须分别记录为具体废物交换。

##### 基本流

本过程不规定直接基本流产出。

## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide_first` | 共用生产线和公用工程 | 首先按过程、产品族、批次、计量表或机器时间细分，仅保留可直接归属于已声明产品的投入和产出。 | `ec-pef-method-2021` |
| `allocation_physical_relation` | 不可分割的共用操作 | 无法细分时采用有文件依据的相关物理关系：公用工程采用机器时间或实测能源，材料损失采用实测质量。论证该关系代表因果并披露因子。 | `ec-pef-method-2021` |
| `allocation_other_relation` | 无可辩护物理关系 | 只有在记录细分、系统扩展和相关物理关系均不可行后才能采用其他关系；报告敏感性检查，不得使用无文件依据的默认值。 | `ec-pef-method-2021` |
| `allocation_scrap_boundary` | 分离废料和回收磨料 | 分别记录前景总投入、外送废物和内部回收材料。除非明确声明下游方法和扩展边界，不得在本工厂门清单内加入避免生产信用。 | `ec-pef-method-2021`; `ec-jrc-stm-bref-2006` |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_material_receipts` | `stock_receipt_and_preparation` | 不锈钢原料 | 地磅单、收货记录和物料清单 | 收货质量；合格质量；合金牌号；厚度；供应商；再生成分；批次号 | 将校准收货秤与采购和生产领料记录核对 | kg | 每批交货和生产批次 | 代表性连续 12 个月或已声明生产期 | 服务于纳入生产的全部接收点 | 汇总可归属合格及不合格质量，再按合格净产品归一化 | 秤校准、材料证书和核对日志 |
| `cp_process_energy` | 全部适用过程 | 电力 | 分表或表组日志 | 起止读数；kWh；表号；过程；产品批次；运行时间 | 优先直接分表；否则按稳定表组的有文件依据机器时间分配 | kWh 和 MJ | 每批或至少每月 | 与生产相同期间 | 全部纳入工厂过程 | 扣除有文件依据的非生产负荷，kWh 转 MJ 后归一化 | 表计校准和分配工作表 |
| `cp_intermediate_mass_transfer` | 原料、成形、热处理和精整过程 | 内部产品转移 | 秤或经核验计数记录 | 毛重；皮重；件数；平均单件质量；来源过程；去向过程；批次号 | 称量转移容器，或以实测平均单件质量换算核验件数 | kg | 每批 | 与生产相同期间 | 全部纳入转移 | 按批次核对匹配的投入和产出转移 | 秤校准、抽样记录和转移核对 |
| `cp_scrap_waste` | 原料和成形过程 | 工业后钢废料 | 废料容器称重和废物转移记录 | 毛重；皮重；牌号；污染；来源过程；去向；日期 | 内部回收或外送前称量分类废料容器 | kg | 每容器或每批外送 | 与生产相同期间 | 全部纳入废料点 | 按来源过程和产品分配汇总净废料 | 秤校准和去向收据 |
| `cp_cutting_fluid` | `forming_and_trimming` | 切削液和废切削油 | 库存领用、退回、回收和废物转移记录 | 领用质量；未改变退回量；回收量；废物质量；配方；含水率；批次号 | 平衡购入或领用液、可复用退回和外送废物 | kg | 每次补加和废物外送 | 与生产相同期间 | 纳入的修边设备 | 消耗量等于领用减可复用退回，并校正库存变化 | 库存核对和废物联单 |
| `cp_thermal_fuel` | `thermal_treatment` | 天然气 | 校准燃气表和炉次日志 | 体积；温度；压力；干湿基；表号；炉次；产品质量 | 读取专用表，或采用有文件依据的共用表分配 | m3 | 每炉次或每日 | 与热处理生产相同期间 | 纳入的炉体 | 按产品炉次汇总参考条件体积 | 表计校准和换算记录 |
| `cp_direct_co2` | `thermal_treatment` | 化石二氧化碳 | 直接监测或燃料碳计算记录 | 实测 CO2；燃料体积；碳含量；氧化因子；参考条件；炉次 | 直接测量，或使用所采集燃料和有文件依据的场址特定碳数据计算 | kg | 每炉次或报告月 | 与燃料记录相同期间 | 纳入的现场燃烧源 | 汇总直接化石 CO2 后归一化；排除上游燃料和电力排放 | 监测仪校准，或签署计算表和供应商碳数据 |
| `cp_surface_treatment_inputs` | `surface_finishing_and_cleaning` | 水、氢氧化钠和磨料 | 生产线表计、槽液日志和物料领用记录 | 水；化学溶液质量；浓度；磨料领用；回收磨料；槽号；产品批次 | 计量水，并核对化学品或磨料领用、退回和库存变化 | kg | 每班或每批 | 与成品生产相同期间 | 全部纳入精整操作 | 计算纯化学品和磨料净消耗后归一化 | 表计校准、槽液分析和库存核对 |
| `cp_wastewater` | `surface_finishing_and_cleaning` | 碱性精整废水 | 排放表、槽容变化和实验室记录 | 废水质量或体积；密度；pH；金属浓度；处理；去向；时间 | 计量排放，或采用校准槽容变化和密度换算 | kg | 每次排放或连续 | 与精整生产相同期间 | 全部纳入精整排水点 | 稀释前汇总，避免重复计算处理回流 | 表计校准、实验室报告和转移收据 |
| `cp_dust_and_pm` | `surface_finishing_and_cleaning` | 捕集粉尘和直接 PM10 | 滤料称重、容器称重、源测试或经验证计算 | 毛重和皮重；换滤；PM10 结果；风量；运行时间；排放点；隔室 | 分别称量捕集粉尘，并针对确认排放点测量或计算未捕集 PM10 | kg | 每次换滤或换容器及每次所需源测试 | 代表性生产期 | 全部纳入精整抽排点 | 核对捕集和排放颗粒物，避免重复计算 | 秤校准、源测试报告和排放点记录 |
| `cp_packaging_materials` | `final_inspection_and_packaging` | 瓦楞纸箱和 LDPE 薄膜 | 包装物料清单和供应商规范 | 组件号；单件质量；领用件数；退回；废物；产品件数；批次 | 通过称量核验单件质量，并核对领用和退回 | kg | 每包装批次 | 与成品生产相同期间 | 全部纳入包装线 | 随合格产品提供的组件净质量除以产品净质量 | 供应商规范、抽样称量和库存核对 |
| `cp_finished_product` | 精整和包装过程 | 检验合格产品和参考产品 | 最终称重、件数和放行记录 | 产品净质量；件数；平均单件质量；不合格品；规范；包装皮重；批次号 | 包装前称量合格干燥产品并核对放行数量 | kg | 每生产批次 | 代表性 12 个月或已声明生产期 | 全部纳入产品线 | 汇总合格净质量并将参考产出设为 1 kg | 秤校准、检验放行和件数换算记录 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `calc_reference_normalization` | 全部前景行 | 归一化数量 = 可归属交换数量 / 合格成品净质量 | 可归属交换；合格净质量 | 每 1 kg 成品净质量的交换 | `ec-pef-method-2021` |
| `calc_count_to_mass` | 仅有件数的记录 | 质量 = 件数 × 实测产品特定平均单件质量 | 件数；抽样单件质量 | 产品或包装 kg | `ec-pef-method-2021` |
| `calc_electricity_mj` | 电力 | MJ = 计量 kWh × 3.6 | 计量 kWh | MJ 电力 |  |
| `calc_cutting_fluid_consumption` | 切削液 | 消耗质量 = 期初库存 + 购入或领用 - 期末库存 - 未改变退回 - 洁净回收液 | 库存、领用、退回和回收记录 | 切削液净消耗 | `us-epa-fabricated-metal-sector-notebook-1995` |
| `calc_direct_fossil_co2` | 天然气燃烧 | 优先采用直接实测 CO2；否则对采集燃气应用有文件依据的场址特定燃料碳和氧化计算 | 直接监测，或燃气体积、碳含量和氧化方法 | kg 直接化石 CO2 | `ec-pef-method-2021` |
| `calc_metal_balance` | 含金属流 | 金属投入质量 = 产品净金属 + 外送废料 + 捕集含金属粉尘 + 直接金属排放 + 有文件依据的库存变化和留存中间体 | 原料、产品、废料、粉尘、排放和库存记录 | 质量平衡差及核对比率 | `us-epa-fabricated-metal-sector-notebook-1995` |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_product_identity` | 参考产品 | 保留产品图样或规范、材料证书、实测净质量、表面处理、组件和包装配置以及寿命声明。 | 批准规范、证书和检验放行 |
| `dq_temporal_alignment` | 全部前景数据 | 使用同一代表性期间；披露生产期、停机、返工和任何外推。 | 有日期的生产、表计、库存和废物记录 |
| `dq_meter_traceability` | 质量、能源、水和燃气 | 识别各表计或秤、校准状态、分辨率和分配边界。 | 有效校准证书和表计图 |
| `dq_completeness` | 过程清单 | 核对采购、库存变化、生产产出和废物转移；解释每项缺失或估算交换。 | 签署核对表和完整性清单 |
| `dq_route_specificity` | 条件过程 | 记录热处理、化学精整、涂层、连接及各包装组件是否适用；不得将不存在的操作平均计入产品。 | 路线卡、批次流转单和物料清单 |
| `dq_background_linkage` | 外购投入 | 使用与材料状态、合金或配方、供应地域、技术和交付边界相容的上游数据集；披露全部代理。 | 数据集元数据和代理理由 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_identity` | 参考产品 | 缺少产品族、主要金属、合金、净质量、路线、表面处理、组件、工厂地域、包装或寿命限定信息时，数据包校验失败。 | `un-cpc-3-0-2025`; `ec-pef-method-2021` |
| `validate_reference_amount` | 参考流 | 确认发布参考产出恰为 1 kg 成品净质量且排除全部包装质量。 | `ec-pef-method-2021` |
| `validate_inventory_identity` | 每项清单行 | 要求一个原子选定流，且具有已确认 UUID 或明确未解决身份发现；拒绝笼统公用工程、材料、废物或排放。 |  |
| `validate_process_coverage` | 产品路线 | 将每个必需过程及适用条件过程与生产记录匹配；对省略的条件阶段记录有理由的“不适用”判定。 | `us-epa-fabricated-metal-sector-notebook-1995`; `ec-jrc-stm-bref-2006` |
| `validate_metal_balance` | 含金属清单 | 调查并披露投入原料、产品净量、废料、捕集粉尘、直接排放、库存变化和留存中间体之间的任何未核对差异。 | `us-epa-fabricated-metal-sector-notebook-1995` |
| `validate_utility_conversion` | 电力、燃气和水 | 根据所保留原始记录重新计算 kWh 到 MJ、燃气参考条件及水体积到质量的换算。 | `ec-pef-method-2021` |
| `validate_waste_destination` | 全部废物产出 | 要求每项具体废物流具有实测质量、来源过程、组成限定信息及处理或回收去向。 | `ec-jrc-stm-bref-2006` |
| `validate_ranges` | 重要定量流 | 缺少两个独立且相容的来源时，将其作为未解决范围证据需求；不得虚构验收范围，也不得将单一公开案例当作范围。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | 候选前景制造数据集；经方法学审查、UUID 闭合和数据质量审查后可成为 `secondary_dataset` 或 `background_dataset` |
| downstream_use | 已声明金属家用物品的产品特定门到门过程数据集和 lifecyclemodel 投入 |
| allowed_use | 在全部必需限定信息和未解决身份已处理后，对已声明工厂、产品、合金、路线、表面处理及包装配置建模 |
| excluded_use | 无限定 CPC 全类别平均；钢、铜、铝和铁制产品之间自动替代；缺少配送、使用、寿命和报废处理建模的从摇篮到坟墓或比较性声明 |
| required_metadata | PCR id；产品规范；CPC 语境；主要金属和合金；净质量和件数；路线及条件阶段；表面处理和涂层；场址和期间；能源和水供应；分配；包装；UUID 和代理状态 |
| required_quality_disclosure | 计量覆盖和校准；件数到质量抽样；金属平衡；表计分配；数据缺口；估算；背景数据集相容性；废物去向；直接排放方法；未解决 UUID 和范围证据需求 |
| update_trigger | 产品设计、合金、供应商、成形或精整技术、热处理路线、包装、能源或水供应、分配、法规、前景期间或 Tiangong 流身份发生实质变化 |

## 11. 数据源

| 来源 id | 类型 | 参考资料 | 用途 |
| --- | --- | --- | --- |
| `un-cpc-3-0-2025` | 官方指南（`official_guidance`） | 联合国统计司，CPC 3.0 版结构，2025 年 6 月 30 日，官方 CSV，https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Structure_30Jun2025.csv，检索于 2026-09-05 | CPC 42912 官方分类身份和列明产品范围 |
| `us-epa-fabricated-metal-sector-notebook-1995` | 官方指南（`official_guidance`） | 美国 EPA，Profile of the Fabricated Metal Products Industry，EPA/310-R-95-007，1995 年 9 月，https://nepis.epa.gov/Exe/ZyPURL.cgi?Dockey=50000DGC.TXT，检索于 2026-09-05 | 金属成形、表面准备、精整、材料投入、废物和路线分解 |
| `ec-jrc-stm-bref-2006` | 官方指南（`official_guidance`） | 欧盟委员会联合研究中心，Reference Document on Best Available Techniques for the Surface Treatment of Metals and Plastics，2006 年 8 月，https://bureau-industrial-transformation.jrc.ec.europa.eu/sites/default/files/2019-11/stm_bref_0806.pdf，检索于 2026-09-05 | 水性表面处理过程边界、公用工程、化学品、漂洗、废水、污泥、粉尘和直接排放 |
| `ec-pef-method-2021` | 标准（`standard`） | Commission Recommendation (EU) 2021/2279，Annex I Product Environmental Footprint Method，合并文本 2021 年 12 月 30 日，https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX%3A02021H2279-20211230，检索于 2026-09-05 | 功能单位、参考流归一化、系统边界、企业特定数据、数据质量和分配层级 |
