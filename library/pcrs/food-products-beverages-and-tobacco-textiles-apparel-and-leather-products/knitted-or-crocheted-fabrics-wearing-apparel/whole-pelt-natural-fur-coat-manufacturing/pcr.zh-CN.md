---
pcr_id: pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.whole-pelt-natural-fur-coat-manufacturing
status: candidate
content_maturity: authored_methodology
language: zh-CN
sync_with: pcr.en-US.md
---

# 全皮拼接天然毛皮外套制造


## 1. 范围与适用性

本方法适用于购买干燥已整饰带毛毛皮，经配皮、皮板面裁剪、缝合及衬里装配制造的新全皮拼接天然毛皮外套；使用水润定形时纳入该工序。指定路线采用成品100%棉衬里、聚酯缝纫线及钢制钩扣。不覆盖帽类、附件、毯、人造毛皮、去毛皮革、原皮整饰、再制造、毛皮条编织、抽刀放长、剪绒、化学成衣清洗、蒸汽上光和现场染色。存在这些步骤时，使用本方法前须扩展逐工序清单。CPC范围大于选定路线。本方法不设默认配方、能耗、产率、保暖等级或寿命。[来源：`cpc30-notes`；`usu-fur-2025`；`fic-coat`]。

## 2. 产品类别识别

| 字段 | 值 |
| --- | --- |
| canonical_pcr_id | pcr.food-products-beverages-and-tobacco-textiles-apparel-and-leather-products.knitted-or-crocheted-fabrics-wearing-apparel.whole-pelt-natural-fur-coat-manufacturing |
| classification_refs | CPC 3.0 28320; narrower |
| covered_products | 声明材料配置的新制带衬里全皮拼接天然毛皮外套。 |
| excluded_products | 第1节排除的所有产品和工艺路线。 |
| representative_product | 未剪绒全皮拼接外套，棉衬里、聚酯线接缝及钢制钩扣；声明物种和尺码。 |
| production_route | 毛皮接收配选→手工裁剪→条件水润定形及自然干燥→电动毛皮接缝及衬里缝合→检验及纸盒包装。 |
| market_state | 合格干燥调湿成品外套，工厂出厂状态。 |

## 3. 参考流

| 字段 | 值 |
| --- | --- |
| What | 制造指定天然毛皮外衣。 |
| How much | 1 kg净合格成品外套产出。 |
| How well | 完整外套满足声明的工厂尺寸、接缝、衬里和闭合件验收规格，不推定认证。 |
| How long or cycle | 一个工厂生产周期；穿用寿命不在本制造基准内，服务比较须另行定义。 |
| reference_flow_link | `finished_coat` |

| 字段 | 值 |
| --- | --- |
| 参考数量 | 1 |
| 参考产品流 | 合格全皮拼接天然毛皮外套 |
| 参考流属性 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` |
| 参考单位组 | 质量单位组 `93a60a57-a4c8-11da-a746-0800200c9a66` |
| 参考单位 | kg |
| 必需限定信息 | 物种及养殖或野生来源；整饰及供应商染色状态；干燥含水状态；毛皮等级及毛状态；全皮拼接技法；尺码组成；衬里组成；缝纫线；闭合件及镀层；加固配置；不含包装净产出；场址及期间；外包；供电地域及电压。 |

数据集必须声明全部限定信息。质量基准是制造核算单位，不表示相同保暖性能或寿命服务。

## 4. 计量与单位规则

| rule_id | 适用对象 | 必需流属性 | 必需单位 | 规则 |
| --- | --- | --- | --- | --- |
| `reference_mass` | 参考产品 | 质量 `93a60a56-a3c8-11da-a746-0800200b9a66` | kg | 使用经校准称量取得合格调湿外套的批次净质量，不含包装；没有同批实测质量，不能将毛皮件数或成衣件数直接换算为质量。 |
| `energy_identity` | `sewing_electricity` | 净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` | MJ | 保留公开电力基准属性及能量单位；采集kWh并按3.6 MJ/kWh换算，不能将属性改写为质量。 |
| `water_mass` | `blocking_water`; `blocking_vapour` | 质量 | kg | 直接称量水；体积读数须采用记录温度下实测密度，不设默认密度；不能混淆产品水、资源取水、废水和空气水蒸气。 |

## 5. 系统边界

### 边界概化

| 字段 | 值 |
| --- | --- |
| declared_starting_condition | 服装工厂接收干燥已整饰带毛毛皮和成品衬里及组件，鞣制、染色和供应商整理均已完成。 |
| starting_condition_role | manufacturing_input |
| product_classification_scope | CPC 3.0 28320内较窄的全皮拼接带衬里外套路线，不表示已接受分类映射。 |
| recursive_input_rule | 购买同类外套或预装配外壳时，须作为中间品另行声明并带入上游负荷；不能递归套用原始毛皮投料量或重复核算外壳。旧外套不在范围内。 |
| upstream_dataset_requirement | 扩展本gate-to-gate边界时，连接状态、物种和来源一致的已整饰毛皮、成品织物、组件、电力及水供应数据集和实际运输；养殖或捕猎、毛皮整饰及棉花或纤维生产属于上游，不是零负荷。 |
| disclosure | 声明工序、来料加工态、供应商边界、排除项、外包缝合和废水处理，不能将本前景清单称为完整cradle-to-gate。 |

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `boundary_route` | all processes | 纳入配皮、裁剪、实际返工、接缝缝合、衬里及闭合件装配、验收及包装。定形按条件纳入，此处为自然干燥；其他化学品、主动干燥或蒸汽操作须先补充明确工序和原子交换。 | `usu-fur-2025`; `fic-coat` |
| `boundary_releases` | site releases | 购买水是技术圈投入，本路线不假设清洗浴或常规工艺废水。定形径流若排出，须另行识别实际接收处理、数量和化学组成；废水处理不能当成直接淡水排放。场地清洁单独计量并披露边界。 |  |
| `boundary_end` | factory gate | 零售交付、穿用、清洗、消费者冷藏及终端处置排除，不计寿命或避免产品抵扣；附加制造运输和供应商模块时须披露。 |  |

## 6. 过程清单结构

### 过程图

| process_id | 过程名称 | 纳入状态 | 纳入条件 | 建模角色 | 定量参考 |
| --- | --- | --- | --- | --- | --- |
| `cut` | 接收、配皮与手工裁剪 | required | 声明的新外套路线。 | foreground_production | 每 1 kg 参考流 |
| `block` | 水润定形与自然干燥 | conditional | 实际进行水润定形。 | foreground_production | 每 1 kg 参考流 |
| `sew` | 毛皮接缝缝合及衬里闭合件装配 | required | 声明的新外套路线。 | foreground_production | 每 1 kg 参考流 |
| `pack` | 检验、返工核算及包装 | required | 声明的新外套路线。 | foreground_production | 每 1 kg 参考流 |

各工序交换均归一到相同合格外套净质量。内部配选毛皮、定形片和缝合外壳用批次流转单连接，不重复计为外部产品。数量无默认值；其他实际交换须逐项增加，缺项须有记录证明，不能假设为零。

### 过程：接收、配皮与手工裁剪（`cut`）

#### 输入

##### 产品流

###### 干燥已整饰天然带毛毛皮（`dressed_pelt`）

usu-fur-2025

- 选定流：干燥已整饰天然带毛毛皮
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 废物流

###### 已整饰天然毛皮裁剪边角料（`fur_offcut`）



- 选定流：已整饰天然毛皮裁剪边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：


### 过程：水润定形与自然干燥（`block`）

#### 输入

##### 产品流

###### 工艺用水（`blocking_water`）

usu-fur-2025

- 选定流：工艺用水 `94a04f7e-2d5c-41f0-b182-d54a3b373a02`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_water 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_water`
- 来源：

#### 输出

##### 基本流

###### 水蒸气（`blocking_vapour`）

usu-fur-2025

- 选定流：水蒸气 `fe0acd60-3ddc-11dd-ac04-0050c2490048`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_water 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`calculated_value`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`calculated_from_collection`
- 采集协议：`cp_water`
- 来源：


### 过程：毛皮接缝缝合及衬里闭合件装配（`sew`）

#### 输入

##### 产品流

###### 成品机织棉衬里织物（`cotton_lining`）



- 选定流：成品机织棉衬里织物
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 聚酯缝纫线（`polyester_thread`）



- 选定流：聚酯缝纫线
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 非弹性机织棉加固带（`cotton_tape`）



- 选定流：非弹性机织棉加固带
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 钢制服装钩扣（`steel_hook`）



- 选定流：钢制服装钩扣
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

###### 交流电（`sewing_electricity`）



- 选定流：交流电 `50657322-939c-4829-a87b-47c093bfa6a7`
- 流属性/单位：净热值 `93a60a56-a3c8-11da-a746-0800200c9a66` / MJ
- 数量规则：采用 cp_electricity 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_electricity`
- 来源：

###### 矿物缝纫机润滑油（`lubricating_oil`）



- 选定流：矿物缝纫机润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 废物流

###### 棉衬里裁剪边角料（`cotton_offcut`）



- 选定流：棉衬里裁剪边角料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 聚酯缝纫线废料（`thread_waste`）



- 选定流：聚酯缝纫线废料
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：

###### 废矿物润滑油（`spent_oil`）



- 选定流：废矿物润滑油
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：


### 过程：检验、返工核算及包装（`pack`）

#### 输入

##### 产品流

###### 纸盒（`paper_box`）



- 选定流：纸盒 `12d5d744-7725-4dbc-b102-43c80547f777`
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_material 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_material`
- 来源：

#### 输出

##### 产品流

###### 合格全皮拼接天然毛皮外套（`finished_coat`）



- 选定流：合格全皮拼接天然毛皮外套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：1 千克
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_output`
- 来源：

##### 废物流

###### 不合格棉衬里天然毛皮外套（`rejected_coat`）



- 选定流：不合格棉衬里天然毛皮外套
- 流属性/单位：质量 `93a60a56-a3c8-11da-a746-0800200b9a66` / kg
- 数量规则：采用 cp_waste 取得每 1 kg 参考流的实测可归属交换；批次数量除以同批合格成品外套净质量，单位kg。
- 数值来源模式：`foreground_record`
- 适用范围：`site_specific`
- 归一化基准：每 1 kg 参考流
- 基准类型：`reference_flow`
- 证据类型：`collected_record`
- 采集协议：`cp_waste`
- 来源：


## 7. 分配与共产品处理

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `allocation_subdivide` | shared equipment | 优先采用批次分表计量和分开称量领料。不可避免的共享电力采用工位运行与待机时间及实测负荷支持归属，记录总量、归属量和残差。 | `ghg-product-2011` |
| `allocation_offcuts` | saleable offcuts | 区分内部保留边角料、外销共产品和废弃物；内部复用是内部转移。优先细分避免共产品分配，否则论证物理关系；无可辩护物理基准时使用有记录的经济分配，披露价格、期间、质量、份额及敏感性，不自动计避免产品抵扣。 | `ghg-product-2011` |
| `allocation_upstream` | dressed pelts | 保留上游动物生产和整饰数据集分配，披露边界及来源；成衣装配不能按外套质量自行建立农业共产品分配。 |  |

## 8. 前景数据采集、计算与质量规则

### 数据采集协议

| protocol_id | process_id | flow_role | record_type | raw_fields | collection_method | unit | frequency | temporal_coverage | site_scope | aggregation_rule | quality_evidence |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `cp_output` | pack | 合格成品输出 | 称量及验收记录 | 批次；物种；尺码；配置；合格外套净质量；含水状态；废品；包装皮重 | 使用经校准秤称量合格完整调湿外套，不含任何包装；核对批次验收与件数，件数仅用于完整性核对。 | kg | 每批及可归属维护事件 | 覆盖全部批次及返工的声明代表性报告期 | 服装工厂及声明外包缝合方 | 每 1 kg 参考流 | 校准、流转单、验收、发票及核对表 |
| `cp_material` | cut; sew; pack | 逐项物料领用 | 领料及退料记录 | 批次；row_id；供应商批号；组成；来料状态；领用质量；退料质量 | 对每个原子物料、使用前后线轴及纸盒皮重校准称量，核对库存及物料表。 | kg | 每批及可归属维护事件 | 覆盖全部批次及返工的声明代表性报告期 | 服装工厂及声明外包缝合方 | 每 1 kg 参考流 | 校准、流转单、验收、发票及核对表 |
| `cp_water` | block | 定形水及水蒸气 | 水量衡算 | 批次；喷加水质量；滞留水分变化；回收水；径流；排放去向 | 喷加容器使用前后称重，独立测量滞留、回收和排出水；仅按闭合水量衡算归属蒸发量，保留不确定性。 | kg | 每批及可归属维护事件 | 覆盖全部批次及返工的声明代表性报告期 | 服装工厂及声明外包缝合方 | 每 1 kg 参考流 | 校准、流转单、验收、发票及核对表 |
| `cp_electricity` | sew | 工位电力 | 电表记录 | 批次；中国地域；电压；电表读数；运行及待机时间；实测负荷；分配份额 | 读取校准工位电表，与账单及共享负荷归属核对后将kWh换算为MJ。 | kWh | 每批及可归属维护事件 | 覆盖全部批次及返工的声明代表性报告期 | 服装工厂及声明外包缝合方 | 每 1 kg 参考流 | 校准、流转单、验收、发票及核对表 |
| `cp_waste` | cut; sew; pack | 每种分离废物流 | 称量及转移联单 | 批次；row_id；质量；组成；复用状态；接收方；处理；废品；维护期间 | 独立称量每种已识别流，说明延后排油归属及返工，不以废物质量抵扣原始投入。 | kg | 每批及可归属维护事件 | 覆盖全部批次及返工的声明代表性报告期 | 服装工厂及声明外包缝合方 | 每 1 kg 参考流 | 校准、流转单、验收、发票及核对表 |

### 计算规则

| rule_id | Applies to | Formula or rule | Inputs | Output | source_ids |
| --- | --- | --- | --- | --- | --- |
| `normalize_batch` | all inventory rows | q_ref = q_batch / m_finished；q_batch为按该行单位计量的可归属批次交换；m_finished为同批合格成品外套净质量，单位kg。 | q_batch; m_finished; cp_output | 每 1 kg 参考流的交换数量 |  |
| `electricity_conversion` | `sewing_electricity` | MJ = kWh × 3.6；采用可归属实测电量，保留公开净热值基准属性。 | kWh; cp_electricity | MJ |  |
| `water_balance` | `blocking_vapour` | 蒸发水量=喷加水量减滞留水分增加、回收水及独立测量径流；负残差或无法解释的失衡须调查，不能截断为零。 | cp_water | 归一化前批次空气水蒸气质量 |  |

### 数据质量要求

| requirement_id | Applies to | Requirement | Evidence |
| --- | --- | --- | --- |
| `dq_configuration` | all batches | 保持物种、来料加工态、全皮拼接技法及完整物料表一致；没有分开记录，不能混合棉衬里与丝衬里配置。 | 供应商声明及批次流转单 |
| `dq_balance` | all processes | 核对领料、内部复用、存量变化、合格质量、废品、分别记录废物和水蒸发；识别损失、含水效应及不确定性，不编造排放因子。 | 称量及公用工程核对 |
| `dq_coverage` | reporting period | 披露场址、实际日期、批次及尺码覆盖、外包方、计量完整性、排除、分配、身份缺口及数据年代，不以零替代缺失记录。 | 生产台账及质量档案 |

## 9. 校验规则

| rule_id | 适用对象 | 规则 | source_ids |
| --- | --- | --- | --- |
| `validate_reference` | `finished_coat` | 通过cp_output和全部限定信息核对1 kg完整合格调湿外套净输出；已整饰毛皮、人造毛皮及帽类不能替代该外套。 | `cpc30-notes` |
| `validate_rows` | all inventory rows | 要求原子身份、相同合格产出分母、相容公开基准属性及单位、可归属采集记录；每个实际交换须有数量，未解决UUID是声明身份缺口，不能自动作为代理。 |  |
| `validate_route` | block; sew | 按实际记录核对条件定形、油及废物适用性，核实即时空气水蒸气介质和中国低于1 kV电力；新增化学品或废水路线须明确交换及处理边界后方可验收数据集。 |  |
| `validate_balance` | batch records | 调查质量及水量残差、产出验收和返工，保留校准和不确定性；工厂质量验收不表示健康、法律或方法学批准。 |  |

## 10. 发布数据集画像

| 字段 | 值 |
| --- | --- |
| dataset_role | Gate-to-gate天然毛皮外套制造前景数据集。 |
| downstream_use | secondary_dataset; background_dataset |
| allowed_use | 经独立审查后，用于声明场址期间及来料状态下指定的全皮拼接棉衬里外套配置。 |
| excluded_use | 整个CPC覆盖；没有性能及寿命数据的保暖服务比较；原皮整饰及所有排除路线；没有连接上游证据的完整cradle-to-gate声明。 |
| required_metadata | 全部参考限定信息、批次净产出、前景边界、供应商加工、外包范围、水去向、电网地域及电压、实际分配和数据期间。 |
| required_quality_disclosure | UUID缺口、未测交换、采样及不确定性、排除项、实际损失及返工、共享计量、上游数据集局限；不表示科学批准。 |
| update_trigger | 物种或来源、整饰染色状态、衬里组成、外套设计及尺码组成、接合路线、公用工程或废物处理变化。 |

## 11. 数据源

| 来源id | 类型 | 参考 | 用途 |
| --- | --- | --- | --- |
| `cpc30-notes` | official_guidance | UN Statistics Division, CPC Version 3.0 Explanatory Notes, 30 June 2025, p.133, https://unstats.un.org/unsd/classifications/Econ/Download/In%20Text/CPC_Ver_3.0_Exp_Notes_30Jun2025.pdf | 仅分类标题及相邻排除，未规定制造方法。 |
| `usu-fur-2025` | extension_guidance | Cory Farnsworth, Sewing With Fur, Utah State University Extension, February 2025, https://extension.usu.edu/sewing/research/sewing-with-fur | Quality、Blocking、Cutting the Pattern及Sewing It Together章节，转用毛皮及接缝机械原理；示例帽不是本外套，不引用数量或寿命假设。 |
| `fic-coat` | handbook | Fur Institute of Canada, Making a Fur Coat, https://fur.ca/fur-trade-2/making-a-fur-coat/ | 定性外套配选、修剪装配及衬里，较广的整理变体并非本路线全部必需，不引用工时或工业平均值。 |
| `ghg-product-2011` | standard | GHG Protocol, Product Life Cycle Accounting and Reporting Standard, 2011, Chapter9, p.63 (PDF p.65), Tables9.1/9.2, https://ghgprotocol.org/sites/default/files/standards/Product-Life-Cycle-Accounting-Reporting-Standard_041613.pdf | 按作者判断采用历史通用分配层级，不提供毛皮专用因子或认证。 |
